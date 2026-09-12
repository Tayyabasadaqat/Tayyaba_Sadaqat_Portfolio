export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-relaxed
          ${
            isUser
              ? "rounded-br-sm bg-purple-600 text-white"
              : "rounded-bl-sm border border-white/10 bg-white/[0.04] text-white/70"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}