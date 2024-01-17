import CardPortfolio from '@/components/card-portfolio/card-portfolio'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='w-full'>
      <div className='text-center mb-[3rem]'>
        <h1 className='text-[70px] font-bold leading-[80px] mb-[16px]'>
          Portfolio
        </h1>
        <p className='text-[20px]'>We reveal representative success stories.</p>
      </div>
      <div className='flex flex-wrap -mx-4'>
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
        <CardPortfolio />
      </div>
      {/* <div className='flex flex-wrap -mx-4'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8'>
          <div className='bg-blue-500 p-4 h-full'>Item 1</div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8'>
          <div className='bg-green-500 p-4 h-full'>Item 2</div>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-8'>
          <div className='bg-red-500 p-4 h-full'>Item 3</div>
        </div>
      </div> */}
    </div>
  )
}

export default Portfolio
