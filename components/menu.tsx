"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { NavList } from "@/data/nav-list";
import { usePathname } from "next/navigation";

interface MyMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Menu: React.FC<MyMenuProps> = ({ isOpen, onClose, children }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetTrigger>
          <Image src={"/icons/menu.svg"} alt="" width={24} height={24} />
        </SheetTrigger>
        <SheetContent className="bg-[#010A18] border-0">
          <SheetHeader>
            <SheetTitle className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo_new_header.png"
                  alt="Logo"
                  width={36}
                  height={36}
                />
                <span className="text-[white]">GM4 Company</span>
              </div>
              <span></span>
            </SheetTitle>
            <SheetDescription>
              <div className="flex flex-col justify-start pt-[24px]">
                {NavList.map((nav) => (
                  <Link href={nav.href} key={nav.href} className="text-left">
                    <p
                      className={`inline-block font-semibold py-4 px-0`}
                      style={{
                        color: pathname === nav.href ? "#0744E6" : "white",
                      }}
                    >
                      {nav.content}
                    </p>
                  </Link>
                ))}
                <div
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="py-3 px-0 flex justify-between items-center cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/icons/korea.svg"
                      alt="Korea"
                      width={28}
                      height={28}
                    />
                    <span className="text-base text-white font-semibold">
                      한국
                    </span>
                  </div>
                  {openDropdown ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.0303 5.78033C10.7374 6.07322 10.2626 6.07322 9.9697 5.78033L6 1.8107L2.03033 5.78033C1.73744 6.07322 1.26256 6.07322 0.969668 5.78033C0.676778 5.48744 0.676778 5.01256 0.969668 4.7197L5.4697 0.219703C5.7626 -0.0731973 6.2374 -0.0731973 6.5303 0.219703L11.0303 4.7197C11.3232 5.01256 11.3232 5.48744 11.0303 5.78033Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.969702 0.219667C1.2626 -0.0732229 1.7374 -0.0732229 2.0303 0.219667L6 4.1893L9.96967 0.219667C10.2626 -0.0732225 10.7374 -0.0732225 11.0303 0.219667C11.3232 0.512558 11.3232 0.987437 11.0303 1.2803L6.5303 5.7803C6.2374 6.0732 5.7626 6.0732 5.4697 5.7803L0.969702 1.2803C0.676802 0.987437 0.676802 0.512557 0.969702 0.219667Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                {openDropdown && (
                  <div
                    className="mt-2 p-4 rounded-lg border border-[#4e5054]"
                    style={{
                      background:
                        "radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
                    }}
                  >
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/icons/korea.svg"
                        alt="Korea"
                        width={28}
                        height={28}
                      />
                      <span className="text-base text-white font-semibold mr-auto">
                        한국
                      </span>
                      <Image
                        src="/icons/Check.svg"
                        alt="Check"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                      <Image
                        src="/icons/us.svg"
                        alt="US"
                        width={28}
                        height={28}
                      />
                      <span className="text-base text-white font-semibold">
                        미국
                      </span>
                    </div>
                    <div className="flex gap-2 items-center mt-4">
                      <Image
                        src="/icons/vn.svg"
                        alt="VN"
                        width={28}
                        height={28}
                      />
                      <span className="text-base text-white font-semibold">
                        베트남
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Menu;
