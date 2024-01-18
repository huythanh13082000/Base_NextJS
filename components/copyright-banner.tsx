import React from "react";
import Image from "next/image";

const CopyrightBanner = () => {
  return (
    <div className="w-full px-24 py-10 max-xl:px-20 flex justify-between text-[14px] text-span max-md:flex-col max-md:gap-3">
      <p>Copyright© 2022 GREENAPP. All rights reserved</p>
      <div className="flex gap-4 cursor-pointer">
        <Image src="/icons/instagram.svg" alt="" width={24} height={24} />
        <Image src="/icons/youtube.svg" alt="" width={24} height={24} />
        <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
        <Image src="/icons/twitter.svg" alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default CopyrightBanner;
