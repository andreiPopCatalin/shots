import React from "react";

const MagicBackgroundsPanel = () => {
  return (
    <div className="rounded-xl">
      <div className="flex justify-between items-start gap-4 relative z-[1] p-2">
        <div className="flex flex-col  w-3/5">
          <h6 className="text-white text-sm font-semibold flex items-center mb-2">
            Magic
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 ml-1">
              <defs>
                <mask id="magic_svg__a">
                  <path fill="#FFF" d="M0 0h16v16H0Z" />
                </mask>
              </defs>
              <g mask="url(#magic_svg__a)">
                <path fill="#F94A73" d="m11.66 8.02 4.33-1.45-4.34-1.45-1.23-5.13-1.23 5.12-4.34 1.44 4.33 1.44 1.22 5.12 1.22-5.13Z" />
                <path fill="#FB7A53" d="m4.66 8.1-.74 3.07-2.6.86 2.6.86.73 3.07.73-3.08 2.6-.87-2.61-.87-.74-3.08Z" />
                <path fill="#C893E1" d="M2.88.43 2.24 3.1l-2.26.75 2.25.75.63 2.67.63-2.68 2.25-.76-2.26-.76L2.84.39Z" />
              </g>
            </svg>
          </h6>
          <span className="text-gray-400 text-xs">Generate backgrounds from your images</span>
        </div>
        
        <div className="previewsSection flex flex-col gap-2 p-2">
          <img src="/images/previews/magic-preview2.jpg" alt="preview" className="w-16 designonepreview h-auto rounded-lg shadow-md transition-all duration-300 ease-in-out" />
          <img src="/images/previews/magic-preview1.jpg" alt="preview" className="z-[1] w-16 designtwopreview h-auto rounded-lg shadow-md transition-all duration-300 ease-in-out -mt-4" />
        </div>
      </div>
      <div className="visual z-[0]"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default MagicBackgroundsPanel;