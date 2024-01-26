import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

interface LanguageDropdownProps {
  children: ReactNode;
  onChange: (e: boolean) => void;
}
const LanguageDropdown = ({ children, onChange }: LanguageDropdownProps) => {
  return (
    <DropdownMenu onOpenChange={onChange}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 -translate-y-4 bg-primary rounded-lg border-[#141d2c]">
        <DropdownMenuGroup className="text-[#F9F8FC] text-base font-medium">
          <DropdownMenuItem className="mb-4 focus:bg-primary focus:opacity-50 focus:text-white cursor-pointer">
            <div className="relative w-6 h-6 xl:w-7 xl:h-8 mr-2">
              <Image src="/icons/korea.svg" alt="Korea" fill />
            </div>
            <span className="text-base font-semibold mr-[50px]">한국</span>
            <Image src="/icons/Check.svg" alt="Check" width={20} height={20} />
          </DropdownMenuItem>
          <DropdownMenuItem className="mb-4 focus:bg-primary focus:opacity-50 focus:text-white cursor-pointer">
            <div className="relative w-6 h-6 xl:w-7 xl:h-8 mr-2">
              <Image src="/icons/us.svg" alt="US" fill />
            </div>
            <span className="text-base font-semibold">미국</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-primary focus:opacity-50 focus:text-white cursor-pointer">
            <div className="relative w-6 h-6 xl:w-7 xl:h-8 mr-2">
              <Image src="/icons/vn.svg" alt="VN" fill />
            </div>
            <span className="text-base font-semibold">베트남</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
