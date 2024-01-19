import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import {Button} from './ui/button'

interface MyDialogProps {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const DialogEstimate: React.FC<MyDialogProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-[#010A18] border-[#1e2736] border-[1px] overflow-auto'>
        <DialogHeader>
          <DialogDescription className='flex flex-col gap-6'>
            <div className='text-[18px] text-[white] font-bold text-start'>
              예상 견적서
            </div>
            <div>
              <div className='flex flex-col gap-6 ư'>
                <div className='w-full rounded-xl border-[1px] border-solid border-[#1e2736]'>
                  <div className='w-full bg-[#0c1122] flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[white]'>
                      날짜
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[white]'>
                      수신
                    </div>
                    <div className='w-1/3 h-11 flex items-center  font-semibold text-[white]'>
                      유효기간
                    </div>
                  </div>
                  <div className='w-full  flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[#98A1B6]'>
                      2023-12-24
                    </div>
                    <div className='w-1/3 h-11 flex items-center  font-semibold text-[#98A1B6]'>
                      귀하
                      <span className=''>Seungwoo Lee</span>
                    </div>
                    <div className='w-1/3 h-11 flex items-center  font-semibold text-[#98A1B6] '>
                      견적일로부터 30일
                    </div>
                  </div>
                </div>

                <div className='w-full rounded-xl border-[1px] border-solid border-[#1e2736]'>
                  <div className='w-full bg-[#0c1122] flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[white]'>
                      사업자번호
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[white]'>
                      상호
                    </div>
                    <div className='w-1/3 h-11 flex items-center  font-semibold text-[white]'>
                      날인
                    </div>
                  </div>
                  <div className='w-full flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[#98A1B6]'>
                      362-81-00644
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[#98A1B6]'>
                      (주)불면증
                      <span className=''>Seungwoo Lee</span>
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[#98A1B6] '></div>
                  </div>
                </div>

                <div className='w-full rounded-xl border-[1px] border-solid border-[#1e2736]'>
                  <div className='w-full bg-[#0c1122] flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[white]'>
                      기능명
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[white]'>
                      설명
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[white]'>
                      구현 비용
                    </div>
                  </div>
                  <div className='w-full  flex rounded-t-xl'>
                    <div className='w-1/3 h-11 flex items-center p-3 font-semibold text-[#98A1B6]'>
                      60 페이지 이하
                    </div>
                    <div className='w-1/3 h-11 flex items-center font-semibold text-[#98A1B6]'>
                      60 페이지의 프론트엔드
                    </div>
                    <div className='w-1/3 h-11 flex items-center  font-semibold text-[#98A1B6] '>
                      2400만 원
                    </div>
                  </div>
                </div>
                <div className='w-full rounded-xl border-[1px] border-solid border-[#1e2736]'>
                  <div className='w-full bg-[#0c1122] flex rounded-t-xl'>
                    <div className='w-2/6 h-11 flex items-center p-3 font-semibold text-[white]'>
                      개발기간
                    </div>
                    <div className='w-4/6 h-11 flex items-center font-semibold text-[white]'>
                      탄력 가격(VAT)
                    </div>
                  </div>
                  <div className='w-full  flex rounded-t-xl'>
                    <div className='w-2/6 h-11 flex items-center p-3 font-semibold text-[white]'>
                      <span className='bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent text-[18px]'>
                        7
                      </span>
                      &nbsp;
                      <span className='text-[14px] font-medium'>개월</span>
                    </div>
                    <div className='w-4/6 h-11 flex items-center  font-semibold text-[white] '>
                      <span className='bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent text-[18px]'>
                        9600
                      </span>
                      &nbsp;
                      <span className='text-[14px] font-medium'>
                        만 원 (960만 원）
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-start'>
                * 상세 견적을 산줄하기 전의 대략적인 예상 견적입니다
              </p>
              <p className='text-start'>
                * 상세 기획이 완성되면 저희가 꼼꼼하게 검토하여 세부적인 항목의
                견적을 다시 산출하게 됩니다
              </p>
              <p className='text-start'>
                * 저희는 언어는 SVELTE (자바스크립)，DB는 SUPABASE (Postgres),
                서버는 VERCEL을 사용합니다{' '}
              </p>
            </div>
            <Button className='max-w-full'>제출하기</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogEstimate
