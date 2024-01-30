"use client";
import React, { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import useLinearCard from "@/lib/linear-card";
import { motion, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Options } from "@/types/Options";
import { formatCurrency } from "@/lib/formatCurrency";
import optionStore from "@/store/option";

interface CardEstimateCalculationProps {
  option: Options;
}
const CardEstimateCalculation = ({ option }: CardEstimateCalculationProps) => {
  const { options, addOption, deleteOption } = optionStore((state) => state);
  const initialState = options?.find((item) => item.id === option.id);
  const {
    handleMouseMove,
    handleMouseLeave,
    rotateY,
    rotateX,
    cursorY,
    cursorX,
  } = useLinearCard();
  const handleCheckOption = () => {
    if (!initialState) {
      addOption(option);
    } else {
      deleteOption(option);
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onClick={handleCheckOption}
      className={cn(
        "lg:w-[294px] border-[#1e2736] border-[1px] rounded-[16px] p-6 w-full md:w-[294px] group custom-cursor",
        !!initialState &&
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
        checked={!!initialState}
        className="w-[22px] h-[22px] border-[#616A82] border-solid rounded-md box-border p-[2px] data-[state=checked]:bg-gradient-to-r from-[#396FFD] to-[#0744E6] data-[state=checked]:border-0 data-[state=checked]:text-[black]"
      />
      <div className="flex flex-col mt-4 mb-10">
        <span>{option.nameOption}</span>
        <span>
          <span className="bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent font-semibold text-[20px]">
            {formatCurrency(option.price)}
          </span>
          &#160;만원
        </span>
      </div>
      {/*<div className="text-[#98A1B6] text-[14px] font-normal">*/}
      {/*  {option.nameOption}*/}
      {/*</div>*/}
    </motion.div>
  );
};
export default CardEstimateCalculation;
