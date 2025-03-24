import React, {  } from "react";

const DetailsSection = () => {
  return (
    <div className="rounded-xl">
      <div className="flex justify-between items-start gap-4 relative z-[1]">
        <div className="flex flex-col w-full">
          <span className="text-[#626264] font-bold text-sm mb-2">Details</span>
          <div className="bg-[#101012] p-3 rounded-xl">
            <span className="text-[#626264] text-xs text-left w-1/2 inline-block">Device</span><span className="text-xs text-right w-1/2 inline-block">ScreenShot</span>
            <span className="text-[#626264] text-xs text-left w-1/2 inline-block">Screen pixels</span><span className="text-xs text-right w-1/2 inline-block">Adapts to image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;