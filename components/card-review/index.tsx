import Image from 'next/image'
import React from 'react'

const CardReview = () => {
  return (
    <div className='p-6 bg-white rounded-xl flex gap-6'>
      <Image
        src={
          'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
        alt=''
        width={111}
        height={111}
        className='object-cover rounded-full w-[111px] h-[111px]'
      />
      <div className='text-black'>
        <p className='max-w-[520px] text-[21px] text-[#161C2D]'>
          “웨딩토크 덕분에 평생의 짝을 만날 수 있었어요. 오늘의 인연을 보다가
          저와 취미와 성향이 비슷하시고 웃는 모습이 아름다운 여성분을 찾게
          됐어요.“
        </p>
        <p className='opacity-70 mt-4'>신하*</p>
      </div>
    </div>
  )
}

export default CardReview
