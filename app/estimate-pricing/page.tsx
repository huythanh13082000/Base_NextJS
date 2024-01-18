'use client'

import CardEstimateCalculation from '@/components/card-estimate-calculation/card-estimate-calculation'
import React, {useState} from 'react'

const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}

const EstimatePricing = () => {
  const [tab, setTab] = useState(0)
  return (
    <div className='w-full'>
      <div
        className='text-center lg:leading-[80px] p-[30px] leading-[30px]'
        style={containerStyle}
      >
        <h1 className='lg:text-[70px] text-[32px] font-bold lg:leading-[80px] leading-[30px]'>
          Estimate Calculation
        </h1>
        <p className='text-[14px] lg:text-[18px]'>
          프로젝트 착수시 상세 개발 견적을 받을 수 있습니다 담당 개발자가
          배정되어 빠르게 개 발이 진행됩니다
        </p>
      </div>
      <div className='flex gap-[72px] py-[60px]'>
        <div className='border-[#1e2736] border-[1px] rounded-[16px] w-[238px] py-[16px]'>
          <p
            className={`px-[32px] py-3 ${
              tab === 0 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => setTab(0)}
          >
            UI/UX 디자인
          </p>
          <p
            className={`px-[32px] py-3 ${
              tab === 1 ? 'bg-gradient-to-b from-[#396FFD] to-[#0744E6]' : ''
            }`}
            onClick={() => {
              console.log(8888)
              setTab(1)
            }}
          >
            APP 개발
          </p>
        </div>
        <div>
          <div>
            <label htmlFor=''>슬뎃놈</label>
            <CardEstimateCalculation />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstimatePricing
