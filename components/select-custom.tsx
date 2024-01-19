import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectCustom() {
  return (
    <Select>
      <SelectTrigger className='w-full bg-[#010A18] border-[#1e2736] border-[1px] focus:border-[#1e2736]'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='bg-[#010A18] text-[white]'>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
