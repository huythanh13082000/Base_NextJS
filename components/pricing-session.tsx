import React from "react";
import CardPricing from "@/components/card-pricing";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PricingSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const PricingSession = ({ className }: PricingSessionProps) => {
  return (
    <section
      className={cn(
        "relative mt-20 flex flex-col items-center gap-4 overflow-hidden",
        className,
      )}
    >
      <div className="bg-[#0b1421] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a]">
        PRICING
      </div>
      <p className="font-bold text-5xl bg-title text-transparent bg-clip-text mb-20">
        Unlock Your Website&#39;s Potential
      </p>
      <div className="grid gap-8 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 pb-[150px]">
        <CardPricing />
        <CardPricing />
        <CardPricing />
        <CardPricing />
      </div>
      <div className="absolute -z-10 w-full h-[600px] bottom-0 translate-y-1/2">
        <Image src="/images/bg_galaxy.svg" alt="Galaxy" fill />
      </div>
    </section>
  );
};

export default PricingSession;
