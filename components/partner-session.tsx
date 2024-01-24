import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PartnerSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const PartnerSession = ({ className }: PartnerSessionProps) => {
  return (
    <section className={cn("relative overflow-hidden text-center", className)}>
      <div className="-z-10 absolute w-full h-[600px] top-0 -translate-y-1/2">
        <Image src="/images/bg_galaxy.svg" alt="Galaxy" fill />
      </div>
      <div className="bg-[#111e3a] max-w-fit py-1 px-4 rounded-full font-medium border border-[#1b2947] mx-auto mt-[86px] mb-4">
        PARTNERS
      </div>
      <p className="font-bold text-5xl bg-title text-transparent bg-clip-text mb-[100px]">
        Our Partners Join Force With Us
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-y-12 items-center px-7 animate-slide hover:[animation-play-state:paused]">
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/qnb.svg" alt="Car" width={56} height={56} />
        </div>
        <div className="relative justify-self-center">
          <Image src="/images/bmw.svg" alt="Car" width={56} height={56} />
        </div>
      </div>
      <div className="bg-divider w-full h-px mt-[160px]"></div>
    </section>
  );
};

export default PartnerSession;
