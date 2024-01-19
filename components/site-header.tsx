import React from "react";
import MainNav from "@/components/main-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CustomDivider from "@/components/custom-divider";
import Menu from "./menu";
import { usePathname } from "next/navigation";

const SiteHeader = () => {
  return (
    <div className="sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center justify-between w-full pt-2 lg:px-[80px] px-4 xl:px-24">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11">
            <AvatarImage src="/images/logo_new_header.png" alt="Logo" />
            <AvatarFallback>GM4</AvatarFallback>
          </Avatar>
          <span className="text-[22px] leading-[120%]">GM4 Company</span>
        </div>
        <MainNav />
        <Menu />
      </div>
      <CustomDivider />
    </div>
  );
};

export default SiteHeader;
