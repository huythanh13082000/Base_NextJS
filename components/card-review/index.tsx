import Image from 'next/image'
import React from 'react'

const CardReview = () => {
  return (
    <div className='xl:p-6 p-3 bg-white xl:rounded-xl rounded-lg flex xl:gap-6 gap-3'>
      <Image
        src={
          'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
        alt=''
        width={111}
        height={111}
        className='object-cover rounded-full xl:w-[111px] xl:h-[111px] w-11 h-11'
      />
      <div className='text-black'>
        <p className='xl:max-w-[520px] max-w-[263px] xl:text-[21px] text-[#161C2D]'>
          “웨딩토크 덕분에 평생의 짝을 만날 수 있었어요. 오늘의 인연을 보다가
          저와 취미와 성향이 비슷하시고 웃는 모습이 아름다운 여성분을 찾게
          됐어요.“
        </p>
        <p className='opacity-70 xl:mt-4 mt-3 xl:text-base text-sm'>신하*</p>
      </div>
    </div>
  )
}

export default CardReview
