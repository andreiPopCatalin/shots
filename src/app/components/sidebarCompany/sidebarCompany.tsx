import React, { useState } from "react";

interface SidebarCompanyProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SidebarCompany({ isOpen, setIsOpen  }: SidebarCompanyProps) {
  const [activeTheme, setActiveTheme] = useState<string>("System");

  const themes = [
    { name: "System", image: "/images/company/dark.jpg" },
    { name: "Light", image: "/images/company/light.jpg" },
    { name: "Dark", image: "/images/company/dark.jpg" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-[370px] bg-black text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50 p-4`}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 p-2 z-[999] rounded-full bg-[#1F1F1F] cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.362 17.793c-.48.48-.49 1.332.01 1.831.51.5 1.361.49 1.832.02L12 13.846l5.788 5.788c.49.49 1.332.49 1.831-.01.5-.51.5-1.341.01-1.831l-5.788-5.788 5.788-5.798c.49-.49.5-1.332-.01-1.831-.499-.5-1.341-.5-1.83-.01L12 10.154 6.204 4.366c-.47-.48-1.332-.5-1.832.01-.5.5-.49 1.361-.01 1.831l5.788 5.798z"></path></svg>
      </button>
      <div className="overflow-y-auto scrollbar-hide h-full">

      {/* Theme Selector */}
      <div className="flex w-full gap-4 px-2 mt-14 mb-4">
      {themes.map((theme) => (
        <button key={theme.name} onClick={() => setActiveTheme(theme.name)} className="outline-none w-full">
          <div
            className={`bg-gray-900 w-full rounded-xl cursor-pointer transition-all duration-200 
            ${activeTheme === theme.name ? "outline outline-[1.5px] outline-white outline-offset-[3px]" : ""}`}
          >
            <img
              className="w-full h-auto max-h-[80px] rounded-xl"
              src={theme.image}
              alt={theme.name}
            />
          </div>
          <p className="text-center cursor-pointer mt-2">{theme.name}</p>
        </button>
      ))}
    </div>
      <hr className="mb-4 text-[#1C1C1E] "/>

      {/* Options */}
      <div className="space-y-5  ">
      <div className="flex items-center relative gap-2">
        <div className="bg-[#1C1C1E] w-full p-4 rounded-3xl  cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M16.93 3c1.34 0 2.63.53 3.58 1.48.95.94 1.48 2.22 1.48 3.569v7.9c0 2.79-2.27 5.05-5.061 5.05H7.04a5.05 5.05 0 0 1-5.06-5.05v-7.9c0-2.79 2.25-5.05 5.06-5.05h9.87Zm1.13 5.2a.76.76 0 0 0-.57.2L12.98 12c-.58.48-1.42.48-2 0l-4.5-3.6c-.32-.23-.75-.2-1 .07-.27.27-.3.7-.08 1l.13.13 4.54 3.55c.56.44 1.23.68 1.95.68.7 0 1.4-.24 1.95-.68l4.51-3.61.08-.08c.23-.29.23-.71-.02-1a.84.84 0 0 0-.53-.26Z"></path></svg>
            <p className="font-bold mt-12">Send feedback</p>
            <p className="text-gray-400 font-thin text-xs">Shape your experience</p>
        </div>
        <div className="bg-[#1C1C1E] w-full p-4 rounded-3xl  cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 17.5c.214 0 .527-.16.782-.32 4.603-2.882 7.551-6.26 7.551-9.677 0-2.954-2.1-5.003-4.726-5.003-1.639 0-2.866.88-3.607 2.193C9.275 3.38 8.04 2.5 6.402 2.5c-2.636 0-4.735 2.05-4.735 5.003 0 3.418 2.956 6.795 7.55 9.677.256.16.569.32.783.32"></path></svg>
            <p className="font-bold mt-12 ">What's new </p>
            <p className="text-gray-400 font-thin text-xs">Learn about updates</p>
        </div>
      </div>

        <div className="relative bg-[#1C1C1E] h-[160px] p-6 rounded-3xl  flex flex-col justify-between items-start gap-2 cursor-pointer overflow-hidden">
        {/* Background Image */}
          <img
            decoding="async"
            src="/images/company/mobile-card2.webp"
            className="absolute inset-0  w-full h-full object-cover z-[0]"
            alt="absolute cover image"
          />

          {/* Text Content */}
          <p className="font-bold relative z-10 mt-18">Get Shots Mobile</p>
          <p className="text-gray-400 font-thin text-sm relative z-10">
            Shape your experience
          </p>
        </div>

        <div className="relative bg-[#1C1C1E] h-[160px] p-6 rounded-3xl  flex flex-col justify-between items-start gap-2 cursor-pointer overflow-hidden">
          {/* Background Image */}
          <img
            decoding="async"
            src="/images/company/card.png"
            className="absolute inset-0 w-full h-full object-cover z-[0]"
            alt="absolute cover image"
          />

          {/* Text Content */}
          <p className="font-bold relative z-10 mt-18">Advertise on Shots</p>
          <p className="text-gray-400 font-thin z-10 text-xs">Get your brand seen by Foudners & Creators</p>
        </div>

        {/* Social Media */}
        <div className="bg-[#1C1C1E] p-6 rounded-3xl  flex items-center gap-2 cursor-pointer">
          <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 inline-block" viewBox="0 0 24 24"><path fill="currentColor" d="M22.36 6.37c-.77.34-1.6.57-2.46.67a4.3 4.3 0 0 0 1.88-2.37c-.83.49-1.75.84-2.72 1.03-.79-.84-1.9-1.36-3.13-1.36a4.27 4.27 0 0 0-4.28 4.27c0 .33.03.66.11.97C8.2 9.4 5.05 7.69 2.94 5.1c-.37.63-.58 1.36-.58 2.15 0 1.48.75 2.79 1.9 3.56-.71-.03-1.37-.22-1.94-.54-.01.01-.01.03-.01.05 0 2.07 1.47 3.8 3.43 4.19-.36.09-.74.14-1.13.14-.28 0-.55-.03-.81-.08a4.29 4.29 0 0 0 3.99 2.97 8.65 8.65 0 0 1-5.32 1.83c-.35 0-.69-.03-1.03-.07a12.1 12.1 0 0 0 6.55 1.92c7.87 0 12.17-6.52 12.17-12.18 0-.19-.01-.38-.02-.56.83-.61 1.56-1.36 2.13-2.22Z"></path></svg></span>
          <p className="font-bold">Twitter <span className="text-gray-400 font-thin text-sm w-full">@ShotsAppHQ</span></p>
          <span className="text-right w-full"><svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 float-right text-[#ffffff5c]" viewBox="0 0 24 24"><path fill="currentColor" d="m18.652 15.207-.012-9.141c0-.598-.387-1.02-1.019-1.02H8.48a.963.963 0 0 0-.984.961c0 .504.445.938.949.938h2.707l4.641-.164-1.77 1.511-8.731 8.754a.96.96 0 0 0-.292.657c0 .504.457.996.984.996.246 0 .48-.094.668-.281l8.742-8.754 1.535-1.77-.199 4.606v2.753c0 .493.445.961.961.961.504 0 .961-.433.961-1.007"></path></svg></span>
        </div>

        <div className="bg-[#1C1C1E] p-6 rounded-3xl flex items-center gap-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 inline-block" viewBox="0 0 24 24"><path fill="currentColor" d="M17.91 14.32c-.26.25-.38.61-.32.97l.88 4.92c.07.41-.11.83-.45 1.08-.35.25-.8.28-1.17.08l-4.43-2.31c-.16-.09-.33-.13-.5-.14h-.28q-.15.015-.27.09l-4.43 2.32c-.22.11-.47.14-.71.11-.6-.12-.99-.68-.89-1.28l.89-4.92a1.14 1.14 0 0 0-.32-.98l-3.611-3.5c-.31-.3-.41-.74-.27-1.13.13-.4.476-.69.88-.75l4.97-.73c.37-.04.71-.27.88-.61l2.18-4.49c.05-.1.11-.2.2-.27l.09-.07c.04-.06.1-.1.16-.13l.1-.04.17-.07h.42c.37.03.7.26.88.6l2.21 4.47c.16.32.47.55.83.6l4.97.72c.42.06.77.35.91.75.13.4.01.84-.29 1.12l-3.74 3.54Z"></path></svg>
          <p className="font-bold">Welcome Page <span className="block text-gray-400 font-thin text-sm">Learn about Shots features</span></p>
        </div>

        <div className="p-6 text-center gap-2">
          <img  className="w-[65px] mb-2 mx-auto  h-auto rounded-xl" src="/images/company/shots-logo.png"/>
          <h3 className="text-xl">Shots</h3>
          <p className="block text-xs text-[#ffffff5c] mb-3 mt-1">Create Amazing Mockups</p>
          <p className=" mx-auto w-[42px] text-xs font-bold rounded-xl text-center text-[#f44] border border-[#f443]">BETA</p>
        </div>
      </div>
      </div>
    </div>
  );
}
