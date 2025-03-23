import React, { useState } from "react";

const MockupVisibilitySection = () => {

    const [showMockup, setShowMockup] = useState(false);
  return (
      <div className="flex justify-between items-start gap-4 relative z-[1] mt-6">
        <div className="flex flex-col w-full">
          <span className="text-[#626264] font-bold text-sm mb-2">Visibility</span>
          <button onClick={ () => setShowMockup(!showMockup) } className="text-[#FF4444] w-full bg-[#332022] p-2 rounded-xl font-bold text-sm" >
          <span><svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2" height=" 24px" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M1.707 1.707a1 1 0 0 0 0 1.414l18.951 18.951a.999.999 0 1 0 1.414-1.414L3.121 1.707a1 1 0 0 0-1.414 0m.292 14.733V6.322l8.46 8.46v1.658c0 1.42-1.13 2.56-2.54 2.56h-3.38c-1.4 0-2.54-1.14-2.54-2.56m11.54 2.999v-1.577l4.138 4.137h-1.598c-1.41 0-2.54-1.15-2.54-2.56m0-10.214 8.46 8.46V7.561c0-1.42-1.14-2.561-2.54-2.561h-3.38a2.54 2.54 0 0 0-2.54 2.561zM6.314 2l4.145 4.145V4.561A2.55 2.55 0 0 0 7.919 2z"></path></svg>
          {showMockup ? "Show mockup" : "Hide mockup"}</span>
            </button>
        </div>
      </div>
  );
};

export default MockupVisibilitySection;