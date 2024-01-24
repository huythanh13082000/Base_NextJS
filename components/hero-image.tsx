"use client";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const HeroImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all", once: true });
  useEffect(() => {
    if (!isInView) return;
  }, [isInView]);
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full h-[675px] flex items-center justify-center",
        isInView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
        isInView && "before:animate-image-glow",
      )}
    >
      <Image
        src="/images/video.png"
        alt="Video"
        fill
        className={cn(
          "object-cover transition-opacity delay-[680ms]",
          isInView ? "opacity-100" : "opacity-50",
        )}
      />
      <div className="absolute w-[108px] h-[108px] p-4 rounded-full border border-white border-opacity-50 cursor-pointer">
        <div className="w-full h-full rounded-full bg-[#afafaf] flex items-center justify-center">
          <Image src="/icons/play.svg" alt="play" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
