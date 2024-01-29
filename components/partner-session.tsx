"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImagePartner } from "@/data/partnet";
import { useInView } from "framer-motion";

type PartnerSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const PartnerSession = ({ className }: PartnerSessionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden text-center",
        isInView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !isInView && "before:rotate-180 before:opacity-40",
        className,
      )}
    >
      <div className="-z-10 absolute w-full h-[600px] top-0 -translate-y-[55%]">
        <Image src="/images/bg_galaxy.svg" alt="Galaxy" fill />
      </div>
      <div className="bg-[#111e3a] max-w-fit py-1 px-4 rounded-full font-medium border border-[#1b2947] mx-auto mt-[86px] mb-4 translate-y-8 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        PARTNERS
      </div>
      <p className="font-bold xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] bg-title text-transparent bg-clip-text mb-[100px] translate-y-8 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        Our Partners Join Force With Us
      </p>
      <div className="relative w-full overflow-hidden mx-auto">
        <div
          style={{
            background:
              "linear-gradient(90deg, #010A18, transparent 30%, transparent 70%, #010A18)",
          }}
          className="absolute inset-0 pointer-events-none z-10"
        ></div>
        <div className="w-[2400px] grid grid-cols-12 items-center animate-slide-left mb-12">
          {[...ImagePartner, ...ImagePartner].map((item, index) => (
            <div key={index} className="relative justify-self-center">
              <Image src={item} alt="Car" width={56} height={56} />
            </div>
          ))}
        </div>
        <div className="w-[2400px] grid grid-cols-12 items-center animate-slide-right mb-12">
          {[...ImagePartner, ...ImagePartner].map((item, index) => (
            <div key={index} className="relative justify-self-center">
              <Image src={item} alt="Car" width={56} height={56} />
            </div>
          ))}
        </div>
        <div className="w-[2400px] grid grid-cols-12 items-center animate-slide-left">
          {[...ImagePartner, ...ImagePartner].map((item, index) => (
            <div key={index} className="relative justify-self-center">
              <Image src={item} alt="Car" width={56} height={56} />
            </div>
          ))}
        </div>
      </div>
      {/*<div className="bg-divider w-full h-px mt-[160px]"></div>*/}
    </section>
  );
};

export default PartnerSession;
