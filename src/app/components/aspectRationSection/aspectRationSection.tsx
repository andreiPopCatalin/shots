import React, { useState } from "react";

type AspectRatio = {
  label: string;
  value: string;
  title: string;
  category: string;
};

const AspectRatioSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState("4:3");
  const [selectedCategory, setSelectedCategory] = useState("Default");
  const [selectedValue, setSelectedValue] = useState("1920x1440");

  // Define aspect ratios grouped by category
  const ratios: AspectRatio[] = [
    // Global Ratios
    { label: "16:9", value: "1920 x 1080", title: "", category: "" },
    { label: "3:2", value: "1920 x 1280", title: "", category: "" },
    { label: "4:3", value: "1920 x 1440", title: "", category: "" },
    { label: "5:4", value: "1920 x 1536", title: "", category: "" },
    { label: "1:1", value: "1920 x 1920", title: "", category: "" },
    { label: "4:5", value: "1080 x 1350", title: "", category: "" },
    { label: "3:4", value: "1080 x 1440", title: "", category: "" },
    { label: "2:3", value: "1080 x 1620", title: "", category: "" },
    { label: "9:16", value: "1080 x 1920", title: "", category: "" },

    // Instagram Ratios
    { label: "1:1", value: "1080 x 1080", title: "Post", category: "Instagram" },
    { label: "4:5", value: "1080 x 1350", title: "Portrait", category: "Instagram" },
    { label: "9:16", value: "1080 x 1920", title: "Story", category: "Instagram" },

    // Twitter Ratios
    { label: "16:9", value: "1200 x 675", title: "Tweet", category: "Twitter" },
    { label: "3:1", value: "1500 x 500", title: "Cover", category: "Twitter" },

    // Dribbble Ratios
    { label: "4:3", value: "2800 x 2100", title: "Shot", category: "Dribbble" },

    // YouTube Ratios
    { label: "16:9", value: "2560 x 1440", title: "Banner", category: "YouTube" },
    { label: "16:9", value: "1280 x 720", title: "Thumbnail", category: "YouTube" },
    { label: "16:9", value: "1920 x 1080", title: "Video", category: "YouTube" },

    // Pinterest Ratios
    { label: "10:21", value: "1000 x 2000", title: "Long", category: "Pinterest" },
    { label: "2:3", value: "1000 x 1500", title: "Optimal", category: "Pinterest" },
    { label: "1:1", value: "1000 x 1000", title: "Square", category: "Pinterest" },

    // App Store Ratios
    { label: "1284 : 2778", value: "1284 x 2778", title: "iPhone 6.5",category: "App Store" },
    { label: "1242 : 2208", value: "1242 x 2208", title: "iPhone 5.5", category: "App Store" },
    { label: "2048 : 2732", value: "2048 x 2732", title: "iPad Pro 12.9", category: "App Store" },
    { label: "2778 : 1284", value: "2778 x 1284", title: "iPhone 6.5", category: "App Store" },
    { label: "2208 : 1242", value: "2208 x 1242", title: "iPhone 5.5", category: "App Store" },
    { label: "2732 : 2048", value: "2732 x 2048", title: "iPad Pro 12.9", category: "App Store" },
    { label: "16:10", value: "576 x 1024", title: "Mac", category: "App Store" },
  ];

  // Group ratios by category
  const groupedRatios = ratios.reduce((acc, ratio) => {
    if (!acc[ratio.category]) {
      acc[ratio.category] = [];
    }
    acc[ratio.category].push(ratio);
    return acc;
  }, {} as Record<string, AspectRatio[]>);

  const handleRatioSelect = (ratio: AspectRatio) => {
    setSelectedRatio(ratio.label);
    setSelectedValue(ratio.value);
    setSelectedCategory(ratio.category === "" ? "Default" : ratio.category);
  };

  // Extract width and height from the selected value
  const [width, height] = selectedRatio.split(":").map(Number);

  return (
    <div className="relative">
      {/* Button */}
      <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="px-4 max-h-[48px] w-full py-2 bg-[#2E2E30] text-white rounded-lg hover:bg-[#2C2C2E] transition-colors flex items-center justify-between"
            >
            {/* Left: Square */}
            <div
                className="current-frame-icon max-h-[30px] w-[30px] border border-[#ffffff5c] rounded bg-[#79797B]"
                style={{
                aspectRatio: `${width} / ${height}`,
                background: "#ffffff0f",
                }}
            ></div>

            {/* Middle: Category and Selected Ratio */}
            <div className="flex-1 mx-4 text-left">
                <span className="text-sm mr-2">{selectedCategory}</span>
                <span className="text-sm ">{selectedRatio}</span>
            </div>

            {/* Right: Arrow Icon */}
            <div className={`transform transition-transform ${isModalOpen ? "rotate-0" : "rotate-180"}`}>
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
                >
                <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
            </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute max-h-[70vh] h-[70vh] w-[360px] top-10 left-0 bg-[#2A2A2C]  border border-[#ffffff0f] rounded-xl shadow-lg z-50">
          {/* Width and Height Inputs */}
          <div className="grid grid-cols-2 p-4 gap-2">
            <div>
              <span className="absolute left-6 top-8 transform -translate-y-1/2 text-gray-400 text-xs">W</span>
              <input
                name="width"
                type="number"
                className="bg-[#373738] p-1 rounded-lg pl-5 text-right"
                placeholder="2800"
                min="128"
                max="7680"
              />
            </div>
            <div>
              <span className="left-6 top-8 transform -translate-y-1/2 text-gray-400 text-xs">H</span>
              <input
                name="height"
                type="number"
                className="bg-[#373738] p-1 rounded-lg pl-5 text-right"
                placeholder="2100"
                min="128"
                max="7680"
              />
            </div>
          </div>

          {/* Categories and Ratios */}
          <div className="overflow-y-auto max-h-[62vh] h-full scrollbar-hide">
            {Object.entries(groupedRatios).map(([category, ratios]) => (
              <div key={category} className="mb-4 border-t p-2 border-[#ffffff14]">
                <div className="text-base font-medium text-white mb-2">{category}</div>
                <div className="grid grid-cols-3 gap-2">
                  {ratios.map((ratio) => (
                    <button
                      key={ratio.label}
                      onClick={() => handleRatioSelect(ratio)}
                      className="px-4 py-2 mx-auto text-white rounded-lg hover:bg-[#3C3C3E] transition-colors"
                    >
                      <div
                        className="aspect-square flex items-center justify-center bg-[#29292B] m-2 max-h-[100px] border border-[#ffffff5c] p-2 rounded-lg mb-1"
                        style={{ aspectRatio: ratio.label.replace(":", "/") }}
                      ><span className="text-xs px-2 py-1">{ratio.label}</span></div>
                      <p className="text-sm text-white">{ratio.title === "" ? "" : ratio.title}</p>
                      <span className="text-xs text-gray-400">{ratio.value}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AspectRatioSelector;