import React, { JSX, useState } from "react";

type AspectRatio = {
  key: number;
  label: string;
  value: string;
  title: string;
  image?: JSX.Element;
  category: string;
};

const LayoutScreenSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Screenshot");

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

    { key: 1, label: "ScreenShot", image: <img src="/images/mocks/0.png" className="w-[223px] h-[178px]" />, value: "12 Layouts", title: "ScreenShot", category: "All" },
    { key: 2, label: "Browser", image: <img src="/images/mocks/1.png" className="w-[223px] h-[178px]" />,value: "9 Layouts", title: "Browser", category: "All" },
    { key: 3, label: "Minimal Desktop", image: <img src="/images/mocks/2.png" className="w-[223px] h-[178px]" />,value: "7 Layouts", title: "Minimal Desktop", category: "All" },

    { key: 4, label: "iPhone 16", image: <img src="/images/mocks/i16_0.png" className="w-[223px] h-[178px]" />,value: "13 Layouts", title: "iPhone 16", category: "iPhone 16 Lineup" },
    { key: 5, label: "iPhone 16 Plus", image: <img src="/images/mocks/i16_1.png" className="w-[223px] h-[178px]" />,value: "13 Layouts", title: "iPhone 16 Plus", category: "iPhone 16 Lineup" },
    { key: 6, label: "Iphone 16 Pro", image: <img src="/images/mocks/i16_2.png" className="w-[223px] h-[178px]" />,value: "13 Layouts", title: "Iphone 16 Pro", category: "iPhone 16 Lineup" },
    { key: 7, label: "Iphone 16 Pro Max", image: <img src="/images/mocks/i16_3.png" className="w-[223px] h-[178px]" />,value: "13 Layouts", title: "Iphone 16 Pro Max", category: "iPhone 16 Lineup" },

    { key: 10, label: "iPhone 15", image: <img src="/images/mocks/i15_0.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "iPhone 15", category: "iPhone 15 & earlier" },
    { key: 11, label: "iPhone 15 Plus", image: <img src="/images/mocks/i15_1.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "iPhone 15 Plus", category: "iPhone 15 & earlier" },
    { key: 12, label: "iPhone 15 Pro", image: <img src="/images/mocks/i15_2.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "iPhone 15 Pro", category: "iPhone 15 & earlier" },
    { key: 13, label: "iPhone 15 Pro Max", image: <img src="/images/mocks/i15_3.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "iPhone 15 Pro Max", category: "iPhone 15 & earlier" },

    { key: 14, label: "Nothing Phone",  image: <img src="/images/mocks/andr_0.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "Nothing Phone", category: "Android Phones" },
    { key: 15, label: "Pixel 7 Pro", image: <img src="/images/mocks/andr_1.png" className="w-[223px] h-[178px]" />, value: "13 Layouts", title: "Pixel 7 Pro", category: "Android Phones" },

    { key: 16, label: "iPad Mini", image: <img src="/images/mocks/tablet_0.png" className="w-[223px] h-[178px]" />, value: "10 layouts", title: "iPad Mini", category: "Tablets" },
    { key: 17, label: "iPad Air", image: <img src="/images/mocks/tablet_1.png" className="w-[223px] h-[178px]" />, value: "10 layouts", title: "iPad Air", category: "Tablets" },
    { key: 18, label: "iPad Pro 11", image: <img src="/images/mocks/tablet_2.png" className="w-[223px] h-[178px]" />, value: "10 layouts", title: "iPad Pro 11", category: "Tablets" },
    { key: 19, label: "iPad Pro 13", image: <img src="/images/mocks/tablet_3.png" className="w-[223px] h-[178px]" />, value: "10 layouts", title: "iPad Pro 13", category: "Tablets" },

    { key: 20, label: "Macbook Pro 16",image: <img src="/images/mocks/l0.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "Macbook Pro 16", category: "Laptops" },
    { key: 21, label: "Macbook Air M2",image: <img src="/images/mocks/l1.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "Macbook Air M2", category: "Laptops" },
    { key: 22, label: "Macbook Air 13",image: <img src="/images/mocks/l2.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "Macbook Air 13",category: "Laptops" },

    { key: 23, label: "iMac 24",image: <img src="/images/mocks/d0.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "iMac 24", category: "Desktop" },
    { key: 24, label: "Pro Display XDR",image: <img src="/images/mocks/d1.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "Pro Display XDR", category: "Desktop" },
    { key: 25, label: "iMac Pro" ,image: <img src="/images/mocks/d3.png" className="w-[223px] h-[178px]" />, value: "9 layouts", title: "iMac Pro", category: "Desktop" },

    { key: 26, label: "Apple Watch Ultra",image: <img src="/images/mocks/w0.png" className="w-[223px] h-[178px]" />, value: "11 layouts", title: "Apple Watch Ultra", category: "Wearables" },
    { key: 27, label: "Apple Watch 10 46mm",image: <img src="/images/mocks/w2.png" className="w-[223px] h-[178px]" />, value: "11 layouts", title: "Apple Watch 10 46mm", category: "Wearables" },
    { key: 28, label: "Apple Watch 10 42mm",image: <img src="/images/mocks/w3.png" className="w-[223px] h-[178px]" />, value: "11 layouts", title: "Apple Watch 10 42mm", category: "Wearables" },
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
    setSelectedCategory(ratio.category === "" ? "Screenshot" : ratio.category);
  };

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
            ></div>

            {/* Middle: Category and Selected Ratio */}
            <div className="flex-1 mx-4 text-left">
                <span className="text-base mr-2">{selectedCategory}</span>
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
                className="px-2 text-center py-2 text-white rounded-lg hover:bg-[#3C3C3E] transition-colors flex items-center gap-4 cursor-pointer"
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
                <div className="text-base font-medium text-white mb-4">{category}<span className="float-right text-xs p-2 bg-[#373738] rounded-xl cursor-pointer mr-1">See all</span></div>
                <div className="grid grid-cols-2 gap-2">
                  {ratios.map((device) => (
                    <button
                      key={device.key}
                      onClick={() => handleRatioSelect(device)}
                      className="px-4 py-2 w-full mx-auto text-white rounded-xl bg-[#373738] hover:bg-[#3C3C3E] transition-colors cursor-pointer"
                    >
                        <p className="text-sm text-white text-left">{device.title === "" ? "" : device.title}</p>
                        <p className="text-xs text-gray-400 text-left">{device.value}</p>
                      {device.image}
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