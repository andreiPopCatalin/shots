import { motion } from "framer-motion";
import React, { useState } from "react";
import SwitchButtonGroup from "../switchButtonGroup/switchButtonGroup";
import { cn } from "@/utils/cn";

type ShadowType = "None" | "Spread" | "Hug" | "Adaptive";

const ShadowSection = () => {
  const [size, setSize] = useState(100);
  const [activeDot, setActiveDot] = useState(12); // Center dot is initially active (index 12)
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  const [isHidden, setIsHidden] = useState(true)
  const [shadowType, setShadowType] = useState<ShadowType>("None");

  return (
    <div className="rounded-xl">
      <div className="flex justify-between items-start gap-4 relative z-[1]">
        <div className="flex flex-col w-full">
          <span className="text-[#626264] font-bold text-sm mb-2">Shadow</span>
                      <SwitchButtonGroup
                        options={[
                          { value: "None", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/shadow/shadow-none.jpg"/>, subtext: "None" },
                          { value: "Spread", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/shadow/shadow-spread.jpg"/>, subtext: "Spread" },
                          { value: "Hug", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/shadow/shadow-hug.jpg"/>, subtext: "Hug" },
                          { value: "Adaptive", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/shadow/shadow-adaptive.jpg"/>, subtext: "Adaptive" }
                        ]}
                        groupClassName="h-[74px]"
                        value={shadowType}
                        onChange={(quality) => (setShadowType(quality))}
                      />
          <div className={cn("relative h-[28px] flex items-center bg-[#101012] rounded-lg h-8 mt-2 overflow-hidden",
                          shadowType === "None" ? "opacity-[0.5]" : "" )}>
            <span className="text-gray-300 text-xs font-medium pl-3 z-10">Opacity</span>
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
              disabled={shadowType === 'None' ? true : false}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <span className="text-gray-300 text-xs font-medium pr-3 ml-auto z-10">{size}</span>
          </div>
          {!isHidden && (
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
          )}
          <button onClick={() => setIsHidden(!isHidden)} disabled={shadowType === 'None' ? true : false} className="mt-2 rounded-lg bg-[#222224] hover:bg-[#383839] text-center center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-center w-full"  height="24px" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1.29 12c0 1.188 1.017 2.16 2.262 2.16s2.244-.972 2.244-2.16-1-2.158-2.244-2.158-2.263.97-2.263 2.158zM12 14.16c-1.245 0-2.263-.972-2.263-2.16S10.755 9.842 12 9.842s2.244.97 2.244 2.158-1 2.16-2.244 2.16m8.448 0c-1.263 0-2.263-.972-2.263-2.16s1-2.158 2.263-2.158c1.245 0 2.244.97 2.244 2.158s-1 2.16-2.244 2.16" clipRule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShadowSection;