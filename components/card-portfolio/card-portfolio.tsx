"use client";
import React from "react";
import Image from "next/image";
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import useLinearCard from "@/lib/linear-card";

const CardPortfolio = (props: {
  data?: PortfolioType;
  onClick?: () => void;
}) => {
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard();
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-[16px] md:p-[12px] lg:p-[16px]"
      onClick={() => props.onClick && props.onClick()}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background:
            "radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative flex flex-col h-full p-[32px] border-[#1e2736] border-[1px] rounded-[16px] custom-cursor group"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 rounded-xl transition duration-300 group-hover:opacity-30"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${cursorX}px ${cursorY}px,
              #346BFA 0%,
              rgba(0, 0, 0, 0),
              transparent 70%
            )
          `,
          }}
        />
        <div className="relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${props.data?.logo}`}
            alt=""
            objectFit="cover"
            layout="cover"
            width={60}
            height={60}
            className="lg:w-[60px] lg:h-[60px] md:w-[48px] md:h-[48px] w-[52px] h-[52px] rounded-xl"
          />
          <Image
            src={"/icons/star.svg"}
            alt=""
            width={10}
            height={10}
            className="top-0 absolute left-[-16px]"
          />
          <Image
            src={"/icons/star.svg"}
            alt=""
            width={9}
            height={9}
            className="top-[-8px] absolute left-[62px]"
          />
          <Image
            src={"/icons/star.svg"}
            alt=""
            width={8}
            height={8}
            className="bottom-[6px] absolute left-[66px]"
          />
          <Image
            src={"/icons/star.svg"}
            alt=""
            width={6}
            height={6}
            className="bottom-0 absolute left-[-10px]"
          />
        </div>
        <p className="text-[18px] font-bold mt-[24px] mb-[12px] text-start">
          {props.data?.title}
        </p>
        <p className="text-[15px] text-start">
          {props.data?.programming_language}
        </p>
        <p className="text-[#98A1B6] mt-[8px] mb-[12px] text-start">
          {props.data?.description}
        </p>
        <button className="mt-auto flex gap-[4px] bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text font-bold text-[14px] custom-cursor">
          View Detail{" "}
          <Image src={"/icons/icon_right.svg"} alt="" width={24} height={24} />
        </button>
      </motion.div>
    </div>
  );
};

export default CardPortfolio;
