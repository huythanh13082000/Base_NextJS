import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SiteFooter = () => {
  return (
    <div className="w-full px-24 pt-2 max-xl:px-20 flex gap-[173px] max-md:flex-col max-md:gap-10">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11">
            <AvatarImage src="/images/logo_new_header.png" alt="Logo" />
            <AvatarFallback>GM4</AvatarFallback>
          </Avatar>
          <span className="text-[22px] leading-[120%]">GM4 Company</span>
        </div>
        <p className="mb-2">린스타트업 전문 아웃소싱 개발회사</p>
        <Button className="max-w-[160px] py-2">Start building</Button>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-[14px] text-span font-medium">
        <p className="mb-2 font-bold text-[#E8E7EE]">회사정보</p>
        <p>회사명: 지엠포컴퍼니 주식회사 | 대표 이승우</p>
        <p>사업자등록번호: 491-87-02258</p>
        <div className="flex gap-2">
          <Image src="" alt="" width={20} height={20} />
          <p>서울특별시 강남구 선릉로 704 10층 652호</p>
        </div>
        <div className="flex gap-2">
          <Image src="" alt="" width={20} height={20} />
          <p>0503-5692-5001</p>
        </div>
        <div className="flex gap-2">
          <Image src="" alt="" width={20} height={20} />
          <p>gm4-korea@greenapps.kr</p>
        </div>
      </div>
      <div className="flex flex-1 gap-[173px]">
        <div className="flex flex-col gap-4 text-[14px] text-span font-medium">
          <p className="mb-2 font-bold text-[#E8E7EE]">메뉴</p>
          <p>안식처</p>
          <p>회사소개</p>
          <p>포트폴리오</p>
          <p>견적계산</p>
          <p>문의</p>
        </div>
        <div className="flex flex-col gap-4 text-[14px] text-span font-medium">
          <p className="mb-2 font-bold text-[#E8E7EE]">서비스 정책</p>
          <p>이용약관</p>
          <p>개인정보보호정책</p>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
