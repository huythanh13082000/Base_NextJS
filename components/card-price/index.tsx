import React from 'react'

const CardPrice = (props: {
  title: string
  price: string
  quantity: string
  description: string[]
  buttonName: string
  styleCard?: React.CSSProperties
  styleButton?: React.CSSProperties
}) => {
  return (
    <div style={props.styleCard} className='rounded-lg p-6 xl:w-80 w-[343px] border-[#E7E9ED] border-[1px]'>
      <div className='text-center'>
        <h2 className='xl:text-sm text-[13px] font-semibold text-red-500'>
          {props.title}
        </h2>
        <p className='font-bold text-gray-900 xl:mt-11 mt-2 mb-8 xl:text-[65px] text-xl'>
          ${props.price}
          <span className='xl:text-[17px] text-base font-normal text-gray-500'>
            /{props.quantity}
          </span>
        </p>
      </div>
      <div className='mt-4 space-y-4 xl:text-[19px] flex flex-col xl:gap-3'>
        {props.description.map((item) => {
          return (
            <>
              <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
              <p className='text-center text-gray-700'>{item}</p>
            </>
          )
        })}
        {/* <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>1회 만남 비용 지불</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>수동 관리, 전화상담 및 방문</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>이성을 본인이 선택 불가</p>
        <div className='w-full border-t-[#E7E9ED] border-[1px]'></div>
        <p className='text-center text-gray-700'>낮은 성사율</p> */}
      </div>
      <div className='mt-6 text-center'>
        <button style={props.styleButton} className='bg-gray-900 text-white py-2 rounded-lg font-semibold xl:h-[59px] h-[52px] xl:text-[17px] xl:w-[219px] w-[200px]'>
          {props.buttonName}
        </button>
      </div>
    </div>
  )
}

export default CardPrice
