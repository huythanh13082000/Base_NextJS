'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import {AvatarImage} from './ui/avatar'
import Link from 'next/link'
import {NavList} from '@/data/nav-list'
import {usePathname} from 'next/navigation'

interface MyMenuProps {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Menu: React.FC<MyMenuProps> = ({isOpen, onClose, children}) => {
  const pathname = usePathname()
  return (
    <div className='sm:hidden'>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetTrigger>
          <Image src={'/icons/menu.svg'} alt='' width={24} height={24} />
        </SheetTrigger>
        <SheetContent className='bg-[#010A18] border-0'>
          <SheetHeader>
            <SheetTitle className='flex justify-between'>
              <div className='flex items-center gap-2'>
                <Image
                  src='/images/logo_new_header.png'
                  alt='Logo'
                  width={36}
                  height={36}
                />
                <span className='text-[white]'>GM4 Company</span>
              </div>
              <span></span>
            </SheetTitle>
            <SheetDescription>
              <div className='flex flex-col justify-start pt-[24px]'>
                {NavList.map((nav) => (
                  <Link href={nav.href} key={nav.href} className='text-left'>
                    <p
                      className={`inline-block font-semibold py-4 px-0`}
                      style={{
                        color: pathname === nav.href ? '#0744E6' : 'white',
                      }}
                    >
                      {nav.content}
                    </p>
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Menu
