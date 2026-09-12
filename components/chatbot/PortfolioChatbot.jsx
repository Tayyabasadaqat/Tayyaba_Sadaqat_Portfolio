"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatMessage from "./ChatMessage";

const suggestions = [
  "Tell me about Nishaan",
  "What are Tayyaba's skills?",
  "What projects has she built?",
  "How can I contact her?",
];

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Tayyaba's portfolio AI. Ask me about her projects, skills, experience or how to contact her.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (customMessage) => {
    const text = (customMessage || input).trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ||
        "http://127.0.0.1:8000";

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I couldn't connect to the AI right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <>
      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              bottom-24
              right-4
              z-[99998]
              flex
              h-[560px]
              w-[calc(100%-2rem)]
              max-w-[380px]
              flex-col
              overflow-hidden
              rounded-[24px]
              border
              border-purple-500/20
              bg-[#080808]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              backdrop-blur-2xl
              sm:right-7
              sm:w-[380px]
            "
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple-400/30
                    bg-purple-500/10
                    text-purple-300
                  "
                >
                  ✦
                </div>

                <div>
                  <h3 className="text-sm font-medium text-white">
                    Tayyaba AI
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-green-400
                      "
                    />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.22em]
                        text-white/30
                      "
                    >
                      Portfolio Assistant
                    </span>
                  </div>
                </div>
              </div>

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-lg
                  text-white/35
                  transition
                  hover:bg-white/5
                  hover:text-white
                "
              >
                ×
              </button>
            </div>

            {/* MESSAGES */}
            <div
              className="
                flex-1
                space-y-3
                overflow-y-auto
                px-4
                py-5
              "
            >
              {messages.map((message, index) => (
                <ChatMessage
                  key={`${message.role}-${index}`}
                  role={message.role}
                  content={message.content}
                />
              ))}

              {/* TYPING INDICATOR */}
              {loading && (
                <div className="flex justify-start">
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-2xl
                      rounded-bl-sm
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-4
                    "
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        animate={{
                          opacity: [0.25, 1, 0.25],
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: dot * 0.15,
                        }}
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-purple-400
                        "
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* SUGGESTIONS */}
            {messages.length === 1 && (
              <div
                className="
                  flex
                  gap-2
                  overflow-x-auto
                  px-4
                  pb-3
                "
              >
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-2
                      text-[9px]
                      text-white/40
                      transition
                      hover:border-purple-400/30
                      hover:text-purple-300
                    "
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* INPUT */}
            <form
              onSubmit={handleSubmit}
              className="
                border-t
                border-white/10
                p-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-3
                  transition
                  focus-within:border-purple-400/40
                "
              >
                <input
                  value={input}
                  onChange={(event) =>
                    setInput(event.target.value)
                  }
                  placeholder="Ask about Tayyaba..."
                  disabled={loading}
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    py-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/20
                  "
                />

                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-purple-500
                    text-sm
                    text-white
                    transition
                    hover:bg-purple-400
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                  "
                >
                  ↑
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ASK TAYYABA AI BUTTON */}
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open Tayyaba AI"
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="
          fixed
          bottom-5
          right-5
          z-[99999]
          flex
          items-center
          gap-3
          rounded-full
          border
          border-purple-400/30
          bg-black/90
          px-4
          py-3
          text-sm
          text-white
          shadow-[0_0_35px_rgba(124,58,237,0.25)]
          backdrop-blur-xl
          transition
          hover:border-purple-400/60
          sm:bottom-7
          sm:right-7
        "
      >
        <motion.span
          animate={{
            rotate: [0, 8, -8, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="text-purple-400"
        >
          ✦
        </motion.span>

        <span>Ask Tayyaba AI</span>
      </motion.button>
    </>
  );
}