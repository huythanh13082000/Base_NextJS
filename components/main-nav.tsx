"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavList } from "@/data/nav-list";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LanguageDropdown from "@/components/language-dropdown";
import Image from "next/image";

const MainNav = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  return (
    <div className="hidden md:flex gap-9 max-xl:gap-7 h-full text-[#F9F8FC] text-[15px] max-xl:text-[14px] max-xl:leading-[22px]">
      {NavList.map((nav) => (
        <Link href={nav.href} key={nav.href}>
          <span className="inline-block font-semibold py-6 px-4">
            {nav.content}
          </span>
          {pathname == nav.href && (
            <motion.div
              layoutId="underline"
              transition={{ type: "spring", duration: 1 }}
              className="h-1 bg-gradient-to-t from-[#396FFD] to-[#0744E6] rounded-t-3xl inset-0 z-0 mix-blend-difference"
            ></motion.div>
          )}
        </Link>
      ))}
      <LanguageDropdown onChange={(e) => setOpenDropdown(e)}>
        <div className="flex items-center py-5 cursor-pointer gap-3">
          <div className="relative w-6 h-6 xl:w-7 xl:h-8">
            <Image src="/icons/korea.svg" alt="Korea" fill />
          </div>
          <span className="text-base font-semibold">한국</span>
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
      </LanguageDropdown>
    </div>
  );
};

export default MainNav;
