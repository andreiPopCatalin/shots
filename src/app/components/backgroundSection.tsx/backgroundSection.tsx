import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { cn } from "@/utils/cn";

const BackgroundSection = () => {
  const [active, setActive] = useState("transparent");
  const [color, setColor] = useState("#ffffff");
  const [showPicker, setShowPicker] = useState(false);
  const [showImageUpload, setshowImageUpload] = useState(false);
  const [showUnsplash, setShowUnsplash] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const pickerRef = useRef(null);
  const imageUploadRef = useRef(null);
  const unsplashRef = useRef(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const icons = {
    transparent: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <rect width="24" height="24" fill="url(#transparent_svg__a)" fillOpacity="0.4" rx="6"></rect>
        <rect width="23" height="23" x="0.5" y="0.5" stroke="#fff" strokeOpacity="0.16" rx="5.5"></rect>
        <defs>
          <pattern id="transparent_svg__a" width="1" height="1" patternContentUnits="objectBoundingBox">
            <use xlinkHref="#transparent_svg__b" transform="scale(.01563)"></use>
          </pattern>
          <image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA40lEQVR4Xu3bQQ6EQAhEUbj/oXsO8Sdh4XOvJAi/qkF3Zt6E6710++xuiD6T40uACtACqYlzD2IACFKBkoHcgmSQDJJBMngKIT6ADygF6DSYfcCLTzg/z0eGrASogDbT0gKxB2MB5pkiBoBgrEEMwIBjLx9fAAiCIAhygmkkRgYjhWMHditsL2AvYC+QIHjdwzk+BmAABmBAWc1kCF0bKRAEQRAEQRAMGaACbaCUz/P5BRiKxhQaiV07uRjfYgQDMKDpGAhGCMUCzD4CBEEw1iAGYIBPZMJh+g8/P8cKpAJfV4EfMee/sLtaEFIAAAAASUVORK5CYII=" id="transparent_svg__b" width="64" height="64"></image>
        </defs>
      </svg>
    ),
    color: <span className="w-[24px] h-[24px] rounded-full bg-[#] block" style={{ backgroundColor: color }}></span>,
    image: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z"></path></svg>),
    unsplash: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M15.7 10.845H22V22H2V10.845h6.299v5.576H15.7zM15.7 2H8.299v5.576H15.7z"></path></svg>),
  };

  // Handle clicks outside the modals
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (pickerRef.current && !pickerRef.current.contains(event.target)) &&
        (imageUploadRef.current && !imageUploadRef.current.contains(event.target)) &&
        (unsplashRef.current && !unsplashRef.current.contains(event.target))
      ) {
        setShowPicker(false);
        setshowImageUpload(false);
        setShowUnsplash(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker, showImageUpload, showUnsplash]); // Reattach listener when modal states change

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-1 bg-[#1C1C1E] rounded-xl relative">
      <h6 className="text-[#ffffff5c] text-xs font-semibold mb-2">BACKGROUND</h6>
      <div className="flex space-x-2">
        {[
          { label: "Transpar", key: "transparent" },
          { label: "Color", key: "color" },
          { label: "Image", key: "image" },
          { label: "Unsplash", key: "unsplash" },
        ].map((bg) => (
          <button
            key={bg.key}
            onClick={() => {
              setActive(bg.key);
              if (bg.key === "color") {
                setShowPicker(!showPicker);
                setshowImageUpload(false);
                setShowUnsplash(false);
              } else if (bg.key === "image") {
                setshowImageUpload(!showImageUpload);
                setShowPicker(false);
                setShowUnsplash(false);
              } else if (bg.key === "unsplash") {
                setShowUnsplash(!showUnsplash);
                setshowImageUpload(false);
                setShowPicker(false);
              } else {
                setShowUnsplash(false);
                setShowPicker(false);
                setshowImageUpload(false);
              }
            }}
            className={cn(
              "p-3 w-1/4 bg-[#101012] rounded-lg mb-2 text-xs font-medium transition flex items-center space-x-2",
              active === bg.key ? "outline outline-[1.5px] outline-white outline-offset-[3px]" : ""
            )}
          >
            {icons[bg.key]}
          </button>
        ))}
      </div>

      {/* Color Picker Modal */}
      {showPicker && (
        <motion.div
          ref={pickerRef}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed left-[242px] top-[300px] p-3 z-[9999]  bg-[#1C1C1E] border border-[#ffffff0f] rounded-xl shadow-lg flex flex-col items-center"
        >
          <HexColorPicker color={color} onChange={setColor} />
          <HexColorInput
            color={color}
            onChange={setColor}
            prefixed={true}
            className="mt-2 font-inter bg-[#29292B] text-center text-base leading-5 tracking-[-0.4px] px-3 py-2 rounded-xl text-[#6A6A6B] border border-transparent transition-all duration-200 ease-in-out"
          />
        </motion.div>
      )}

      {/* Image Upload Modal */}
      {showImageUpload && (
        <motion.div
          ref={imageUploadRef}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed left-[242px] top-[380px] w-[228px] shadow-md z-[9999] bg-[#1C1C1E] p-3 rounded-xl shadow-lg flex flex-col items-center"
        >
          <div
            className="border-2 border-dotted border-[#ffffff5c] rounded-lg p-8 w-full flex flex-col items-center justify-center cursor-pointer bg-[#0D0D0E]"
            onClick={handleClickUpload}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isHovering ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M12.97 11.16h3.88c.46 0 .83.37.83.83s-.38.83-.84.83h-3.89v3.88c0 .46-.38.83-.84.83-.47 0-.84-.38-.84-.84V12.8H7.38c-.47 0-.84-.38-.84-.84 0-.47.37-.84.83-.84h3.88V7.23a.83.83 0 1 1 1.66-.01v3.88ZM5.06 4.92c-3.91 3.9-3.91 10.23 0 14.14 3.9 3.9 10.23 3.9 14.14 0 3.9-3.91 3.9-10.24 0-14.15a10 10 0 0 0-14.15 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.33 2c3.38 0 5.66 2.37 5.66 5.91v8.16c0 3.53-2.28 5.91-5.67 5.91H7.65c-3.39 0-5.67-2.38-5.67-5.92V7.89c0-3.54 2.27-5.92 5.66-5.92h8.66Zm1.1 10.55c-1.08-.67-1.9.27-2.13.57-.22.29-.41.6-.6.92-.48.78-1.03 1.69-1.97 2.22-1.38.76-2.42.05-3.17-.45-.29-.19-.56-.37-.83-.49-.68-.29-1.28.04-2.18 1.17-.48.59-.94 1.18-1.41 1.77-.29.35-.22.89.16 1.13.6.37 1.35.57 2.18.57h8.42c.47 0 .95-.07 1.4-.22 1.02-.34 1.83-1.11 2.26-2.12.35-.86.532-1.89.19-2.75-.12-.29-.28-.55-.52-.79-.62-.61-1.19-1.18-1.88-1.61ZM8.49 6c-1.38 0-2.5 1.12-2.5 2.49s1.12 2.5 2.49 2.5 2.49-1.13 2.49-2.51-1.13-2.5-2.5-2.5Z" />
              </svg>
            )}
            <div className="text-white font-medium text-sm text-center mt-2">Choose image</div>
            <div className="text-gray-400 text-xs mt-1">Or drop it here</div>
          </div>
          <input type="file" ref={fileInputRef} accept="image/*" className="hidden" />
        </motion.div>
      )}

      {/* Unsplash Modal */}
      {showUnsplash && (
        <motion.div
          ref={unsplashRef}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="fixed left-[248px] top-[260px] w-[280px] h-[446px] shadow-md z-[9999] bg-[#1C1C1E] border border-[#ffffff0f] p-3 rounded-xl shadow-lg flex flex-col items-center"
        >
          <div className="relative w-full mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search Unsplash"
              className="w-full bg-[#28282A] py-1 px-2 rounded-md pl-8"
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="mt-8 mb-8 w-2/4" viewBox="0 0 458 105"><defs><clipPath id="unsplash-logo_svg__a"><path d="M0 0h457.19v104.19H0Z"></path></clipPath></defs><path fill="#383839" d="M59.88 38.66h27.53v48.75H0V38.66h27.53v24.37h32.35zm93 25c0 8.25-5.45 13.13-12.9 13.13-7.28 0-12.81-4.88-12.81-13.13V24.41h-12.22v39.13c0 15.45 11 25.21 25.06 25.21s25.15-9.76 25.15-25.21V24.41h-12.25zm43.7-21.13c-4.7 0-9.94 2-12.6 6.57v-5.41h-11.45v43.64h11.81v-25.1c0-5 3-9 8.16-9 5.68 0 8.08 3.82 8.08 8.7v25.4h11.8V59.82c.03-9.59-4.94-17.31-15.77-17.31zm43.31 18.37-6.48-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.23-4.35 5.33-4.35 4.36 0 6.09 2.25 6.51 4.88h10.18c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.81 11.19 12.24 13l6.05 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.5c.59 6.53 5.32 14.84 18.46 14.84 11.45 0 17.22-7.28 17.22-14.38-.01-6.36-4.36-11.59-12.97-13.37zm63.19 4.53c0 13.22-8.26 23-20.59 23-6 0-10.48-2.4-12.61-5.33v21.13h-11.8V43.67h11.45v5.41c2-3.37 6.83-6.39 13.4-6.39 12.81 0 20.18 9.76 20.18 22.72zm-11.63.09c0-7.72-4.79-12.25-10.83-12.25s-10.91 4.53-10.91 12.25 4.88 12.33 10.91 12.33 10.91-4.54 10.91-12.35zm68-21.83h11.45v43.64h-11.8v-5.31c-2 3.5-6.57 6.38-12.61 6.38-12.33 0-20.59-9.77-20.59-23 0-13 7.37-22.72 20.15-22.72 6.57 0 11.32 3.05 13.4 6.39zm-.18 21.83c0-7.72-4.88-12.25-10.91-12.25s-10.83 4.51-10.83 12.23 4.79 12.33 10.83 12.33 10.92-4.6 10.92-12.33zm-50.66 21.81h11.8V24.41h-11.8zm132.35-44.81c-4.17 0-9 1.41-11.81 4.78V24.41h-11.8v62.91h11.8V61.68c.27-4.8 3.2-8.52 8.17-8.52 5.68 0 8.08 3.83 8.07 8.71v25.47h11.81V59.82c-.01-9.59-5.15-17.3-16.24-17.3m-42 18.36-6.43-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.22-4.35 5.33-4.35 4.35 0 6.08 2.25 6.5 4.88h10.17c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.82 11.19 12.25 13l6 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.49c.58 6.53 5.31 14.84 18.45 14.84 11.45 0 17.22-7.28 17.22-14.38 0-6.34-4.35-11.57-12.95-13.35zM59.88 0H27.53v24.37h32.35z" clipPath="url(#unsplash-logo_svg__a)"></path></svg>
          <div className="suggest-buttons w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                type="button"
                className="flex-1 button default-button rounded-full px-4 py-2 bg-[#29292B] text-xs text-white transition-colors cursor-pointer"
              >
                <span>Abstract</span>
              </button>
              <button
                type="button"
                className="flex-1 button default-button rounded-full px-4 py-2 bg-[#29292B] text-xs text-white transition-colors cursor-pointer"
              >
                <span>Geometric</span>
              </button>
              <button
                type="button"
                className="flex-1 button default-button rounded-full px-4 py-2 bg-[#29292B] text-xs text-white transition-colors cursor-pointer"
              >
                <span>Gradient</span>
              </button>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex-1 button default-button rounded-full px-4 py-2 bg-[#29292B] text-xs text-white transition-colors cursor-pointer"
              >
                <span>Sand dune</span>
              </button>
              <button
                type="button"
                className="flex-1 button default-button rounded-full px-4 py-2 bg-[#29292B] text-xs text-white transition-colors cursor-pointer"
              >
                <span>Dark matte</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BackgroundSection;