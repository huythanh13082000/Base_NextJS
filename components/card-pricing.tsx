"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const CustomCard = motion(Card);
const CardPricing = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.9, 0.9], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.9, 0.9], ["-8deg", "8deg"]);

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.9;
    const yPct = mouseY / height - 0.9;

    x.set(xPct);
    y.set(yPct);
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <CustomCard
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl bg-[#010618] text-white border-[#212a39] text-[14px] cursor-pointer group"
      style={{
        background:
          "radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 rounded-xl transition duration-300 group-hover:opacity-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${cursorX}px ${cursorY}px,
              #346BFA 0%,
              rgba(0, 0, 0, 0),
              transparent 70%
            )
          `,
        }}
      />
      <CardHeader className="py-6 px-5 gap-2">
        <CardTitle className="font-bold">개발자 아웃소싱</CardTitle>
        <CardDescription className="leading-5 text-[#E1E4EA]">
          세계 상위10프로 개발자를 비상주로 채용해보세요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="text-[#98A1B6]">혜택제공:</p>
          <div className="flex flex-col gap-3">
            {[
              "1주 무료 체험 기간",
              "자체 개발 프로젝트 관리 도구 제공",
              "기술 워크샵 및 교육",
              "대중교통 판촉물광고 할인쿠폰",
              "PM 인력 지원",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Image
                  src="/icons/setting.svg"
                  alt="Setting"
                  width={22}
                  height={22}
                />
                <p className="leading-5 text-[#C3C9D5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-[65px] px-5 flex-col gap-4">
        <div className="flex w-full justify-between">
          <p className="text-[#98A1B6]">1 개월</p>
          <h1 className="text-xl bg-blue-gradient text-transparent bg-clip-text font-bold">
            2,500,000원 부터~
          </h1>
        </div>
        <Button className="w-full">견적 계산</Button>
      </CardFooter>
    </CustomCard>
  );
};

export default CardPricing;
