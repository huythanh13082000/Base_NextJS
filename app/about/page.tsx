import {Button} from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
const containerStyle = {
  background:
    'radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618',
}
const About = () => {
  return (
    <div className='w-full'>
      <div
        className='text-center lg:leading-[60px] p-[30px] leading-[30px] lg:mb-[40px]'
        style={containerStyle}
      >
        <h1 className='lg:text-[70px] text-[32px] font-bold lg:leading-[80px] leading-[30px]'>
          About Us
        </h1>
        <p className='text-[14px] lg:text-[18px]'>
          Learn more about us - download our PDF now!
        </p>
        <a href=''>
          <Button>Download PDF</Button>
        </a>
      </div>
      <div>
        <Image
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZ627sbpjeUM1dgVhJQxeNQvkV9ZuAuAedLUSauVu9A&s'
          }
          alt=''
          width={1000}
          height={500}
          className='w-[100%] object-cover'
        />
      </div>
    </div>
  )
}

export default About
