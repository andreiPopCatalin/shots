import { FC, useState } from "react";
import { motion } from "framer-motion";

interface BoxData {
  background: string;
  rotateZ: string;
  scale: string;
  transformStyle: string;
  transformStyleSecond?: string;
  hasAnimation: boolean;
  isMultiple: number;
}

interface ExportPreviewsProps {
  boxes: BoxData[];
}

const ExportPreviews: FC<ExportPreviewsProps> = ({ boxes }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleBoxClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          style={{
            background: box.background,
            opacity: 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className={`mx-auto mt-[6px] w-[221px] h-[171px] flex items-center rounded-lg justify-center ${
            activeIndex === index ? "outline outline-[1.5px] outline-white outline-offset-[3px]" : ""
          }`}
          onClick={() => handleBoxClick(index)}
        >
          <motion.div
            style={{
              willChange: "transform",
              transform: box.transformStyle,
              transition: "transform 0.125s linear",
              transformOrigin: "center center",
            }}
            className={`border bg-[#101012] border-[#101012] flex items-center rounded-lg justify-center ${
              box.isMultiple === 2 ? "w-[85px] h-[64px]" : "w-[171px] h-[128px]"}`}
          >
          </motion.div>
          {box.isMultiple === 2 && (
          <motion.div
            style={{
              willChange: "transform",
              transform: box.transformStyleSecond ? box.transformStyleSecond : box.transformStyle,
              transition: "transform 0.125s linear",
              transformOrigin: "center center",
            }}
            className={`border bg-[#101012] border-[#101012] flex items-center rounded-lg justify-center ${
              box.isMultiple === 2 ? "w-[85px] h-[64px]" : "w-[171px] h-[128px]"}`}
          ></motion.div>)}
        </motion.div>
      ))}
              </>
  );
};

export default ExportPreviews;