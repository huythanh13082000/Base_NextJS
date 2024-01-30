"use client";
import React from "react";
import Image from "next/image";
import FormContact from "@/components/form-contact";
import optionStore from "@/store/option";

const ContactUs = () => {
  const { getTotalPrice } = optionStore((state) => state);
  return (
    <div className="w-full">
      <div className="relative w-full text-center h-fit pb-20">
        <Image
          src="images/bg_lightning.svg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-auto absolute -translate-y-[25%] xl:-translate-y-[40%]"
        />
        <div className="relative">
          <p className="font-bold text-3xl lg:text-6xl xl:text-7xl bg-title text-transparent bg-clip-text mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Contact Us
          </p>
          <p className="text-base text-[#D2D0DD] font-medium translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Feel free to share any questions or feedback with us.
          </p>
        </div>
      </div>
      <div className="px-0 lg:px-[100px]">
        <div className="rounded-2xl bg-gradient-to-b from-transparent via-[#090A2A] to-[#040C18] via-[115.72%] px-4 lg:px-10 pt-8 pb-6 border border-[#484848]">
          {getTotalPrice() && (
            <div className="mb-8 rounded-xl border border-[#484848]">
              <div className="flex rounded-t-xl py-2 px-6 font-semibold bg-[#0b1421]">
                <p className="xl:w-[254px] lg:w-[230px] w-[100px]">개발기간</p>
                <p>탄력 가격(VAT)</p>
              </div>
              <div className="flex rounded-b-xl py-2 px-6 font-semibold">
                <p className="text-[18px] lg:text-[20px] xl:w-[254px] lg:w-[230px] w-[100px] flex items-center">
                  7
                  <span className="bg-blue-gradient text-transparent bg-clip-text text-[15px]">
                    &#160;개월
                  </span>
                </p>
                <p className="text-[15px] flex items-center">
                  <span className="bg-blue-gradient text-transparent bg-clip-text text-[18px] lg:text-[20px]">
                    {getTotalPrice()}
                  </span>
                  &#160;만원
                </p>
              </div>
            </div>
          )}
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
