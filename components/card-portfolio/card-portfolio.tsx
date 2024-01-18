'use client'
import React from 'react'
import Image from 'next/image'

const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, rgba(102, 172, 255, 0.05) 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}

const CardPortfolio = (props: {data?: PortfolioType; onClick?: () => void}) => {
  return (
    <div
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-[16px] md:p-[12px] lg:p-[16px]'
      style={containerStyle}
      onClick={() => props.onClick && props.onClick()}
    >
      <div className='p-[32px] border-[#1e2736] border-[1px] rounded-[16px]'>
        <div className='relative'>
          <Image
            src={
              'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg'
            }
            alt=''
            objectFit='cover'
            layout='cover'
            width={60}
            height={60}
            className='lg:w-[60px] lg:h-[60px] md:w-[48px] md:h-[48px] w-[52px] h-[52px] rounded-xl'
          />
          <Image
            src={'/icons/star.svg'}
            alt=''
            width={10}
            height={10}
            className='top-0 absolute left-[-16px]'
          />
          <Image
            src={'/icons/star.svg'}
            alt=''
            width={9}
            height={9}
            className='top-[-8px] absolute left-[62px]'
          />
          <Image
            src={'/icons/star.svg'}
            alt=''
            width={8}
            height={8}
            className='bottom-[6px] absolute left-[66px]'
          />
          <Image
            src={'/icons/star.svg'}
            alt=''
            width={6}
            height={6}
            className='bottom-0 absolute left-[-10px]'
          />
        </div>
        <p className='text-[18px] font-bold mt-[24px] mb-[12px]'>
          A-BEE[아비] - 앱테크
        </p>
        <p className='text-[15px]'>Flutter, Node.Js</p>
        <p className='text-[#98A1B6] mt-[8px] mb-[12px]'>
          아비는 온 국민들에게 해택을 주기 위해서 만들어진 멀티 리워드 광고
          플랫폼입니다 투자 시간 대비 낮은 해택으로 목말라있는 분들은 아비앱을
          경험해보세요 벌광고가 여러분을 기다립니다
        </p>
        <button className='flex gap-[4px] bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text font-bold text-[14px]'>
          View Detail{' '}
          <Image src={'/icons/icon_right.svg'} alt='' width={24} height={24} />
        </button>
      </div>
    </div>
  )
}

export default CardPortfolio
