import React, { useState } from "react";

type AspectRatio = {
  key: number;
  label: string;
  value: string;
  title: string;
  category: string;
};

const LayoutScreenSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState("4:3");
  const [selectedCategory, setSelectedCategory] = useState("Default");
  const [selectedValue, setSelectedValue] = useState("1920x1440");

  // Define aspect ratios grouped by category
  const menu = [
    { name: "All", icon: "" }, // Example SVG path for a hamburger menu
    { name: "Phone", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }, // Example SVG path for a phone
    { name: "Tablet", icon: "M9.646 19.636h4.788c.21 0 .368-.15.368-.368a.355.355 0 0 0-.368-.365H9.646a.35.35 0 0 0-.368.365c0 .218.151.368.368.368M5 19.255c0 1.362.919 2.245 2.334 2.245h9.4c1.422 0 2.331-.883 2.331-2.245V4.748c0-1.369-.909-2.248-2.331-2.248h-9.4C5.919 2.5 5 3.379 5 4.748zm1.21-.195V4.935c0-.781.459-1.229 1.27-1.229h9.104c.811 0 1.274.448 1.274 1.229V19.06c0 .782-.463 1.229-1.274 1.229H7.48c-.811 0-1.27-.447-1.27-1.229" }, // Example SVG path for a tablet
    { name: "Laptop", icon: "M9.745 7.095h.197c.113 0 .176.056.176.179v.09c0 .302.193.514.508.514h2.766c.3 0 .496-.212.496-.514v-.09c0-.123.063-.179.179-.179h.197v-.56H9.745zM1 17.577c0 .45.358.812.801.812h20.397a.803.803 0 0 0 .802-.812.804.804 0 0 0-.802-.815h-1.696V7.609c0-1.064-.563-1.609-1.623-1.609H5.121c-1.013 0-1.623.545-1.623 1.609v9.153H1.801a.805.805 0 0 0-.801.815m3.603-.815V7.905c0-.54.263-.81.806-.81H18.59q.814 0 .813.81v8.857z" }, // Example SVG path for a laptop
    { name: "Desktop", icon: "M3.782 17.91h16.435c1.108 0 1.783-.675 1.783-1.783V5.782C22 4.677 21.325 4 20.217 4H3.782C2.674 4 2 4.677 2 5.782v10.345c0 1.108.674 1.783 1.782 1.783m-.192-3.637c-.262 0-.387-.107-.387-.38V5.804c0-.37.231-.601.604-.601h16.385c.373 0 .604.231.604.601v8.089c0 .273-.117.38-.387.38zm5.773 5.717h5.28v-2.188h-5.28zm-.074.868h5.429a.6.6 0 0 0 .605-.602.606.606 0 0 0-.605-.606H9.289c-.34 0-.613.27-.613.606 0 .339.273.602.613.602" }, // Example SVG path for a desktop
    { name: "Wearable", icon: "M5.5 15.533c0 1.406.529 2.412 1.556 2.978.486.26.749.561.936 1.141l.305 1.042c.165.544.547.806 1.119.806h4.116c.592 0 .95-.254 1.119-.806l.317-1.042c.175-.58.446-.881.925-1.141 1.027-.566 1.556-1.572 1.556-2.978V8.466c0-1.406-.529-2.412-1.556-2.978-.479-.26-.75-.561-.925-1.141l-.317-1.042c-.153-.536-.535-.805-1.119-.805H9.416c-.572 0-.954.261-1.119.805l-.305 1.042c-.179.572-.442.889-.936 1.141C6.037 6.03 5.5 7.044 5.5 8.466zm1.178-.164V8.633c0-1.428.836-2.284 2.232-2.284h5.132c1.404 0 2.229.856 2.229 2.284v6.736c0 1.425-.825 2.281-2.229 2.281H8.91c-1.396 0-2.232-.856-2.232-2.281m10.557-3.988h.342c.448 0 .748-.315.748-.803V9.331c0-.496-.3-.811-.748-.811h-.342zM5.5 15.533c0 1.406.529 2.412 1.556 2.978.486.26.749.561.936 1.141l.305 1.042c.165.544.547.806 1.119.806h4.116c.592 0 .95-.254 1.119-.806l.317-1.042c.175-.58.446-.881.925-1.141 1.027-.566 1.556-1.572 1.556-2.978V8.466c0-1.406-.529-2.412-1.556-2.978-.479-.26-.75-.561-.925-1.141l-.317-1.042c-.153-.536-.535-.805-1.119-.805H9.416c-.572 0-.954.261-1.119.805l-.305 1.042c-.179.572-.442.889-.936 1.141C6.037 6.03 5.5 7.044 5.5 8.466zm1.178-.164V8.633c0-1.428.836-2.284 2.232-2.284h5.132c1.404 0 2.229.856 2.229 2.284v6.736c0 1.425-.825 2.281-2.229 2.281H8.91c-1.396 0-2.232-.856-2.232-2.281m10.557-3.988h.342c.448 0 .748-.315.748-.803V9.331c0-.496-.3-.811-.748-.811h-.342z" }, // Example SVG path for a wearable
  ];
  const ratios: AspectRatio[] = [
    // Global Ratios
    { key: 1, label: "16:9", value: "12 Layouts", title: "ScreenShot", category: "All" },
    { key: 2, label: "3:2", value: "9 Layouts", title: "Browser", category: "All" },
    { key: 3, label: "4:3", value: "7 Layouts", title: "Minimal Desktop", category: "All" },
    { key: 4, label: "5:4", value: "13 Layouts", title: "iPhone 16", category: "iPhone 16 Lineup" },
    { key: 5, label: "1:1", value: "13 Layouts", title: "iPhone 16 Plus", category: "iPhone 16 Lineup" },
    { key: 6, label: "4:5", value: "13 Layouts", title: "Iphone 16 Pro", category: "iPhone 16 Lineup" },
    { key: 7, label: "3:4", value: "13 Layouts", title: "Iphone 16 Pro Max", category: "iPhone 16 Lineup" },
    { key: 8, label: "2:3", value: "13 Layouts", title: "", category: "iPhone 15 & earlier" },
    { key: 9, label: "9:16", value: "13 Layouts", title: "", category: "" },

    // Instagram Ratios
    { key: 10, label: "1:1", value: "1080 x 1080", title: "Post", category: "Instagram" },
    { key: 11, label: "4:5", value: "1080 x 1350", title: "Portrait", category: "Instagram" },
    { key: 12, label: "9:16", value: "1080 x 1920", title: "Story", category: "Instagram" },

    // Twitter Ratios
    { key: 13, label: "16:9", value: "1200 x 675", title: "Tweet", category: "Twitter" },
    { key: 14, label: "3:1", value: "1500 x 500", title: "Cover", category: "Twitter" },

    // Dribbble Ratios
    { key: 15, label: "4:3", value: "2800 x 2100", title: "Shot", category: "Dribbble" },

    // YouTube Ratios
    { key: 16, label: "16:9", value: "2560 x 1440", title: "Banner", category: "YouTube" },
    { key: 17, label: "16:9", value: "1280 x 720", title: "Thumbnail", category: "YouTube" },
    { key: 18, label: "16:9", value: "1920 x 1080", title: "Video", category: "YouTube" },

    // Pinterest Ratios
    { key: 19, label: "10:21", value: "1000 x 2000", title: "Long", category: "Pinterest" },
    { key: 20, label: "2:3", value: "1000 x 1500", title: "Optimal", category: "Pinterest" },
    { key: 21, label: "1:1", value: "1000 x 1000", title: "Square", category: "Pinterest" },

    // App Store Ratios
    { key: 22, label: "1284 : 2778", value: "1284 x 2778", title: "iPhone 6.5",category: "App Store" },
    { key: 23, label: "1242 : 2208", value: "1242 x 2208", title: "iPhone 5.5", category: "App Store" },
    { key: 24, label: "2048 : 2732", value: "2048 x 2732", title: "iPad Pro 12.9", category: "App Store" },
    { key: 25, label: "2778 : 1284", value: "2778 x 1284", title: "iPhone 6.5", category: "App Store" },
    { key: 26, label: "2208 : 1242", value: "2208 x 1242", title: "iPhone 5.5", category: "App Store" },
    { key: 27, label: "2732 : 2048", value: "2732 x 2048", title: "iPad Pro 12.9", category: "App Store" },
    { key: 28, label: "16:10", value: "576 x 1024", title: "Mac", category: "App Store" },
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
            className="px-4 max-h-[48px] h-[48px] w-full py-2 bg-[#2E2E30] text-white rounded-xl hover:bg-[#2C2C2E] transition-colors flex items-center justify-between"
            >
            {/* Left: Square */}
            <div
                className="current-frame-icon max-h-[50px] w-[30px] border border-[#FFF] rounded bg-[#79797B]"
                style={{
                aspectRatio: `${width} / ${height}`,
                }}
            ></div>

            {/* Middle: Category and Selected Ratio */}
            <div className="flex-1 mx-4 text-left">
                <span className="text-base mr-2">{selectedCategory}</span>
                <span className="text-base ">{selectedRatio}</span>
            </div>

            {/* Right: Arrow Icon */}
            <div className={`transform transition-transform ${isModalOpen ? "rotate-180" : "rotate-0"}`}>
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
        <div className="absolute max-h-[70vh] h-[70vh] w-[488] top-14 left-0 bg-[#2A2A2C]  border border-[#ffffff0f] rounded-xl shadow-lg z-50">
         
         <div className="flex gap-0">
            {menu.map((item) => (
                <button
                key={item.name}
                className="px-2 text-center py-2 text-white rounded-lg hover:bg-[#3C3C3E] transition-colors flex items-center gap-4"
                >
                    {item.icon !== "" && (
 <svg
 xmlns="http://www.w3.org/2000/svg"
 className="h-5 w-5"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
>
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d={item.icon}
 />
</svg>
                    )}
                <span className="text-xs">{item.name}</span>
                </button>
            ))}
            </div>
          {/* Categories and Ratios */}
          <div className="overflow-y-auto max-h-[62vh] h-full scrollbar-hide">
            {Object.entries(groupedRatios).map(([category, ratios]) => (
              <div key={category} className="mb-4 p-2">
                <div className="text-base font-medium text-white mb-2">{category}</div>
                <div className="grid grid-cols-2 gap-2">
                  {ratios.map((ratio) => (
                    <button
                      key={ratio.key}
                      onClick={() => handleRatioSelect(ratio)}
                      className="px-4 py-2 w-full mx-auto text-white rounded-lg bg-[#373738] hover:bg-[#3C3C3E] transition-colors"
                    >
                        <p className="text-sm text-white text-left">{ratio.title === "" ? "" : ratio.title}</p>
                        <p className="text-xs text-gray-400 text-left">{ratio.value}</p>
                      <div
                        className="aspect-square flex items-center justify-center bg-[#29292B] m-2 max-h-[100px] border border-[#ffffff5c] p-2 rounded-lg mb-1"
                        style={{ aspectRatio: ratio.label.replace(":", "/") }}
                      ><span className="text-xs px-2 py-1">{ratio.label}</span></div>
                      
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

export default LayoutScreenSection;