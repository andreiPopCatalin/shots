"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface GradientSectionProps {
  title: string;
  gradients: string[];
  selectedGradient: string;
  onSelect: (gradient: string) => void;
}

export default function GradientSection({ title, gradients, selectedGradient, onSelect }: GradientSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      {/* Section Title with Expand Arrow */}
      <div 
        className="flex justify-between items-center cursor-pointer p-2 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-white font-medium text-sm">{title}</h2>
        <span className={cn("transition-transform hover:bg-[rgba(255,255,255,0.06)] p-[6px] rounded-md", expanded ? "rotate-180" : "rotate-0")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-[18px]" viewBox="0 0 24 24">
            <path fill="#636365" d="M2 8.539c0-.797.688-1.448 1.543-1.448.421 0 .821.165 1.12.455l7.348 7.031 7.325-7.031a1.65 1.65 0 0 1 1.121-.455c.855 0 1.543.651 1.543 1.448 0 .403-.144.734-.433 1.003l-8.324 7.93c-.366.352-.766.528-1.243.528-.466 0-.866-.165-1.243-.527L2.444 9.542C2.155 9.262 2 8.932 2 8.539"></path>
          </svg>
        </span>
      </div>

      {/* Image Grid */}
      <div className={cn("grid grid-cols-3 gap-1 p-[4px] transition-all", expanded ? "h-full" : "max-h-[82px] overflow-hidden")}>
        {gradients.map((gradient) => (
          <div
            key={gradient}
            className={cn(
                "cursor-pointer rounded-[9px] max-h-[35px] h-[35px] overflow-hidden transition-all",
                selectedGradient === gradient
                  ? "outline outline-[1.5px] outline-white outline-offset-[3px]"
                  : "border-2 border-transparent hover:border-zinc-600"
              )}
            onClick={() => onSelect(gradient)}
          >
            <div style={{ background: gradient, boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, .12)" }} className={cn("w-full h-full object-cover")} />
          </div>
        ))}
      </div>
    </div>
  );
}
