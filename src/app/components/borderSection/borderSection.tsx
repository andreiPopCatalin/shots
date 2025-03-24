import { motion } from "framer-motion";
import React, { useState } from "react";
import SwitchButtonGroup from "../switchButtonGroup/switchButtonGroup";

const BorderSection = () => {
  const [radius, setRadius] = useState(20);

  return (
      <div className="flex justify-between items-start gap-4 mt-2 relative z-[1]">
        <div className="flex flex-col w-full">
          <span className="text-[#626264] font-bold text-sm mb-2">Border</span>
                      <SwitchButtonGroup
                        options={[
                          { value: "0", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/border/sharp.webp"/>, subtext: "Sharp" },
                          { value: "20", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/border/curve.png"/>, subtext: "Curved" },
                          { value: "40", label: <img className="w-[28px] mx-auto mb-1 rounded-md" src="/images/border/round.webp"/>, subtext: "Round" },
                        ]}
                        groupClassName="h-[74px]"
                        value={String(radius)}  // Convert `radius` to string
                        onChange={(quality) => (setRadius(Number(quality)))}
                      />
          <div className="relative h-[28px] flex items-center bg-[#101012] rounded-lg h-8 mt-2 overflow-hidden">
            <span className="text-gray-300 text-xs font-medium pl-3 z-10">Radius</span>
            {/* Expanding Bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-zinc-700 rounded-lg"
              initial={{ width: "0%" }}
              animate={{ width: `${radius * 2.40}%` }}
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
              max="40"
              step="1"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />

            <span className="text-gray-300 text-xs font-medium pr-3 ml-auto z-10">{radius}</span>
          </div>
        </div>
      </div>
  );
};

export default BorderSection;