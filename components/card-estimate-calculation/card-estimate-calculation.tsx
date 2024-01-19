import React from 'react'
import {Checkbox} from '../ui/checkbox'

const CardEstimateCalculation = () => {
  return (
    <div className='lg:w-[294px] border-[#1e2736] border-[1px] rounded-[16px] p-[24px] w-full md:w-[294px]'>
      <Checkbox className='w-[22px] h-[22px] border-[#616A82] border-solid rounded-md box-border p-[2px] data-[state=checked]:bg-gradient-to-r from-[#396FFD] to-[#0744E6] data-[state=checked]:border-0 data-[state=checked]:text-[black]' />
      <div className='flex justify-between items-center'>
        <span className='mt-4 mb-2'>모바일웹</span>
        <span>
          <span className='bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent font-semibold text-[20px]'>
            0
          </span>
          &#160; 만 뭔
        </span>
      </div>
      <div className='text-[#98A1B6] text-[14px] font-normal'>
        자바스크립트 모바일 웹사이트. PC에서도 이용 가능{' '}
      </div>
    </div>
  )
}
export default CardEstimateCalculation
