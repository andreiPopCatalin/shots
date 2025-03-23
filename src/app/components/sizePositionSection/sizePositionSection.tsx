import { motion } from "framer-motion";
import React, { useState } from "react";

const SizePositionSection = () => {
  const [size, setSize] = useState(100);
  const [activeDot, setActiveDot] = useState(12); // Center dot is initially active (index 12)
  const [isHovering, setIsHovering] = useState(false); // Track hover state

  return (
    <div className="rounded-xl">
      <div className="flex justify-between items-start gap-4 relative z-[1]">
        <div className="flex flex-col w-full">
          <span className="text-[#626264] font-bold text-sm mb-2">Size & Position</span>
          <div className="relative h-[28px] flex items-center bg-[#101012] rounded-lg h-8 overflow-hidden">
            <span className="text-gray-300 text-xs font-medium pl-3 z-10">Size</span>
            {/* Expanding Bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-zinc-700 rounded-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${size * 0.5}%` }}
              transition={{ duration: 0.05 }}
            >
              {/* Vertical Line on the Right Side of the Expanding Bar */}
              <motion.div
                className="absolute right-1 top-0 bottom-0 w-[2px] mr-[-6px] mt-[4px] mb-[4px] bg-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </motion.div>

            <input
              type="range"
              min="0"
              max="200"
              step="1"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <span className="text-gray-300 text-xs font-medium pr-3 ml-auto z-10">{size}</span>
          </div>
          <div
            className="grid grid-cols-5 bg-[#101012] rounded-3xl mt-2 gap-[3px] p-[3px]"
            onMouseEnter={() => setIsHovering(true)} // Set hover state to true
            onMouseLeave={() => setIsHovering(false)} // Set hover state to false
          >
            {Array.from({ length: 25 }).map((_, index) => {
              const isActive = index === activeDot; // Check if the current dot is active
              return (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isHovering ? " border-[#ffffff0f] border" : "" // Apply hover effect to all dots
                  } ${
                    isActive ? "bg-[#2E2E30]" : "" // Active dot styling
                  }`}
                  onClick={() => setActiveDot(index)} // Set the clicked dot as active
                >
                  <div
                    className={`w-10 h-10 rounded-full ${
                      isActive ? "border border-[#ffffff0f]" : "hover:bg-[#ffffff0f]" // Active dot border color
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizePositionSection;