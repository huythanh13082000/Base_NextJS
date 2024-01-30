"use client";
import React, { memo } from "react";
import CardEstimateCalculation from "@/components/card-estimate-calculation/card-estimate-calculation";
import { Tags } from "@/types/Tags";
import useOption from "@/lib/use-option";
interface ListOptionsProps {
  tag: Tags;
  type: string;
}
const ListOptions = ({ tag, type }: ListOptionsProps) => {
  const { options } = useOption(type, tag.name);
  return (
    <div>
      <label htmlFor="" className="mb-6 flex text-[20px] font-bold">
        {tag.name}
      </label>
      <div className="flex gap-6 flex-wrap">
        {options &&
          options.data.map((option, key) => (
            <CardEstimateCalculation option={option} key={key} />
          ))}
      </div>
    </div>
  );
};

export default memo(ListOptions);
