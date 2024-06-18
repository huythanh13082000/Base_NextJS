import React from 'react'

const CardPrice = () => {
  return (
    <div className='rounded-lg p-6 w-80 border-[#E7E9ED] border-[1px]'>
      <div className='text-center'>
        <h2 className='text-sm font-semibold text-red-500'>STARTER</h2>
        <p className='font-bold text-gray-900 mt-11 mb-8 text-[65px]'>
          $500
          <span className='text-[17px] font-normal text-gray-500'>/1회</span>
        </p>
      </div>
      <div className='mt-4 space-y-4 text-[19px] flex flex-col gap-3'>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>1회 만남 비용 지불</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>수동 관리, 전화상담 및 방문</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>이성을 본인이 선택 불가</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>낮은 성사율</p>
      </div>
      <div className='mt-6 text-center'>
        <button className='bg-gray-900 text-white py-2 rounded-lg font-semibold h-[59px] text-[17px] w-[219px]'>
          결혼 중개 회사
        </button>
      </div>
    </div>
  )
}

export default CardPrice
