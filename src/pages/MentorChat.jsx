import { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";

export default function MentorChat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m CodeBrainey AI, your coding mentor. How can I help you prepare for placements today?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/mentor/ask/", {
        message: userMessage.text,
      });

      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const botMessage = {
        sender: "bot",
        text: "⚠️ Error connecting to server. Please try again.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="p-4 bg-blue-600 text-white text-xl font-bold">
        CodeBrainey AI Mentor
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-xl ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-white text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-4 bg-white flex items-center gap-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-300 
                     text-black! font-bold placeholder-gray-500 bg-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendMessage}
          className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
