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
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { amount: "all", once: true });
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().then();
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
      <Suspense fallback={<p>Loading video...</p>}>
        <VideoComponent ref={videoRef} />
      </Suspense>
    </div>
  );
};

export default HeroImage;
