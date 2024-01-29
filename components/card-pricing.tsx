"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Pricing } from "@/types/Pricing";
import useLinearCard from "@/lib/linear-card";

const CustomCard = motion(Card);
const CardPricing = ({
  price,
  title,
  duration,
  provide,
  description,
}: Pricing) => {
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard();
  return (
    <CustomCard
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col rounded-2xl bg-[#010618] text-white border-[#212a39] text-[14px] custom-cursor group"
      style={{
        background:
          "radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
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
      <CardHeader className="py-6 px-5 gap-2">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription className="leading-5 text-[#E1E4EA]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="text-[#98A1B6]">혜택제공:</p>
          <div className="flex flex-col gap-3">
            {provide.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Image
                  src="/icons/setting.svg"
                  alt="Setting"
                  width={22}
                  height={22}
                />
                <p className="leading-5 text-[#C3C9D5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto px-5 pt-[80px] flex-col gap-4 ">
        <div className="flex w-full justify-between">
          <p className="text-[#98A1B6]">{duration}</p>
          <h1 className="text-xl bg-blue-gradient text-transparent bg-clip-text font-bold">
            {price}
          </h1>
        </div>
        <Button className="w-full custom-cursor mt-auto">견적 계산</Button>
      </CardFooter>
    </CustomCard>
  );
};

export default CardPricing;
