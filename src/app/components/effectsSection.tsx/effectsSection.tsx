import React, { useState } from "react";
import { motion } from "framer-motion";

const EffectsPanel = () => {
  const [noise, setNoise] = useState(0);
  const [blur, setBlur] = useState(0);

  return (
    <div className="p-1 bg-[#1C1C1E] mb-2 rounded-xl">
      <h6 className="text-[#ffffff5c] text-xs font-semibold mb-2">EFFECTS</h6>
      <div className="space-y-3">
        {[{ label: "Noise", value: noise, setValue: setNoise }, { label: "Blur", value: blur, setValue: setBlur }].map((effect) => (
          <div key={effect.label} className="relative h-[28px] flex items-center bg-[#101012] rounded-lg h-8 overflow-hidden">
            <span className="text-gray-300 text-xs font-medium pl-3 z-10">{effect.label}</span>
            
            {/* Expanding Bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-zinc-700 rounded-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${effect.value -4}%` }}
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
              max="100"
              value={effect.value}
              onChange={(e) => effect.setValue(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <span className="text-gray-300 text-xs font-medium pr-3 ml-auto z-10">{effect.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EffectsPanel;
