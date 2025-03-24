import React from "react";

type SwitchButtonOption<T> = {
  value: T;
  label: React.ReactNode;
  subtext?: React.ReactNode;
};
type SwitchButtonGroupProps<T extends string> = {
    options: SwitchButtonOption<T>[];
    value: T;
    onChange: (value: T) => void;
    groupClassName?: string;
    buttonClassName?: string;
  };

export default function SwitchButtonGroup<T extends string>({ 
    options, 
    value, 
    onChange, 
    groupClassName = "",
    buttonClassName = "" 
  }: SwitchButtonGroupProps<T>) {
    return (
      <div className={`relative bg-[#101012] rounded-lg flex ${groupClassName}`}>
        {/* Animated background */}
        <div 
      className="absolute top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out bg-[#2A2A2C] rounded-lg" 
      style={{ 
        width: `calc(${100 / options.length}% - 8px)`, 
        left: `calc(${options.findIndex(opt => opt.value === value) * (100 / options.length)}% + 4px)`,
        height: '85%'
      }} 
    />
        
        {/* Buttons */}
        {options.map((option) => (
          <button
            key={option.value}
            className={`relative px-2 py-2 flex-1 z-10 text-white transition-colors ${
              value === option.value ? "text-white" : "text-gray-400"
            } ${buttonClassName}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
            {option.subtext && (
              <span className={`text-xs block ${value === option.value ? "text-white" : "text-gray-400"}`}>
                {option.subtext}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  }