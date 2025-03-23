"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface ImageSectionProps {
  title: string;
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
}

export default function StylesSection({ title, images, selectedImage, onSelect }: ImageSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      {/* Section Title with Expand Arrow */}
      <div 
        className="flex justify-between items-center cursor-pointer p-2 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-[#626264] font-medium text-sm">{title}</h2>
    </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-1 p-[4px] transition-all h-full">
        {images.map((image) => (
          <div
            key={image}
            className={cn(
                "cursor-pointer rounded-[9px] max-h-[52px] overflow-hidden transition-all",
                selectedImage === image
                  ? "outline outline-[1.5px] outline-white outline-offset-[3px]"
                  : "border-2 border-transparent hover:border-zinc-600"
              )}
            onClick={() => onSelect(image)}
          >
            <img src={image} alt={title} className={cn("w-full h-full object-cover")} />
          </div>
        ))}
      </div>
    </div>
  );
}
