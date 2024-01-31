"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CustomDivider from "@/components/custom-divider";
import HeroImage from "@/components/hero-image";
import { useRouter } from "next/navigation";
type HeroSessionProps = Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
const HeroSession = ({ className }: HeroSessionProps) => {
  const router = useRouter();
  return (
    <section className={className}>
      <div className="relative w-full text-center h-[390px] max-sm:h-auto">
        <Image
          src="icons/bg_hero.svg"
          alt=""
          fill
          className="z-0 object-cover max-sm:hidden"
        />
        <div className="relative flex flex-col items-center">
          <h1 className="pt-16 mb-4 font-bold xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Product Adoption Made Easy
          </h1>
          <p className="max-w-[720px] mb-8 xl:text-[20px] xl:leading-[28px] lg:text-[18px] lg:leading-[26px] text-[14px] leading-[20px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Design, deploy, and test onboarding experiences as easily,
            accurately, and on time as your business wants
          </p>
          <Button
            onClick={() => router.push("/estimate-pricing")}
            className="translate-y-[-1rem] mb-12 animate-fade-in opacity-0 [--animation-delay:600ms] hover:shadow-secondary transition-[shadow,text-shadow] [&_.highlight]:ml-2 group"
          >
            <span>Start building</span>
            <span className="w-0 overflow-hidden group-hover:w-[24px] transition-all duration-300 origin-left">
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </span>
          </Button>
        </div>
      </div>

      <HeroImage />

      {/*<div className="bg-divider w-full h-px mt-[100px]"></div>*/}
      {/*<CustomDivider className="mt-[100px]" />*/}
    </section>
  );
};

export default HeroSession;
