"use client";
import React, { useRef } from "react";
import CardPortfolio from "@/components/card-portfolio/card-portfolio";
import Image from "next/image";
import { cn, fetcher } from "@/lib/utils";
import { useInView, motion } from "framer-motion";

const PortfolioSession = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        isInView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !isInView && "before:rotate-180 before:opacity-40",
      )}
    >
      <div className="relative -z-10 flex h-[85px] items-start justify-center overflow-hidden">
        <div className="h-[400px] w-full scale-x-105 rounded-[30%] border-gray-500 border"></div>
      </div>

      <div className="flex justify-center w-full">
        <div
          className="mx-auto absolute top-0 -translate-y-[40%] w-[70%] max-md:w-[120%] aspect-[2/1] opacity-30 transition-all duration-1000 scale-x-0 [.is-visible_&]:scale-x-100"
          style={{
            background:
              "radial-gradient(70.71% 70.71% at 50% 50%, #346BFA 0%, rgba(0, 0, 0, 0.00) 70%)",
          }}
        ></div>
      </div>

      <div className="relative px-[96px] z-10 h-full w-full text-white text-center">
        <div className="bg-[#0b1421] max-w-fit mx-auto py-1 px-4 rounded-full font-medium border border-[#151d2a] mb-4">
          PORTFOLIO
        </div>
        <p className="font-bold text-5xl bg-title text-transparent bg-clip-text mb-4 translate-y-4 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
          Navigate Through The Portfolio
        </p>
        <p className="text-base text-[#D2D0DD] font-medium mb-[100px] translate-y-4 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
          산업, 분야 및 주제가 다양해졌습니다.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ amount: "some", margin: "100% 0% -8% 0%" }}
          className="flex flex-wrap mb-5"
        >
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </motion.div>
      </div>
      <div className="relative -z-10 flex h-[85px] items-end justify-center overflow-hidden">
        <div className="h-[400px] w-full scale-x-105 rounded-[30%] border-gray-500 border"></div>
      </div>
    </section>
  );
};

export default PortfolioSession;
