// Add these imports and types
import { cn } from "@/utils/cn";
import React, { useState, useRef, useEffect } from "react";
import ExportPreviews from "../exportPreviews/exportPreviews";
import SwitchButtonGroup from "../switchButtonGroup/switchButtonGroup";

type ImageFormat = "PNG" | "JPEG";
type ImageQuality = "1x" | "2x" | "3x";

type SwitchButtonOption<T> = {
  value: T;
  label: React.ReactNode;
  subtext?: React.ReactNode;
};

type SwitchButtonGroupProps<T extends string> = {
  options: SwitchButtonOption<T>[];
  value: T;
  onChange?: (value: T) => void;
  groupClassName?: string;
  buttonClassName?: string;
};


export default function ExportSidebar() {
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [imageFormat, setImageFormat] = useState<ImageFormat>("PNG");
  const [imageQuality, setImageQuality] = useState<ImageQuality>("1x");
  const exportButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const boxesData = [
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "-8deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, 0%) scale(0.95) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "8deg",
      scale: "1",
      transformStyle: "perspective(400em) translate(0%, 0%) scale(0.95) rotateX(0deg) rotateY(0deg) rotateZ(-8deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "-8deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(-4%, -2%) scale(0.95) rotateX(10deg) rotateY(-20deg) rotateZ(8deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "8deg",
      scale: "1",
      transformStyle: "perspective(400em) translate(4%, -2%) scale(0.95) rotateX(10deg) rotateY(20deg) rotateZ(-8deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "-8deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, -5%) scale(0.95) rotateX(40deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, -5%) scale(0.95) rotateX(45deg) rotateY(0deg) rotateZ(-45deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 1,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, 0%) scale(0.95) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, -5%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(-5deg) skewX(0deg) skewY(0deg)",
      transformStyleSecond: "perspective(400em) translate(15%, 5%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(2deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(10%, -15%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(-5deg) skewX(0deg) skewY(0deg)",
      transformStyleSecond: "perspective(400em) translate(-10%, 15%) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(5deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(30%, 35%) scale(1) rotateX(15deg) rotateY(20deg) rotateZ(-20deg) skewX(0deg) skewY(0deg)",
      transformStyleSecond: "perspective(400em) translate(-30%, -45%) scale(1) rotateX(15deg) rotateY(20deg) rotateZ(-20deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(15%, -30%) scale(1) rotateX(0deg) rotateY(30deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      transformStyleSecond: "perspective(400em) translate(-15%, 30%) scale(1) rotateX(0deg) rotateY(30deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    },
    {
      background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
      rotateZ: "45deg",
      scale: "0.95",
      transformStyle: "perspective(400em) translate(0%, 30%) scale(1) rotateX(0deg) rotateY(-30deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      transformStyleSecond: "perspective(400em) translate(0%, -30%) scale(1) rotateX(0deg) rotateY(30deg) rotateZ(0deg) skewX(0deg) skewY(0deg)",
      hasAnimation: true,
      isMultiple: 2,
    }
  ];


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isExportModalOpen &&
        exportButtonRef.current &&
        !exportButtonRef.current.contains(event.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsExportModalOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExportModalOpen]);

  return (
    <aside className="static top-0 right-0 w-[254px] bg-[#0D0D0D] scrollbar-hide pr-2 min-w-[254px] max-w-[254px] space-y-1">
      <div className="w-full bg-[#FFFFFF] max-h-[52px] mt-2 rounded-xl p-1">
        <div className="flex items-center justify-between">
          {/* Logo Button - Updated to show current selections */}
          <button className="flex items-center text-black rounded-lg p-1 cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.058 2c-.631 0-1.087.442-1.087 1.073v13.393l.134 3.303.684-.241-4.069-4.527-1.921-1.867a1.08 1.08 0 0 0-.752-.295c-.605 0-1.047.47-1.047 1.06 0 .282.106.538.334.794l6.919 6.931c.228.241.51.376.805.376s.578-.135.806-.376l6.918-6.931c.228-.256.335-.512.335-.794 0-.59-.443-1.06-1.047-1.06-.282 0-.564.107-.752.295l-1.921 1.867-4.084 4.527.699.241.134-3.303V3.073c0-.631-.456-1.073-1.088-1.073"></path>
            </svg>
            <span className="ml-2 text-sm"><b>Export</b></span> 
            <span className="ml-2 text-xs font-medium">{imageQuality} · {imageFormat}</span>
          </button>
          
          {/* Copy Button */}
          <button className="flex items-center bg-[#E5E5E5] hover:bg-[#CCCCCC] text-black rounded-lg p-1 cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24">
              <g fill="currentColor" fillRule="evenodd">
                <path d="M11.82 6.02h.2c.16 0 .32.06.43.18l4.07 4.24c.1.11.16.26.16.41v7.48c0 1.98-1.62 3.61-3.6 3.64H6.49c-1.99-.04-3.58-1.68-3.54-3.66V9.59c.04-2 1.69-3.61 3.67-3.61l5.04-.01c.03-.01.06-.01.1-.01Zm-.61 1.21H6.66c-1.34 0-2.44 1.07-2.48 2.41v8.71a2.376 2.376 0 0 0 2.34 2.43l.11-.01h6.44a2.44 2.44 0 0 0 2.39-2.44l-.01-6.73h-1.62a2.684 2.684 0 0 1-2.67-2.68l-.01-1.73Zm1.2.67v1.05c0 .8.65 1.46 1.46 1.46l.95-.01-2.42-2.52Z"></path>
                <path d="M15.949 2c-.04-.01-.07-.01-.11-.01h-5.16c-1.99 0-3.63 1.6-3.68 3.6V6.8h1.2V5.6a2.48 2.48 0 0 1 2.47-2.42l4.54-.01v1.72c0 1.47 1.19 2.67 2.66 2.67l1.61-.01v6.72c0 1.32-1.08 2.41-2.4 2.43H15.8v1.2l1.27-.01a3.67 3.67 0 0 0 3.596-3.65V6.76c0-.16-.07-.31-.17-.42l-4.08-4.25a.63.63 0 0 0-.44-.19l-.11-.01Zm.5 2.93-.01-1.06 2.41 2.51h-.96c-.81-.01-1.47-.67-1.47-1.47Z"></path>
              </g>
            </svg>
          </button>
          
          {/* Export Settings Button */}
          <button
            ref={exportButtonRef}
            onClick={() => setIsExportModalOpen(!isExportModalOpen)}
            className="flex items-center bg-[#E5E5E5] hover:bg-[#CCCCCC] text-black rounded-lg ml-1 p-1 cursor-pointer transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M17.38 13.7c1.71 0 3.11 1.38 3.11 3.09 0 1.7-1.4 3.09-3.12 3.09s-3.12-1.39-3.12-3.1 1.39-3.1 3.11-3.1Zm0 1.5c-.89 0-1.62.71-1.62 1.59s.72 1.59 1.61 1.59c.88 0 1.61-.72 1.61-1.6s-.73-1.6-1.62-1.6Zm-7.31.88a.749.749 0 1 1 0 1.5H3.76c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h6.3ZM6.1 3.98c1.71 0 3.11 1.39 3.11 3.09s-1.4 3.09-3.12 3.09-3.12-1.388-3.12-3.1c0-1.71 1.39-3.1 3.11-3.1Zm0 1.5c-.89 0-1.62.71-1.62 1.59s.72 1.59 1.61 1.59 1.61-.72 1.61-1.6c0-.89-.73-1.6-1.62-1.6Zm13.07.9a.749.749 0 1 1 0 1.5h-6.3c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="bg-[#1C1C1E] rounded-xl p-2">
        <div className="frameSection overflow-y-auto scrollbar-hide h-full max-h-[90vh] pb-2 pt-[0px]">
            <ExportPreviews boxes={boxesData} />
        </div>
      </div>

      {/* Export Settings Modal with the new switch-like components */}
      {isExportModalOpen && (
        <div ref={modalRef} className="absolute top-[60px] right-[8px] bg-[#2A2A2C] rounded-2xl px-3 py-3 w-[256px] max-w-[256px] max-w-full shadow-lg z-50">
          <h2 className="text-base font-bold mb-4">Export settings</h2>

          {/* Image Format */}
          <div className="mb-3">
            <h3 className="text-xs text-[#ffffff5c] font-semibold mb-2">IMAGE FORMAT</h3>
            <SwitchButtonGroup
              options={[
                { value: "PNG", label: "PNG" },
                { value: "JPEG", label: "JPEG" }
              ]}
              value={imageFormat}
              onChange={(format) => setImageFormat(format)}
            />
          </div>

          {/* Image Quality */}
          <div className="mb-3">
            <h3 className="text-xs text-[#ffffff5c] font-semibold mb-2">IMAGE QUALITY</h3>
            <SwitchButtonGroup
              options={[
                { value: "1x", label: "1x", subtext: "Standard" },
                { value: "2x", label: "2x", subtext: "High" },
                { value: "3x", label: "3x", subtext: "Extra" }
              ]}
              groupClassName="h-[74px]"
              value={imageQuality}
              onChange={(quality) => setImageQuality(quality)}
            />
          </div>

          {/* Output Resolution */}
          <div>
            <div className="bg-[#101012] p-2 rounded-xl">
              <span className="text-xs text-[#fff9] font-semibold mb-2">Output Resolution</span>
              <span className="ml-6 text-xs text-white">1920 x 1440</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}