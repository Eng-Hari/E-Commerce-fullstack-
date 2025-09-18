import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Bot, X, Send } from "lucide-react";

const AssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "👋 Hey! Need help finding something?" },
    { role: "bot", text: "💡 Try: 'T-shirt', 'My orders', 'Show men items'" }
  ]);
  const [input, setInput] = useState("");

  const { setSearch } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    handleAssistantReply(input.trim().toLowerCase());
    setInput("");
  };

  const handleAssistantReply = (input) => {
    const keywords = {
      products: ["t-shirt", "dress", "kurta", "jeans", "shirt", "top", "pant", "skirt"],
      categories: ["men", "women", "kids", "collection"],
      orders: ["order", "track", "status", "my order"]
    };

    let response = "Sorry, I didn’t get that. Try 'T-shirt' or 'My Orders'.";

    if (keywords.products.some(word => input.includes(word))) {
      setSearch(input);
      response = `🔍 Searching for: "${input}"`;
      setTimeout(() => {
        navigate("/collection");
        setIsOpen(false);
      }, 1000);
    } else if (keywords.categories.some(word => input.includes(word))) {
      setSearch(input);
      response = `🛍️ Showing "${input}" category`;
      setTimeout(() => {
        navigate("/collection");
        setIsOpen(false);
      }, 1000);
    } else if (keywords.orders.some(word => input.includes(word))) {
      response = `📦 Redirecting to your orders...`;
      setTimeout(() => {
        navigate("/orders");
        setIsOpen(false);
      }, 1000);
    }

    setMessages((prev) => [...prev, { role: "bot", text: response }]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Toggle Button */}
      <button
        className="bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant"
      >
        {isOpen ? <X size={20} /> : <Bot size={20} />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="mt-4 w-[320px] sm:w-[360px] bg-white border border-gray-300 rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-black text-white text-sm sm:text-base font-semibold px-4 py-3">
            Assistant
          </div>

          {/* Messages */}
          <div className="p-3 overflow-y-auto max-h-96 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-xl max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center border-t border-gray-200 p-2">
            <input
              type="text"
              className="flex-1 text-sm px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white border border-black border-l-0 rounded-r-md hover:bg-gray-800 transition text-sm"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AssistantChat;
