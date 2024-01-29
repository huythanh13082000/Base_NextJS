"use client";
import React, {
  CSSProperties,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import VideoComponent from "@/components/video-component";

const HeroImage = () => {
  const ref = useRef(null);
  const videoRef = useRef<any>(null);
  const isInView = useInView(ref, { amount: "all", once: true });
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full h-auto flex items-center justify-center",
        isInView && "animate-image-rotate",
        "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
        isInView && "before:animate-image-glow",
      )}
    >
      {/*<Image*/}
      {/*  src="/images/video.png"*/}
      {/*  alt="Video"*/}
      {/*  fill*/}
      {/*  className={cn(*/}
      {/*    "object-cover transition-opacity delay-[680ms]",*/}
      {/*    isInView ? "opacity-100" : "opacity-50",*/}
      {/*  )}*/}
      {/*/>*/}
      {/*<div className="absolute w-[108px] h-[108px] p-4 rounded-full border border-white border-opacity-50 cursor-pointer">*/}
      {/*  <div className="w-full h-full rounded-full bg-[#afafaf] flex items-center justify-center">*/}
      {/*    <Image src="/icons/play.svg" alt="play" width={18} height={18} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="h-[500px]"></div>*/}

      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent ref={videoRef} />
      </Suspense>
    </div>
  );
};

export default HeroImage;
