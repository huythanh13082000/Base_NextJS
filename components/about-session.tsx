"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });
  return (
    <section
      ref={ref}
      className={cn(
        "relative text-center mt-[160px] overflow-hidden",
        isInView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !isInView && "before:rotate-180 before:opacity-40",
        className,
      )}
    >
      <div className="absolute top-0 bg-divider w-full h-px"></div>
      <div className="flex justify-center w-full">
        <div
          className="mx-auto absolute top-0 -translate-y-[40%] w-[70%] max-md:w-[120%] aspect-[2/1] opacity-30 transition-all duration-1000 scale-x-0 [.is-visible_&]:scale-x-100"
          style={{
            background:
              "radial-gradient(70.71% 70.71% at 50% 50%, #346BFA 0%, rgba(0, 0, 0, 0.00) 70%)",
          }}
        ></div>
      </div>

      <div className="bg-[#0b1421] xl:mt-[160px] lg:mt-20 mt-[60px] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a] mx-auto mb-4 translate-y-8 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        ABOUT US
      </div>
      <p className="font-bold xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] bg-title text-transparent bg-clip-text mb-4 translate-y-8 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        개발자가 보유한 다양한 기술 스택
      </p>
      <p className="xl:text-[20px] xl:leading-[28px] lg:text-[18px] lg:leading-[26px] text-[14px] leading-[20px] text-[#D2D0DD] font-medium mb-[100px]  translate-y-8 [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        Node.js, Angular.js, Flutter, React.js, Android/iOS, Java, Python, .Net, C#, PHP 등 개발에서 사용되는 100+ 이상의 기술 스택을 보유하고 있습니다.
      </p>
      <div className="flex flex-col gap-24 overflow-hidden">
        {AboutCategory.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="shown"
            viewport={{
              amount: "some",
              margin: "100% 0% -9% 0%",
            }}
            variants={{
              hidden: {
                opacity: 0,
                x: 90,
              },
              shown: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  staggerChildren: 0.13,
                  type: "spring",
                  stiffness: 150,
                  damping: 24,
                },
              },
            }}
          >
            <AboutCategoryLayout title={item.title} listItem={item.listItem} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSession;
