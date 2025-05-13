import { useState } from "react";
import { IoChatbubbleEllipses, IoClose } from "react-icons/io5";
import ChatBox from "../ui/Chatbox";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-primary dark:bg-secondary text-cloud rounded-full shadow-xl w-14 h-14 text-2xl hover:bg-secondary dark:hover:bg-primary transition-all focus:outline-none focus:ring-2 focus:ring-secondary/30">
        {isOpen ? <IoClose /> : <IoChatbubbleEllipses />}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[95vw] bg-white dark:bg-primary/90 backdrop-blur-xl border border-cloud/30 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="bg-primary/90 dark:bg-secondary/90 text-cloud px-4 py-3 flex items-center justify-between rounded-t-2xl">
            <span className="font-bold">Soft Sell AI</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cloud/70 hover:text-secondary text-xl font-bold transition-colors">
              ×
            </button>
          </div>

          {/* ChatBox */}
          <ChatBox isOpen={isOpen} />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
