'use client'
import CardPortfolio from '@/components/card-portfolio/card-portfolio'
import DialogCustom from '@/components/dialog-custom'
import {useState} from 'react'

const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}

const Portfolio = () => {
  const [data, setData] = useState()
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full'>
      <div
        className='text-center  leading-[80px] p-[60px]'
        style={containerStyle}
      >
        <h1 className='text-[70px] font-bold leading-[80px]'>Portfolio</h1>
        <p className='text-[20px]'>We reveal representative success stories.</p>
      </div>
      <div className='flex flex-wrap -mx-4 mb-[3rem]'>
        <CardPortfolio onClick={() => setOpen(true)} />
        <CardPortfolio onClick={() => setOpen(true)} />
        <CardPortfolio onClick={() => setOpen(true)} />
        <CardPortfolio onClick={() => setOpen(true)} />
      </div>
      <DialogCustom onClose={() => setOpen(false)} isOpen={open} />
    </div>
  )
}

export default Portfolio
