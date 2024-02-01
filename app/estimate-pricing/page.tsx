"use client";

import DialogEstimate from "@/components/dialog-estimate";
import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import useTags from "@/lib/use-tag";
import useType from "@/lib/use-type";
import ListOptions from "@/components/list-options";
import optionStore from "@/store/option";
import { formatCurrency } from "@/lib/formatCurrency";
import { useRouter } from "next/navigation";
import SelectCustom from "@/components/select-custom";

const containerStyle = {
  background:
    "radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
};

const EstimatePricing = () => {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string>("UI/UX 디자인");
  const { tags } = useTags(type);
  const { types } = useType();
  const { options, getTotalPrice } = optionStore((state) => state);
  const router = useRouter();
  const onChangeSelect = useCallback((value: string) => {
    setType(value);
  }, []);
  return (
    <div className="w-full">
      <div className="lg:px-[80px] px-4 xl:px-24">
        <div
          className="text-center lg:leading-[50px] p-[30px] leading-[30px]"
          style={containerStyle}
        >
          <h1 className="mb-3 lg:mb-4 xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Estimate Calculation
          </h1>
          <p className="mb-6 lg:mb-8 xl:text-[20px] xl:leading-[28px] lg:text-[18px] lg:leading-[26px] text-[14px] leading-[20px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            프로젝트 착수시 상세 개발 견적을 받을 수 있습니다 담당 개발자가
            배정되어 빠르게 개발이 진행됩니다
          </p>
        </div>
        <div className="flex flex-col xl:gap-[70px] xl:py-[60px] xl:flex-row md:gap-[60px]">
          <div className="xl:border-[#1e2736] xl:border-[1px] xl:rounded-[16px] xl:w-fit xl:py-[16px] xl:h-fit hidden xl:inline-block">
            {types &&
              types.data.map((t, index) => (
                <p
                  key={index}
                  className={`px-[32px] py-3 w-[230px] cursor-pointer ${
                    t.name === type
                      ? "bg-gradient-to-b from-[#396FFD] to-[#0744E6]"
                      : ""
                  }`}
                  onClick={() => setType(t.name)}
                >
                  {t.name}
                </p>
              ))}
          </div>
          <div className="xl:hidden md:flex hidden md:gap-6">
            {types &&
              types.data.map((t, index) => (
                <p
                  key={index}
                  className={`px-[20px] py-3 border-[#1e2736] border-[1px] rounded-[12px] w-fit font-semibold text-[14px] cursor-pointer ${
                    t.name === type
                      ? "bg-gradient-to-b from-[#396FFD] to-[#0744E6]"
                      : ""
                  }`}
                  onClick={() => setType(t.name)}
                >
                  {t.name}
                </p>
              ))}
          </div>
          <div className="w-full xl:hidden md:hidden lg:hidden mb-10">
            <SelectCustom
              type={type}
              types={types ? types.data : []}
              onChange={onChangeSelect}
            />
          </div>
          <div className="flex flex-col gap-10">
            {tags &&
              tags.data.map((v, index) => (
                <ListOptions type={type} tag={v} key={index} />
              ))}
          </div>
        </div>
      </div>
      {options && !!options.length && (
        <div className="sticky bottom-0 w-full z-50 bg-[#08090F] lg:px-[80px] px-4 xl:px-24 flex justify-between items-center py-5">
          <div>
            <p className="font-semibold  text-[18px] mb-2">예상 견적</p>
            <div>
              <span className="bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent font-semibold text-[18px] sm:text-[28px]">
                {formatCurrency(getTotalPrice())}
              </span>{" "}
              <span className="text-sm text-[#98A1B6] sm:text-[18px]">
                만원
              </span>{" "}
            </div>
          </div>
          <Button onClick={() => setOpen(true)}>견적 보기</Button>
        </div>
      )}
      <DialogEstimate
        navigate={() => router.push("/contact-us")}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default EstimatePricing;
