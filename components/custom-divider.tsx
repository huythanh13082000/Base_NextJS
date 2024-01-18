import React from "react";
import { cn } from "@/lib/utils";

type CustomDividerProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className"
>;
const CustomDivider = ({ className }: CustomDividerProps) => {
  return (
    <div
      className={cn(
        "w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.16]",
        className,
      )}
    ></div>
  );
};

export default CustomDivider;
