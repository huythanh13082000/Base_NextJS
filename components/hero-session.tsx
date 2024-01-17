import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSession = () => {
  return (
    <section>
      <div className="relative w-full text-center h-[390px]">
        <Image
          src="icons/bg_hero.svg"
          alt=""
          fill
          objectFit="cover"
          className="z-0"
        />
        <div className="relative flex flex-col items-center">
          <h1 className="pt-16 mb-4 font-bold text-[70px] leading-[80px]">
            Product Adoption Made Easy
          </h1>
          <p className="max-w-[720px] mb-8 text-[20px] leading-[28px]">
            Design, deploy, and test onboarding experiences as easily,
            accurately, and on time as your business wants
          </p>
          <Button>Start building</Button>
        </div>
      </div>

      <div className="relative w-full h-[675px] flex items-center justify-center">
        <Image src="/images/video.png" alt="Video" fill objectFit="cover" />
        <div className="absolute w-[108px] h-[108px] p-4 rounded-full border border-white border-opacity-50 cursor-pointer">
          <div className="w-full h-full rounded-full bg-[#afafaf] flex items-center justify-center">
            <Image src="/icons/play.svg" alt="play" width={18} height={18} />
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.16] mt-[100px]"></div>
    </section>
  );
};

export default HeroSession;
