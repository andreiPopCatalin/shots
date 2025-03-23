import React, { useState, useRef, useEffect } from "react";

const FeedbackModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the modal to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const emojis = [
    { emoji: "🤬", label: "Angry" },
    { emoji: "😐", label: "Unhappy" },
    { emoji: "😏", label: "Neutral" },
    { emoji: "😎", label: "Happy" },
    { emoji: "😍", label: "Very Happy" },
  ];

  return (
    <div className="relative">
      {/* Feedback Button */}
      <button onClick={() => setIsModalOpen(!isModalOpen)} className="p-2  hover:bg-[#2C2C2E] rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20px" viewBox="0 0 24 24"><path fill="#fff" d="M19.44 2.52H4.56c-1.32 0-2.4 1.08-2.4 2.4V15c0 1.32 1.08 2.4 2.4 2.4h1.92v4.08l6-4.08h6.96c1.32 0 2.4-1.08 2.4-2.4V4.92c0-1.32-1.08-2.4-2.4-2.4M7.392 7.32h4.896c.408 0 .72.312.72.72s-.312.72-.72.72H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72m8.736 4.8H7.392a.72.72 0 0 1-.72-.72c0-.384.312-.72.72-.72h8.736c.408 0 .72.312.72.72s-.312.72-.72.72"></path></svg>
      </button>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ">
          <div
            ref={modalRef}
            className="bg-[#1C1C1E] rounded-3xl p-5 max-w-[360px] w-[360px]  border border-[#ffffff0f] shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="relative top-[-10px] bg-[#383839] rounded-full left-[285px] mb-[0px] p-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M4.362 17.793c-.48.48-.49 1.332.01 1.831.51.5 1.361.49 1.832.02L12 13.846l5.788 5.788c.49.49 1.332.49 1.831-.01.5-.51.5-1.341.01-1.831l-5.788-5.788 5.788-5.798c.49-.49.5-1.332-.01-1.831-.499-.5-1.341-.5-1.83-.01L12 10.154 6.204 4.366c-.47-.48-1.332-.5-1.832.01-.5.5-.49 1.361-.01 1.831l5.788 5.798z"></path>
              </svg>
            </button>
            <h2 className="text-xl font-bold mt-[-20px]">Send feedback,</h2>
            <h2 className="text-xl text-[#6E6E6F] font-bold mb-6">We read them all!</h2>
            {/* Emoji Rating System */}
            <div className="flex justify-between mb-4">
              {emojis.map((emoji) => (
                <button
                  key={emoji.label}
                  onClick={() => setSelectedEmoji(emoji.emoji)}
                  className={`text-3xl p-2 rounded-full bg-[#29292B] cursor-pointer transition-colors ${
                    selectedEmoji === emoji.emoji ? "bg-gray-200" : ""
                  }`}
                >
                  {emoji.emoji}
                </button>
              ))}
            </div>
            <p className="text-xl text-white font-bold mb-4">How can we improve your experience?</p>
            {/* Feedback Textarea */}
            <textarea
                placeholder="Write your feedback..."
                className="w-full p-4 h-[180px] bg-[#29292B] rounded-xl mb-2"
                rows={4}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                ></textarea>

            {/* Send Feedback Button */}
            <button
                onClick={() => {
                    setIsModalOpen(false);
                }}
                className={`w-full  ${
                    feedbackText.trim() ? "bg-[#fff]" : "bg-[#8E8E8F]"
                } text-[#1D1D1E] font-semibold text-base py-2 rounded-xl transition-colors`}
                disabled={!feedbackText.trim()}
                >
                Send Feedback
                </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackModal;