import React from 'react'
import Image from 'next/image'

const CopyrightBanner = () => {
  return (
    <div className='w-full py-10 xl:p-0 lg:px-[80px] px-4 flex justify-between items-center text-[15px] max-md:flex-col max-md:gap-3'>
      <p className='text-black flex items-center gap-2 whitespace-nowrap text-[12px]'>
        © 2024 Copyright, All Right Reserved, Made by{' '}
        <span className='font-bold'>HealerGo</span>{' '}
        <Image src={'/images/Path.png'} alt='' width={13} height={15} />
      </p>
      <div className='flex gap-4 cursor-pointer'>
        <Image src='/images/logo-twitter.png' alt='' width={24} height={24} />
        <Image src='/images/logo-facebook.png' alt='' width={24} height={24} />
        <Image src='/images/logo-instagram.png' alt='' width={24} height={24} />
        <Image src='/images/logo-linkedin.png' alt='' width={24} height={24} />
      </div>
    </div>
  )
}

export default CopyrightBanner
