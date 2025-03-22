import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';


const ScenesSection = () => {
  const modalRef = useRef(null);
  const buttonsRef = useRef(null);
  const [activeScene, setActiveScene] = useState(null);
  const [showPortraitModal, setShowPortraitModal] = useState(false);
  const [selectedPortraitOption, setSelectedOption] = useState('None');
  
  // Adjust values
  const [distance, setDistance] = useState(5.0);
  const [position, setPosition] = useState(50);

  const handleSceneClick = (scene) => {
    setActiveScene(scene);
    if (scene === 'Portrait') {
      setShowPortraitModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowPortraitModal(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target) &&
        !buttonsRef.current.contains(event.target)
      ) {
        setShowPortraitModal(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white">
      {/* SCENES HEADER */}
      <div className="text-[#ffffff5c] text-xs font-semibold mb-2">SCENES</div>
      
      {/* SCENE BUTTONS */}
      <div className="flex gap-2 mb-4 p-1" ref={buttonsRef}>
        <div 
          className={`bg-[#101012] p-3 rounded-md cursor-pointer text-center w-28 ${activeScene === 'Portrait' ? 'ring-1 ring-white' : ''}`}
          onClick={() => handleSceneClick('Portrait')}
        >
          <div className="font-medium text-white mb-1">Portrait</div>
          <div className="text-xs text-gray-500">{selectedPortraitOption}</div>
        </div>
        
        <div 
          className={`bg-[#101012] p-3 rounded-md cursor-pointer text-center w-28 ${activeScene === 'Shadow' ? 'ring-1 ring-white' : ''}`}
          onClick={() => handleSceneClick('Shadow')}
        >
          <div className="font-medium text-white mb-1">Shadow</div>
          <div className="text-xs text-gray-500">None</div>
        </div>
      </div>
      
      {/* PORTRAIT MODAL */}
      {showPortraitModal && (
        <div
        ref={modalRef}
        className="absolute top-12 left-0 z-10 bg-[#1C1C1E] rounded-xl shadow-lg w-64 z-[99]"
        style={{ top: buttonsRef.current ? buttonsRef.current.offsetHeight + buttonsRef.current.offsetTop : 'auto' }}
      >
        <div className="relative">
          {/* Image with Gradient Overlay */}
          <div className="relative w-full h-[150px] mb-[-40px] rounded-xl overflow-hidden">
            <img
              src="/images/modals/portrait-scene-header.png"
              alt="Phone preview"
              className="w-full absolute h-auto left-0 top-0 rounded"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#1c1c1e_0%,transparent_100%)] pointer-events-none"></div>
          </div>
              {/* Modal Content */}
              <div className="text-lg  font-medium mb-[40px] mt-[-70px] px-4 z-[99] relative">Portrait Mode</div>
        </div>

          
          {/* OPTIONS */}
          <div className="flex gap-2 mb-1 p-4 mt-[-40px] z-[10] relative">
            <div className={`flex items-center  justify-center w-1/3 cursor-pointer`} onClick={() => handleOptionSelect('None')}>
              <div 
              className={`bg-zinc-900  aspect-[3/2] rounded-md p-2 items-center justify-center cursor-pointer ${selectedPortraitOption === 'None' ? 'ring-1 ring-white' : ''}`}
            >
              <div className="text-center">
                <div className="w-12  h-8 p-3 flex items-center justify-center mb-1 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.575 7.088A9.7 9.7 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 1.79 0 3.468-.483 4.911-1.326l-1.104-1.104A8.25 8.25 0 0 1 3.75 12a8.2 8.2 0 0 1 .929-3.808zm15.686 8.831A8.25 8.25 0 0 0 12 3.75a8.2 8.2 0 0 0-3.92.988L6.981 3.639A9.7 9.7 0 0 1 12 2.25c5.384 0 9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-1.39 5.018z"></path><rect width="1.89" height="26.833" x="1.788" y="3.211" fill="currentColor" rx="0.945" ry="0.945" transform="rotate(-45 1.789 3.211)"></rect></svg>
                </div>
              </div>
              </div>
            </div>
            
            
            <div 
              className={`bg-zinc-900 rounded-lg flex items-center justify-center w-1/3 cursor-pointer ${selectedPortraitOption === 'Default' ? 'ring-1 ring-white' : ''}`}
              onClick={() => handleOptionSelect('Default')}
            >
              <div className="text-center">
                <img 
                src="/images/modals/lens-scene-default.webp" 
                alt="Phone preview" 
                className="w-full h-full w-8 h-8 rounded-lg"
              />
                
              </div>
            </div>
            
            <div 
              className={`bg-zinc-900 aspect-[3/2] rounded-lg flex items-center justify-center w-1/3 cursor-pointer ${selectedPortraitOption === 'Stage' ? 'ring-1 ring-white' : ''}`}
              onClick={() => handleOptionSelect('Stage')}
            >
                            <div className="text-center">
                <img 
                src="/images/modals/lens-scene-stage.png" 
                alt="Phone preview" 
                className="w-full h-full w-8 h-8 rounded-lg"
              />
                
              </div>
            </div>
          </div>
          <div className="flex gap-2 mb-4">
          <div className={`flex items-center  justify-center w-1/3 cursor-pointer`} onClick={() => handleOptionSelect('None')}>
          <span className="text-xs">None</span>
          </div>
          <div className={`flex items-center  justify-center w-1/3 cursor-pointer`} onClick={() => handleOptionSelect('Default')}>
          <span className="text-xs">Default</span>
          </div>
          <div className={`flex items-center  justify-center w-1/3 cursor-pointer`} onClick={() => handleOptionSelect('Stage')}>
          <span className="text-xs">Stage</span>
          </div>
          </div>
          
          {/* ADJUSTMENTS */}
          <div className="text-[#ffffff5c] text-xs font-semibold mb-2 px-4">ADJUST</div>
          
          <div className="space-y-3 p-4">
            {[
              { label: "Distance", type: "normal", value: distance, setValue: setDistance },
              { label: "Position", type: "middle", value: position, setValue: setPosition }
            ].map((control) => (
              <div key={control.label} className={cn("relative h-8 flex items-center bg-[#101012] rounded-lg overflow-hidden",
                selectedPortraitOption === "None" ? "opacity-[0.5]" : "" )}>
                <span className="text-gray-300 text-xs font-medium pl-3 z-10">{control.label}</span>
                
                {/* Expanding Bar */}
                <motion.div
                  className={cn("absolute left-0 top-0 bottom-0 rounded-lg",
                              control.type === "middle" ? "" : "bg-zinc-700" )}
                  initial={{ width: "15%" }}
                  animate={{ width: `${control.type === 'middle' ? control.value  : control.value * 11.1}%`}}
                  transition={{ duration: 0.05 }}
                >
                  {/* Vertical Line on the Right Side of the Expanding Bar */}
                  <motion.div
                    className="absolute right-1 top-0 bottom-0 w-0.5 mr-0 mt-1 mb-1 bg-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                </motion.div>

                <input
                  type="range"
                  min={control.type === 'normal' ? "1.0" : "15" }
                  max={control.type === 'normal' ? "9" : "85" }
                  step={control.type === 'normal' ? "0.1" : "1" }
                  value={control.value}
                  onChange={(e) => control.setValue(Number(e.target.value))}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                  disabled={selectedPortraitOption === 'None'}
                />

                <span className="text-gray-300 text-xs font-medium pr-3 ml-auto z-10">{control.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenesSection;