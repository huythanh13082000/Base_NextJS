"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavList } from "@/data/nav-list";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MainNav = () => {
  const pathname = usePathname();
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
    </div>
  );
};

export default MainNav;
