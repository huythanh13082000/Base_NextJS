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

const CardPricing = () => {
  return (
    <Card
      className="rounded-2xl bg-[#010618] text-white border-[#212a39] text-[14px]"
      style={{
        background:
          "radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
      }}
    >
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
    </Card>
  );
};

export default CardPricing;
