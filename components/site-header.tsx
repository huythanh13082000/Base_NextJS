'use client'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useCallback, useState} from 'react'

const SiteHeader = () => {
  const router = useRouter()
  const handleNavigate = () => router.push('/')
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => {
    setIsOpen((x) => !x)
  }, [])
  const setTrue = useCallback(() => {
    setIsOpen(true)
  }, [])

  const setFalse = useCallback(() => {
    setIsOpen(false)
  }, [])
  return (
    <div className='sticky top-0 z-40 backdrop-blur-md bg-orange-500'>
      <div className='flex justify-between items-center w-full px-4 py-3 xl:p-6'>
        <div className='font-bold text-xl xl:text-2xl text-white'>
          <p>Wedding Talk</p>
        </div>
        <div className='flex gap-4 items-center'>
          <Image
            src={'/images/OpenMusic.png'}
            alt=''
            width={52}
            height={52}
            className='w-8 h-8 xl:w-[52px] xl:h-[52px]'
          />
          <div className='flex gap-2 xl:px-4 xl:py-3 xl:bg-white xl:rounded-full'>
            <Image src={'/images/Korean.png'} alt='' width={24} height={24} />{' '}
            <span className='text-lg flex-1 hidden xl:inline-block'>Korean (KR)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader
