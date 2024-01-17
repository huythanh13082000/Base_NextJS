import React from "react";
import MainNav from "@/components/main-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SiteHeader = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center justify-between w-full px-24 pt-2 max-xl:px-20">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11">
            <AvatarImage src="/images/logo_new_header.png" alt="Logo" />
            <AvatarFallback>GM4</AvatarFallback>
          </Avatar>
          <span className="text-[22px] leading-[120%]">GM4 Company</span>
        </div>
        <MainNav />
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.16]"></div>
    </div>
  );
};

export default SiteHeader;
