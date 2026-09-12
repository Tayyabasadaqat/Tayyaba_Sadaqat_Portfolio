import ReactMarkdown from "react-markdown";

export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
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
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-2 last:mb-0">
                  {children}
                </p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-white">
                  {children}
                </strong>
              ),

              ul: ({ children }) => (
                <ul className="my-2 space-y-1.5 pl-4">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="my-2 list-decimal space-y-1.5 pl-5">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="list-disc marker:text-purple-400">
                  {children}
                </li>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    break-all
                    text-purple-300
                    underline
                    decoration-purple-400/30
                    underline-offset-4
                    transition
                    hover:text-purple-200
                  "
                >
                  {children}
                </a>
              ),

              code: ({ children }) => (
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-purple-200">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}