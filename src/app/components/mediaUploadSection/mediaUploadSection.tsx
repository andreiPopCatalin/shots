import React, { useRef, useState } from "react";

const MediaUploadSection = () => {
      const fileInputRef = useRef<HTMLInputElement | null>(null);
      const handleClickUpload = () => {
        fileInputRef.current?.click();
      };
    return(<>
            <h6 className="text-[#ffffff5c] text-xs font-semibold mb-2">MEDIA</h6>
            <div
                className="rounded-lg p-2 w-full flex flex-col items-center justify-center cursor-pointer bg-[#0D0D0E]"
                onClick={handleClickUpload}
            >
                
                <div className="bg-[#2E2E30] py-6 px-8 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11.664a.96.96 0 0 0 .949.949h5.765v5.765c0 .504.434.95.95.95.515 0 .937-.446.937-.95v-5.765h5.777a.96.96 0 0 0 .938-.949.96.96 0 0 0-.938-.95h-5.777V4.949c0-.504-.422-.949-.937-.949a.97.97 0 0 0-.95.949v5.765H4.949a.96.96 0 0 0-.949.95"></path></svg>
                </div>
          </div>
          <input type="file" ref={fileInputRef} accept="image/*" className="hidden" />
          </>);
};  

export default MediaUploadSection;