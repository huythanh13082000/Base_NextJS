import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Types } from "@/types/Types";

interface SelectCustomProps {
  types: Types[];
  onChange: (value: string) => void;
  type: string;
}
function SelectCustom({ type, types, onChange }: SelectCustomProps) {
  return (
    <Select onValueChange={onChange} value={type}>
      <SelectTrigger className="w-full bg-[#010A18] border-[#1e2736] border-[1px] focus:border-[#1e2736]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-[#010A18] text-[white]">
        <SelectGroup>
          {types.map((t, key) => (
            <SelectItem key={key} value={t.name}>
              {t.name}
            </SelectItem>
          ))}
          {/* <SelectLabel>Fruits</SelectLabel> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default React.memo(SelectCustom);
