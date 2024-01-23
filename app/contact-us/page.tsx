import React from "react";
import Image from "next/image";
import FormContact from "@/components/form-contact";

const containerStyle = {
  background:
    "radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
};
const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="relative w-full text-center h-fit pb-20">
        <div className="absolute -translate-y-[220px]">
          <Image
            src="images/bg_lightning.svg"
            alt=""
            width={1200}
            height={678}
            className="z-0 object-contain"
          />
        </div>
        <div className="relative">
          <p className="font-bold text-7xl bg-title text-transparent bg-clip-text mb-4">
            Contact Us
          </p>
          <p className="text-base text-[#D2D0DD] font-medium">
            Feel free to share any questions or feedback with us.
          </p>
        </div>
      </div>
      <div className="px-[100px]">
        <div className="rounded-2xl bg-gradient-to-b from-transparent via-[#090A2A] to-[#040C18] via-[115.72%] px-10 pt-8 pb-6 border border-[#484848]">
          <div className="mb-8 rounded-xl border border-[#484848]">
            <div className="flex rounded-t-xl py-2 px-6 font-semibold bg-[#0b1421]">
              <p className="w-[254px]">개발기간</p>
              <p>탄력 가격(VAT)</p>
            </div>
            <div className="flex rounded-b-xl py-2 px-6 font-semibold">
              <p className="text-[20px] w-[254px] flex items-center">
                7
                <span className="bg-blue-gradient text-transparent bg-clip-text text-[15px]">
                  &#160;개월
                </span>
              </p>
              <p className="text-[15px] flex items-center">
                <span className="bg-blue-gradient text-transparent bg-clip-text text-[20px]">
                  9600
                </span>
                &#160;만 원 (960만 원）
              </p>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
