"use client";
import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import useLinearCard from "@/lib/linear-card";
import { motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

const CardEstimateCalculation = () => {
  const [state, setState] = useState<"unchecked" | "checked">("unchecked");
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard();
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onClick={() =>
        setState((pre) => {
          if (pre === "checked") {
            return "unchecked";
          }
          return "checked";
        })
      }
      className={cn(
        "lg:w-[294px] border-[#1e2736] border-[1px] rounded-[16px] p-6 w-full md:w-[294px] group custom-cursor",
        state === "checked" &&
          "bg-gradient-to-b from-[#A3ACC233] from-0% to-[#A3ACC20B] to-100%",
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 rounded-xl transition duration-300 group-hover:opacity-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${cursorX}px ${cursorY}px,
              #346BFA 0%,
              rgba(0, 0, 0, 0),
              transparent 70%
            )
          `,
        }}
      />
      <Checkbox
        data-state={state}
        checked={state === "checked"}
        className="w-[22px] h-[22px] border-[#616A82] border-solid rounded-md box-border p-[2px] data-[state=checked]:bg-gradient-to-r from-[#396FFD] to-[#0744E6] data-[state=checked]:border-0 data-[state=checked]:text-[black]"
      />
      <div className="flex justify-between items-center">
        <span className="mt-4 mb-2">모바일웹</span>
        <span>
          <span className="bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent font-semibold text-[20px]">
            0
          </span>
          &#160; 만 뭔
        </span>
      </div>
      <div className="text-[#98A1B6] text-[14px] font-normal">
        자바스크립트 모바일 웹사이트. PC에서도 이용 가능{" "}
      </div>
    </motion.div>
  );
};
export default CardEstimateCalculation;
