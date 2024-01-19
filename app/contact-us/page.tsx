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
        <Image
          src="images/bg_lightning.svg"
          alt=""
          fill
          objectFit="cover"
          className="z-0"
        />
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
        <div className="rounded-2xl bg-gradient-to-b from-transparent via-[#090A2A] to-[#040C18] via-[115.72%] px-10 pt-8 pb-6">
          <FormContact />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
