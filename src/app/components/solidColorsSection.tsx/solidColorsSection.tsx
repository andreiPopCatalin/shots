import React, { useState } from "react";
import { cn } from "@/utils/cn";

const solidColors = [
    "rgb(248, 249, 250)", "rgb(222, 226, 230)", "rgb(173, 181, 189)", 
    "rgb(73, 80, 87)", "rgb(33, 37, 41)", "rgb(21, 22, 23)", 
    "rgb(255, 89, 94)", "rgb(255, 146, 76)", "rgb(255, 202, 58)", 
    "rgb(197, 202, 48)", "rgb(138, 201, 38)", "rgb(63, 201, 93)", 
    "rgb(255, 173, 173)", "rgb(255, 194, 169)", "rgb(255, 214, 165)", 
    "rgb(253, 255, 182)", "rgb(202, 255, 191)", "rgb(195, 255, 208)", 
    "rgb(54, 148, 157)", "rgb(25, 130, 196)", "rgb(66, 103, 172)", 
    "rgb(86, 90, 160)", "rgb(106, 76, 147)", "rgb(238, 75, 134)", 
    "rgb(179, 251, 223)", "rgb(170, 224, 239)", "rgb(160, 196, 255)", 
    "rgb(189, 178, 255)", "rgb(255, 198, 255)", "rgb(255, 199, 236)"
];

const SolidColorSection= ({ onSelect }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<String>("");

  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer p-2 rounded-md" onClick={() => setExpanded(!expanded)}>

        <h2 className="text-white font-medium text-sm">Solid Color</h2>
        <span className={cn("transition-transform hover:bg-[rgba(255,255,255,0.06)] p-[6px] rounded-md", expanded ? "rotate-180" : "rotate-0")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-[18px]" viewBox="0 0 24 24">
            <path fill="#636365" d="M2 8.539c0-.797.688-1.448 1.543-1.448.421 0 .821.165 1.12.455l7.348 7.031 7.325-7.031a1.65 1.65 0 0 1 1.121-.455c.855 0 1.543.651 1.543 1.448 0 .403-.144.734-.433 1.003l-8.324 7.93c-.366.352-.766.528-1.243.528-.466 0-.866-.165-1.243-.527L2.444 9.542C2.155 9.262 2 8.932 2 8.539"></path>
            </svg>
        </span>
      </div>
      <div className={cn("grid grid-cols-6 gap-2 p-[8px] mt-2 transition-all", expanded ? "h-full" : "max-h-[80px] overflow-hidden")}>
        {solidColors.map((color) => (
          <button
            key={color}
            className={cn(
              "w-[30px] h-[30px] rounded-full  transition-all border-2",
              selectedColor === color 
                  ? "outline outline-[1.5px] outline-white outline-offset-[3px]"
                  : "border-2 border-transparent hover:border-zinc-600"
            )}
            style={{ backgroundColor: color, boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, .12)" }}
            onClick={() => {
              setSelectedColor(color);
              onSelect(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SolidColorSection;