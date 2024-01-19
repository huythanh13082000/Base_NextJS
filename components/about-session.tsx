import React from "react";
import CustomDivider from "@/components/custom-divider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AboutCategory, Framework, Language } from "@/data/about";
import AboutCategoryLayout from "@/components/about-category";

type AboutSessionProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const AboutSession = ({ className }: AboutSessionProps) => {
  return (
    <section className={cn("text-center mt-[160px]", className)}>
      <div className="bg-[#0b1421] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a] mx-auto mb-4">
        ABOUT US
      </div>
      <p className="font-bold text-5xl bg-title text-transparent bg-clip-text mb-4">
        We&#39;re Here To Help You
      </p>
      <p className="text-base text-[#D2D0DD] font-medium mb-[100px]">
        국내외 상위 개발자 100명 이상의 네트워크를 보유한 국내 유일한 개발사
      </p>
      <div className="flex flex-col gap-24">
        {AboutCategory.map((item, index) => (
          <AboutCategoryLayout
            key={index}
            title={item.title}
            listItem={item.listItem}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSession;
