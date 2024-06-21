'use client'
import {APP_STORE_DOWNLOAD, GOOGLE_PLAY_DOWNLOAD} from '@/constants'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import CopyrightBanner from './copyright-banner'

const SiteFooter = () => {
  const router = useRouter()
  return (
    <section className='bg-[#FFF]'>
      <div className='relative h-[400px] w-full lg:px-[80px] px-4 xl:px-24'>
        <br />
        <br />
        <div className='relative w-full flex max-md:flex-col max-md:gap-10'>
          <div className='flex flex-1 flex-col gap-2 text-[17px] text-[#161C2D] font-medium'>
            <p className='mb-2 text-[15px] text-span'>Company</p>
            <p>지엠포컴퍼니 주식회사</p>
            <p>대표이사 : 이승우</p>
            <div className='flex gap-2 items-center hover:text-[#1A55EF] group'>
              사업자등록번호 : 491-87-02258
            </div>
            <div className='flex gap-2 items-center hover:text-[#1A55EF] group'>
              주소 : 서울특별시 강남구 선릉로 664 건설빌딩 205-1호
            </div>
            <div className='flex gap-2 items-center hover:text-[#1A55EF] group'>
              대표메일 : GM4-Korea@greenapps.kr
            </div>
          </div>
          <div className='flex flex-1 gap-20 lg:gap-0 lg:justify-end items-center'>
            <div className='flex flex-col gap-4 text-[15px] text-[#161C2D] font-medium'>
              <p className='mb-2 text-[#161C2D] text-[15px]'>
                Download Our App
              </p>
              <a
                href={APP_STORE_DOWNLOAD}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={'/images/AppStore.png'}
                  alt=''
                  width={189}
                  height={60}
                />
              </a>
              <a
                href={GOOGLE_PLAY_DOWNLOAD}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src={'/images/PlayStore.png'}
                  alt=''
                  width={189}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
        <div className='xl:my-10 my-4  border-t-[1px]'></div>
        <CopyrightBanner />
      </div>
    </section>
  )
}

export default SiteFooter
