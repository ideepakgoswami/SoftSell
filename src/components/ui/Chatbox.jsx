import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

const ChatBox = ({ isOpen }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 How can I help you today?" },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const defaultQuestions = [
    "How do I sell my license?",
    "What is the process to buy?",
    "What are the fees?",
    "How do I contact support?",
  ];

  const exampleAnswers = {
    "how do i sell my license?":
      "To sell your license, go to the 'Sell' tab, upload your license documents, and submit for approval. Our team will review and list it on our marketplace.",
    "what is the process to buy?":
      "Browse available licenses on the 'Buy' page, select the one you want, and connect with the seller. We facilitate secure transactions and provide escrow services.",
    "what are the fees?":
      "We charge a small commission fee of 2.5% on successful transactions. No hidden fees! The fee is only charged after a successful sale.",
    "how do i contact support?":
      "You can reach our support team through email at support@softsell.com or use this chat widget. We typically respond within 24 hours.",
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", text };
    const lowerInput = text.toLowerCase().trim();

    const botResponse =
      exampleAnswers[lowerInput] ||
      "I'm not sure about that. You can try asking about selling licenses, buying process, fees, or how to contact support.";

    setMessages((prev) => [
      ...prev,
      userMessage,
      { role: "bot", text: botResponse },
    ]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Messages Container */}
      <div className="h-72 overflow-y-auto bg-gray-50 dark:bg-primary/50 p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}>
            {msg.role === "bot" && (
              <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-secondary/10 flex items-center justify-center text-primary dark:text-secondary text-sm font-medium">
                AI
              </div>
            )}
            <div
              className={`flex-1 max-w-[80%] rounded-lg p-3 shadow-sm ${
                msg.role === "user"
                  ? "bg-primary dark:bg-secondary text-cloud"
                  : "bg-white dark:bg-primary/80 text-gray-700 dark:text-cloud"
              }`}>
              <p className="text-sm">{msg.text}</p>
              {msg.role === "bot" && i === 0 && (
                <div className="mt-3 space-y-2">
                  {defaultQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className="block w-full text-left text-sm p-2 rounded-md bg-primary/5 dark:bg-secondary/5 hover:bg-primary/10 dark:hover:bg-secondary/10 text-primary dark:text-secondary transition-colors">
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input box */}
      <div className="p-3 border-t border-cloud/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 p-2 text-sm rounded-lg border border-cloud/30 bg-white dark:bg-primary/50 text-gray-900 dark:text-cloud placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/30"
            placeholder="Type a message..."
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="bg-primary dark:bg-secondary text-cloud px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary dark:hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <IoSend className="text-lg" />
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
