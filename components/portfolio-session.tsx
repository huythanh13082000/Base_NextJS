import React from "react";
import CardPortfolio from "@/components/card-portfolio/card-portfolio";
import Image from "next/image";
import { fetcher } from "@/lib/utils";

const PortfolioSession = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative -z-10 flex h-[85px] items-start justify-center overflow-hidden">
        <div className="h-[400px] w-full scale-x-105 rounded-[30%] border-gray-500 border"></div>
      </div>
      <div className="relative px-[96px] z-10 h-full w-full text-white text-center">
        <div className="bg-[#0b1421] max-w-fit mx-auto py-1 px-4 rounded-full font-medium border border-[#151d2a] mb-4">
          PORTFOLIO
        </div>
        <p className="font-bold text-5xl bg-title text-transparent bg-clip-text mb-4">
          Navigate Through The Portfolio
        </p>
        <p className="text-base text-[#D2D0DD] font-medium mb-[100px]">
          산업, 분야 및 주제가 다양해졌습니다.
        </p>
        <div className="flex flex-wrap mb-5">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
      <div className="relative -z-10 flex h-[85px] items-end justify-center overflow-hidden">
        <div className="h-[400px] w-full scale-x-105 rounded-[30%] border-gray-500 border"></div>
      </div>
    </section>
  );
};

export default PortfolioSession;
