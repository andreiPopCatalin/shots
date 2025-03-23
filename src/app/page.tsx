"use client"
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar/sidebar";
import ExportSidebar from "./components/exportSidebar/exportSidebar";
import SidebarCompany from "./components/sidebarCompany/sidebarCompany";
import { cn } from "@/utils/cn";

const sidebarItems = [
  { name: "Mockup",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-[-20px] w-5 h-5">
            <path fill="currentColor" d="M19.46 5C20.86 5 22 6.141 22 7.561v11.87c0 1.41-1.14 2.56-2.54 2.56h-3.38c-1.41 0-2.54-1.15-2.54-2.56V7.55c0-1.42 1.13-2.561 2.54-2.561h3.38ZM7.91 2c1.41 0 2.54 1.15 2.54 2.561v11.87c0 1.42-1.13 2.56-2.54 2.56H4.53c-1.4 0-2.54-1.14-2.54-2.56V4.55c0-1.411 1.14-2.561 2.54-2.561h3.38Z"></path>
          </svg>
  },
  { name: "Frame",
    active: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-[-20px] w-5 h-5"><path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"></path></svg>
   },
];



export default function Home() {
  const [active, setActive] = useState("Mockup");
  const [isCompanySidebarOpen, setIsCompanySidebarOpen] = useState(false);
  return (
    <div className={cn(" flex h-screen w-screen bg-black text-white transform transition-all duration-300 ease-in-out ", isCompanySidebarOpen ? "pl-[380px]" : "")}>
    <SidebarCompany isOpen={isCompanySidebarOpen} />
    <Sidebar items={sidebarItems} activeItem={active} onItemClick={setActive} onToggleCompanySidebar={() => setIsCompanySidebarOpen(!isCompanySidebarOpen)} />

    <main className="bg-[#0D0D0D] w-full h-screen">
    {/* Centered Buttons */}
    <div className="flex justify-center space-x-1 pt-3">
      {/* First Button with Tooltip */}
      <div className="relative group">
        <button className="px-1 py-1 text-white rounded-lg transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
            <path fill="currentColor" fillOpacity="0.85" d="M22 14.994c0-4.042-2.741-6.836-7.567-6.836H7.322l-3.28.148.19.487L6.846 6.56l3.058-2.984a.9.9 0 0 0 .254-.645c0-.551-.37-.931-.942-.931-.222 0-.497.116-.677.296L2.317 8.402A.96.96 0 0 0 2 9.111a.95.95 0 0 0 .317.698l6.222 6.106c.18.19.455.296.677.296.572 0 .942-.381.942-.931a.9.9 0 0 0-.254-.645l-3.058-2.974-2.614-2.244-.19.487 3.28.148h7.27c3.609 0 5.513 1.99 5.513 4.836 0 2.858-1.904 4.974-5.513 4.974h-2.434c-.582 0-.963.423-.963.942s.381.942.963.942h2.445c4.73 0 7.397-2.699 7.397-6.752"></path>
          </svg>
        </button>
        {/* Tooltip */}
        <div className="absolute max-w-[110px] w-[110px] top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-[#2C2C2E] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Undo <span className="p-1 after:content-[''] after:absolute after:inset-[-1px] after:bg-[#ffffff5c] after:rounded-[5px] after:translate-y-[1px] after:z-[-1] inline-block font-semibold text-[10px] leading-[10px] text-black bg-[hsla(0,0%,100%,0.7)] rounded-[4px] w-[18px] aspect-square grid place-items-center relative" >⌘</span><span className="after:content-[''] after:absolute after:inset-[-1px] after:bg-[#ffffff5c] after:rounded-[5px] after:translate-y-[1px] after:z-[-1] inline-block font-semibold text-[11px] leading-[11px] text-black bg-[hsla(0,0%,100%,0.7)] rounded-[4px] w-[18px] aspect-square grid place-items-center relative ml-2 p-1">Z</span>
        </div>
      </div>

      {/* Second Button */}
      <div className="relative group">
        <button className="px-2 py-1 text-white rounded-lg transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
            <path fill="currentColor" fillOpacity="0.85" d="M2 14.994c0-4.042 2.74-6.836 7.566-6.836h7.111l3.28.148-.19.487-2.614-2.233-3.058-2.984a.9.9 0 0 1-.254-.645c0-.551.37-.931.942-.931.222 0 .497.116.677.296l6.222 6.106a.96.96 0 0 1 .318.709.95.95 0 0 1-.318.698l-6.222 6.106a1 1 0 0 1-.677.296c-.572 0-.942-.381-.942-.931 0-.275.095-.476.254-.645l3.058-2.974 2.614-2.244.19.487-3.28.148h-7.27c-3.609 0-5.513 1.99-5.513 4.836 0 2.858 1.904 4.974 5.513 4.974h2.434c.582 0 .963.423.963.942s-.381.942-.963.942H9.396C4.666 21.746 2 19.047 2 14.994"></path>
          </svg>
        </button>
        <div className="absolute max-w-[130px] w-[130px]  top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-[#2C2C2E] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Redo <span className="p-1 after:content-[''] after:absolute after:inset-[-1px] after:bg-[#ffffff5c] after:rounded-[5px] after:translate-y-[1px] after:z-[-1] inline-block font-semibold text-[10px] leading-[10px] text-black bg-[hsla(0,0%,100%,0.7)] rounded-[4px] w-[18px] aspect-square grid place-items-center relative " >⇧</span> <span className="p-1 after:content-[''] after:absolute after:inset-[-1px] after:bg-[#ffffff5c] after:rounded-[5px] after:translate-y-[1px] after:z-[-1] inline-block font-semibold text-[10px] leading-[10px] text-black bg-[hsla(0,0%,100%,0.7)] rounded-[4px] w-[18px] aspect-square grid place-items-center relative" >⌘</span><span className="after:content-[''] after:absolute after:inset-[-1px] after:bg-[#ffffff5c] after:rounded-[5px] after:translate-y-[1px] after:z-[-1] inline-block font-semibold text-[11px] leading-[11px] text-black bg-[hsla(0,0%,100%,0.7)] rounded-[4px] w-[18px] aspect-square grid place-items-center relative ml-2 p-1">Z</span>
        </div>
      </div>

      {/* Third Button */}
      <div className="relative group">
        <button className="px-2 py-1 text-white rounded-lg transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.132 10.687q.499 0 .81-.322.322-.322.322-.81v-.737l-.218-3.259 2.421 2.543 2.992 3.021q.322.321.79.321.53 0 .862-.321.343-.322.343-.841 0-.239-.093-.446a1.2 1.2 0 0 0-.239-.384l-3.013-2.99-2.546-2.418 3.273.218h.8q.488 0 .81-.311a1.1 1.1 0 0 0 .322-.82q0-.488-.322-.81Q10.135 2 9.636 2H3.88q-.894 0-1.392.498-.489.488-.488 1.37v5.687q0 .478.322.81.321.322.81.322M14.363 22h5.756q.893 0 1.382-.499.498-.488.499-1.38v-5.677a1.08 1.08 0 0 0-.333-.81 1.1 1.1 0 0 0-.81-.322q-.479 0-.8.322a1.1 1.1 0 0 0-.322.81v.737l.218 3.259-2.431-2.554-2.982-3.009a1.07 1.07 0 0 0-.8-.322q-.52 0-.863.322-.342.321-.342.84 0 .239.083.457.093.207.27.374l2.992 2.989 2.566 2.418-3.283-.218h-.8q-.488 0-.821.322a1.1 1.1 0 0 0-.322.809q0 .488.322.81.333.322.821.322"></path>
          </svg>
        </button>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-[#2C2C2E] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Preview
        </div>
      </div>
    </div>

  {/* Main Content */}
  <div className="flex-1 w-full max-h-[90vh] mt-12 h-auto flex items-center justify-center">
    <div style={{background: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%); opacity: 1;"}}
     className="border w-[980px] h-[735px] border-zinc-700 w-2/3 h-2/3 flex items-center rounded-3xl justify-center">
      <div
     className="border w-[735] h-[551] bg-[#101012] border-[#101012] w-2/3 h-2/3 flex items-center rounded-3xl justify-center">
      <p className="text-gray-500">{active} Content</p>
    </div>
    </div>
  </div>
</main>
    <ExportSidebar/>
  </div>
  );
}
