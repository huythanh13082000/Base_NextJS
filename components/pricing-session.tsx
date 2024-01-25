"use client";
import React, { useRef } from "react";
import CardPricing from "@/components/card-pricing";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";

type PricingSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const PricingSession = ({ className }: PricingSessionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  return (
    <section
      ref={ref}
      className={cn(
        "relative mt-20 flex flex-col items-center gap-4 overflow-hidden",
        isInView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !isInView && "before:rotate-180 before:opacity-40",
        className,
      )}
    >
      <div className="absolute top-0 bg-divider w-full h-px"></div>
      <div
        className="absolute top-0 -translate-y-[40%] w-[70%] max-md:w-[120%] aspect-[2/1] opacity-30 transition-all duration-1000 scale-x-0 [.is-visible_&]:scale-x-100"
        style={{
          background:
            "radial-gradient(70.71% 70.71% at 50% 50%, #346BFA 0%, rgba(0, 0, 0, 0.00) 70%)",
        }}
      ></div>

      <div className="mt-[100px] bg-[#0b1421] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a] opacity-0 [.is-visible_&]:opacity-100">
        PRICING
      </div>
      <p className="font-bold text-5xl bg-title text-transparent bg-clip-text opacity-0 mb-20 translate-y-[50%] [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0 [.is-visible_&]:opacity-100">
        Unlock Your Website&#39;s Potential
      </p>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
        className="grid gap-8 grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 pb-[150px]"
      >
        <CardPricing />
        <CardPricing />
        <CardPricing />
        <CardPricing />
      </motion.div>
      <div className="absolute -z-10 w-full h-[600px] bottom-0 translate-y-1/2">
        <Image src="/images/bg_galaxy.svg" alt="Galaxy" fill />
      </div>
    </section>
  );
};

export default PricingSession;
