import { useState } from "react";
import { Send } from "lucide-react";
import { MENTOR_ANSWERS } from "../Data/mentorAnswers";

export default function MentorChat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m CodeBrainey Mentor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const getMentorReply = (text) => {
    const lower = text.toLowerCase();
    const match = MENTOR_ANSWERS.find((item) =>
      item.keywords.some((k) => lower.includes(k))
    );

    return (
      match?.reply ||
      "🤔 I’m not sure about that. Try asking about HTML, CSS, JavaScript, React, DSA, or placements."
    );
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getMentorReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#0F172A] to-[#020617] flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b border-gray-700 text-white text-xl font-bold text-center">
        🤖 CodeBrainey Mentor
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-3 rounded-2xl max-w-[70%] text-sm md:text-base leading-relaxed shadow
                ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-100 rounded-bl-none"
                }
              `}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="border-t border-gray-700 p-4 bg-[#020617]">
        <div className="flex max-w-4xl mx-auto gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your coding doubt..."
            className="flex-1 px-4 py-3 rounded-xl bg-gray-900 text-white
                       border border-gray-700 focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white
                       px-4 py-3 rounded-xl transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
