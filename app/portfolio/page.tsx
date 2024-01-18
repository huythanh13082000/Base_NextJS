import CardPortfolio from '@/components/card-portfolio/card-portfolio'
import React, {useEffect} from 'react'

const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}

const Portfolio = () => {
  return (
    <div className='w-full'>
      <div
        className='text-center mb-[3rem] leading-[80px]'
        style={containerStyle}
      >
        <h1 className='text-[70px] font-bold leading-[80px] '>Portfolio</h1>
        <p className='text-[20px]'>We reveal representative success stories.</p>
      </div>
      <div className='flex flex-wrap -mx-4 mb-[3rem]'>
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
      </div>
    </div>
  )
}

export default Portfolio
