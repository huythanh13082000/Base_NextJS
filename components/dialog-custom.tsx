import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface MyDialogProps {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const DialogCustom: React.FC<MyDialogProps> = ({isOpen, onClose, children}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-[#010A18] border-[#1e2736] border-[1px]'>
        <DialogHeader>
          <DialogDescription>
            <div className='lg:flex lg:gap-6 lg:align-top '>
              <Image
                src={
                  'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg'
                }
                alt=''
                width={60}
                height={60}
                className='h-[60px] rounded-[10px]'
              />
              <div>
                <p className='text-[18px] font-bold text-[white]'>
                  A-BEE[아비] - 앱테크
                </p>
                <p className='text-[15px] text-[white] mt-[8px] mb-[16px]'>
                  Flutter, Node.Js
                </p>
                <p>
                  아비는 온 국민들에게 해택을 주기 위해서 만들어진 멀티 리워드
                  광고 플랫폼입니다 투자 시간 대비 낮은 해택으로 목말라있는
                  분들은 아비앱을 경험해보세요 벌광고가 여러분을 기다립니다
                </p>
              </div>
            </div>
            <Image
              src={
                'https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg'
              }
              alt=''
              width={1000}
              height={557}
              className='h-[557px] object-cover rounded-xl mt-[32px]'
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogCustom
