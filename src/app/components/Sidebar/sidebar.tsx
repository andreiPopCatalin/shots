import { cn } from "@/utils/cn";
import ImageSection from "../ImageSection.tsx/imageSection";
import { useState } from "react";
import GradientSection from "../gradientSection.tsx/gradientSection";
import SolidColorSection from "../solidColorsSection.tsx/solidColorsSection";
import MagicBackgroundsPanel from "../magicBackgroundPanel/magicBackgroundPanel";
import EffectsPanel from "../effectsSection.tsx/effectsSection";
import ScenesSection from "../scenesSection/scenesSection";
import BackgroundSection from "../backgroundSection.tsx/backgroundSection";
import AspectRatioSelector from "../aspectRationSection/aspectRationSection";
import FeedbackModal from "../feedbackModal/feedbackModal";
import MockupVisibilitySection from "../mockupVisibilitySection/mockupVisibilitySection";
import DetailsSection from "../detailsSection/detailsSection";
import SizePositionSection from "../sizePositionSection/sizePositionSection";
import ShadowSection from "../shadowSection/shadowSection";
import BorderSection from "../borderSection/borderSection";
import MediaUploadSection from "../mediaUploadSection/mediaUploadSection";
import StylesSection from "../stylesSection/stylesSection";
import LayoutScreenSection from "../layoutScreenSection/layoutScreenSection";

interface SidebarProps {
  items: { name: string }[];
  activeItem: string;
  onItemClick: (name: string) => void;
  onToggleCompanySidebar: () => void;
}

const gradients = [
    {
        title: "Gradients",
        gradients: [
            "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
            "linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))",
            "linear-gradient(135deg, rgb(238, 221, 243), rgb(238, 146, 177), rgb(99, 48, 180))",
            "linear-gradient(113.96deg, rgb(69, 190, 232) 13.54%, rgb(214, 161, 172) 50%, rgb(232, 140, 93) 85.42%)",
            "linear-gradient(113.96deg, rgb(69, 233, 159) 11.98%, rgb(213, 168, 155) 50%, rgb(232, 70, 152) 85.42%)",
            "linear-gradient(113.96deg, rgb(69, 223, 232) 11.98%, rgb(211, 170, 175) 50%, rgb(232, 103, 100) 85.42%)",
            "linear-gradient(293.96deg, rgb(160, 233, 125) 11.46%, rgb(169, 203, 177) 50%, rgb(192, 128, 232) 88.54%)",
            "linear-gradient(-45deg, rgb(114, 122, 154), rgb(216, 219, 233))",
            "linear-gradient(135deg, rgb(48, 48, 48), rgb(16, 16, 16))",
            "linear-gradient(135deg, rgb(79, 172, 254), rgb(0, 242, 254))",
            "linear-gradient(135deg, rgb(10, 207, 254), rgb(73, 90, 255))",
            "linear-gradient(-45deg, rgb(61, 78, 129) 0%, rgb(87, 83, 201) 48%, rgb(110, 127, 243) 100%)",
            "linear-gradient(135deg, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125))"
        ]
    }
];
const styles = [
  {
      title: "Style",
      images: [
        "/images/media/default.png", 
        "/images/media/glass-light.webp", 
        "/images/media/glass-dark.png", 
        "/images/media/outline.webp", 
        "/images/media/border.png", 
        "/images/media/retro.png", 
        "/images/media/card.webp",
        "/images/media/stack.png", 
        "/images/media/stack-2.webp"
        ], 
  },
];

const categories = [
    {
        title: "Mystic gradient",
        images: [
          "/images/mystic-gradients/1.jpg", 
          "/images/mystic-gradients/2.jpg", 
          "/images/mystic-gradients/3.jpg", 
          "/images/mystic-gradients/4.jpg", 
          "/images/mystic-gradients/5.jpg", 
          "/images/mystic-gradients/6.jpg", 
          "/images/mystic-gradients/7.jpg",
          "/images/mystic-gradients/8.jpg", 
          "/images/mystic-gradients/9.jpg", 
          "/images/mystic-gradients/10.jpg",
          "/images/mystic-gradients/11.jpg", 
          "/images/mystic-gradients/12.jpg", 
          "/images/mystic-gradients/13.jpg", 
          "/images/mystic-gradients/14.jpg", 
          "/images/mystic-gradients/15.jpg"
          ], 
    },
    {
      title: "Cosmic gradient",
      images: [
        "/images/cosmic/1.jpg", 
        "/images/cosmic/2.jpg", 
        "/images/cosmic/3.jpg", 
        "/images/cosmic/4.jpg", 
        "/images/cosmic/5.jpg", 
        "/images/cosmic/6.jpg", 
        "/images/cosmic/7.jpg",
        "/images/cosmic/8.jpg", 
        "/images/cosmic/9.jpg", 
        "/images/cosmic/10.jpg"
        ], 
    },
    {
      title: "Desktop Background",
      images: [
        "/images/desktop/sequoia-light.jpg", 
        "/images/desktop/sonoma-light.jpg", 
        "/images/desktop/ventura-light.jpg", 
        "/images/desktop/sequoia-dark.jpg", 
        "/images/desktop/sonoma-dark.jpg", 
        "/images/desktop/ventura-dark.jpg", 
        "/images/desktop/monterey-light.jpg",
        "/images/desktop/bigsur-light.jpg", 
        "/images/desktop/mojave-light.jpg", 
        "/images/desktop/monterey-dark.jpg",
        "/images/desktop/bigsur-dark.jpg",
        "/images/desktop/mojave-dark.jpg"
        ], 
    },
    {
        title: "Abstract",
        images: [
          "/images/abstract/photo-1687042277425-89b414406d3a.avif", 
          "/images/abstract/photo-1687042277586-971369d3d241.avif", 
          "/images/abstract/photo-1620121684840-edffcfc4b878.avif", 
          "/images/abstract/photo-1687392946855-8e35efa25ad7.avif", 
          "/images/abstract/photo-1620121692029-d088224ddc74.avif", 
          "/images/abstract/photo-1655841439659-0afc60676b70.avif", 
          "/images/abstract/1.jpg",
          "/images/abstract/16.jpg", 
          "/images/abstract/12.jpg"
          ], 
      },
      {
        title: "Radiant gradient",
        images: [
          "/images/radiant/1.jpg", 
          "/images/radiant/2.jpg", 
          "/images/radiant/3.jpg", 
          "/images/radiant/4.jpg", 
          "/images/radiant/5.jpg", 
          "/images/radiant/6.jpg", 
          "/images/radiant/7.jpg",
          "/images/radiant/8.jpg", 
          "/images/radiant/9.jpg", 
          "/images/radiant/10.jpg",
          "/images/radiant/11.jpg", 
          "/images/radiant/12.jpg"
          ], 
    },
    {
        title: "Earth",
        images: [
          "/images/earth/photo-1482976818992-9487ee04f08b.avif", 
          "/images/earth/photo-1554147090-e1221a04a025.avif", 
          "/images/earth/photo-1499988921418-b7df40ff03f9.avif", 
          "/images/earth/photo-1490358930084-2d26f21dc211.avif", 
          "/images/earth/photo-1511860810434-a92f84c6f01e.avif", 
          "/images/earth/photo-1554110397-9bac083977c6.avif",
          "/images/earth/photo-1508739773434-c26b3d09e071.avif", 
          "/images/earth/photo-1508144753681-9986d4df99b3.avif",
          "/images/earth/photo-1671723521246-a6710cfafc70.avif"
          ], 
    },
    {
        title: "Texture",
        images: [
          "/images/texture/demo1.jpg", 
          "/images/texture/photo-1531824475211-72594993ce2a.avif", 
          "/images/texture/photo-1506968430777-bf7784a87f23.avif", 
          "/images/texture/photo-1642455487913-1e21f9f6f5a0.avif", 
          "/images/texture/photo-1639430257115-f63af9eab97d.avif", 
          "/images/texture/photo-1571292098320-997aa03a5d19.avif",
          "/images/texture/photo-1529753253655-470be9a42781.avif", 
          "/images/texture/photo-1506213463051-7694f7a4b9e7.avif",
          "/images/texture/photo-1575722290270-626b0208df99.avif"
          ], 
    },
  ];

export default function Sidebar({ items, activeItem, onItemClick, onToggleCompanySidebar }: SidebarProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedGradient, setSelectedGradient] = useState<string>("");
  const [selectedSolidColor, setSelectedSolidColor] = useState<string>("");
  const [isCompanySidebarOpen, setCompanySidebarOpen] = useState(false);

  const setUpClick = () => {
    setCompanySidebarOpen(!isCompanySidebarOpen);
    onToggleCompanySidebar();
    return;
  }
  return (
  
    <aside className={` w-[248px] bg-[#0D0D0D] scrollbar-hide pl-1 min-w-[248px] max-w-[248px] space-y-1 static left-1 top-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:to-transparent after:via-[#00000033] after:z-[1000] after:rounded-inherit   
      ${isCompanySidebarOpen ? "left-[258px] after:left-[370px] top-0 after:opacity-100 after:visible" : " after:opacity-0 after:invisible left-0 top-0 "}`}>
      <div className="w-full bg-[#1C1C1E] max-h-[44px] mt-2 rounded-2xl p-1">
        <div className="flex items-center justify-between">
          {/* Logo Button */}
          <button onClick={setUpClick} className="flex items-center hover:bg-[#2C2C2E] rounded-lg p-1 transition-colors">
            <img
              loading="eager"
              decoding="async"
              className="logo h-[30px]"
              src="/images/company/shots-logo.png"
              alt="Shots logo"
            />
            <span className="ml-2 text-white">Shots</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 rotate-270" width="13px" fill="none" viewBox="0 0 24 24"><path fill="#fff9" d="M2 8.539c0-.797.688-1.448 1.543-1.448.421 0 .821.165 1.12.455l7.348 7.031 7.325-7.031a1.65 1.65 0 0 1 1.121-.455c.855 0 1.543.651 1.543 1.448 0 .403-.144.734-.433 1.003l-8.324 7.93c-.366.352-.766.528-1.243.528-.466 0-.866-.165-1.243-.527L2.444 9.542C2.155 9.262 2 8.932 2 8.539"></path></svg>
          </button>

          {/* Right: Feedback Button */}
          <FeedbackModal/>
        </div>
      </div>
      <div className="bg-[#1C1C1E] rounded-xl p-2">
        <div className="flex text-center mb-2">
        {items.map((item) => (
            <div key={item.name}
                className={cn(
                    "p-2 flex-col font-bold w-1/2 text-center cursor-pointer rounded-md hover:bg-zinc-800  transition-colors",
                    activeItem === item.name ? "text-white" : "text-[#ffffff5c]" )} onClick={() => onItemClick(item.name)}
                > {item.icon}<span className="ml-3">{item.name}</span>
                </div>
            ))}
        </div>
        {activeItem === "Frame" ? (<AspectRatioSelector/>) : (<LayoutScreenSection/>) }
        <div className="frameSection overflow-y-auto scrollbar-hide h-full max-h-[80vh] pb-[116px] pt-[15px]">
          {activeItem === "Frame" ? (<>
            <ScenesSection />
            <EffectsPanel/>
            <BackgroundSection/>
            <MagicBackgroundsPanel />
            <SolidColorSection onSelect={setSelectedSolidColor} />
            {gradients.map((section) => (
                <GradientSection
                    key={section.title}
                    title={section.title}
                    gradients={section.gradients}
                    selectedGradient={selectedGradient}
                    onSelect={setSelectedGradient}
                />
            ))}
            {categories.map((section) => (
                <ImageSection
                key={section.title}
                title={section.title}
                images={section.images}
                selectedImage={selectedImage}
                onSelect={setSelectedImage}
                />
            ))}
          </>) : (<>
            <MediaUploadSection/>
            {styles.map((section) => (
                <StylesSection
                key={section.title}
                title={section.title}
                images={section.images}
                selectedImage={selectedImage}
                onSelect={setSelectedImage}
                />
            ))}
          
          <BorderSection/>
          <ShadowSection />
          <SizePositionSection/>
          <DetailsSection/>
          <MockupVisibilitySection/>
          </>)}
            
        </div>
      </div>
    </aside>
  );
}