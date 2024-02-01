import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "./ui/button";
import optionStore from "@/store/option";
import { formatCurrency } from "@/lib/formatCurrency";

interface MyDialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  navigate: () => void;
  children?: React.ReactNode;
}

const DialogEstimate: React.FC<MyDialogProps> = ({
  isOpen,
  onClose,
  children,
  navigate,
}) => {
  const toDay = new Date();
  const { getTotalPrice, options } = optionStore((state) => state);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#010A18] border-[#1e2736] border-[1px]">
        <DialogHeader>
          <DialogDescription className="flex flex-col gap-6">
            <div className="text-[18px] text-[white] font-bold text-start">
              예상 견적서
            </div>
            <div className="max-w-[calc(100vw-50px)] overflow-auto py-[12px] box-border">
              <div className="flex flex-col gap-6 w-full">
                <div className="w-full rounded-xl border-[1px] border-solid border-[#1e2736]">
                  <div className="w-full bg-[#0c1122] flex rounded-t-xl">
                    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[white]">
                      날짜
                    </div>
                    {/*<div className="w-1/2 h-11 flex items-center font-semibold text-[white]">*/}
                    {/*  수신*/}
                    {/*</div>*/}
                    <div className="w-1/2 h-11 flex items-center  font-semibold text-[white]">
                      유효기간
                    </div>
                  </div>
                  <div className="w-full  flex rounded-t-xl">
                    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[#98A1B6]">
                      {toDay.toISOString().split("T")[0]}
                    </div>
                    {/*<div className="w-1/2 h-11 flex items-center  font-semibold text-[#98A1B6]">*/}
                    {/*  귀하*/}
                    {/*  <span className="">Seungwoo Lee</span>*/}
                    {/*</div>*/}
                    <div className="w-1/2 h-11 flex items-center  font-semibold text-[#98A1B6] ">
                      견적일로부터 30일
                    </div>
                  </div>
                </div>

                {/*<div className="w-full rounded-xl border-[1px] border-solid border-[#1e2736]">*/}
                {/*  <div className="w-full bg-[#0c1122] flex rounded-t-xl">*/}
                {/*    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[white]">*/}
                {/*      사업자번호*/}
                {/*    </div>*/}
                {/*    <div className="w-1/2 h-11 flex items-center font-semibold text-[white]">*/}
                {/*      상호*/}
                {/*    </div>*/}
                {/*    <div className="w-1/2 h-11 flex items-center  font-semibold text-[white]">*/}
                {/*      날인*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="w-full flex rounded-t-xl">*/}
                {/*    <div className="w-1/2 h-11 flex items-center  p-3 font-semibold text-[#98A1B6]">*/}
                {/*      491-87-02258*/}
                {/*    </div>*/}
                {/*    <div className="w-1/2 h-11 flex items-center font-semibold text-[#98A1B6]">*/}
                {/*      지엠포컴퍼니 주식회사*/}
                {/*      /!*<span className="">Seungwoo Lee</span>*!/*/}
                {/*    </div>*/}
                {/*    <div className="w-1/2 h-11 flex items-center font-semibold text-[#98A1B6] "></div>*/}
                {/*  </div>*/}
                {/*</div>*/}

                <div className="w-full rounded-xl border-[1px] border-solid border-[#1e2736]">
                  <div className="w-full bg-[#0c1122] flex rounded-t-xl">
                    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[white]">
                      기능명
                    </div>
                    {/*<div className="w-1/2 h-11 flex items-center font-semibold text-[white]">*/}
                    {/*  설명*/}
                    {/*</div>*/}
                    <div className="w-1/2 h-11 flex items-center font-semibold text-[white]">
                      구현 비용
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-[200px]">
                    {options &&
                      options.map((option, index) => (
                        <div key={index} className="w-full  flex rounded-t-xl">
                          <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[#98A1B6]">
                            {option.nameOption}
                          </div>
                          {/*<div className="w-1/2 h-11 flex items-center font-semibold text-[#98A1B6]">*/}
                          {/*  {""}*/}
                          {/*</div>*/}
                          <div className="w-1/2 h-11 flex items-center  font-semibold text-[#98A1B6] ">
                            {formatCurrency(option.price)} 만원
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="w-full rounded-xl border-[1px] border-solid border-[#1e2736]">
                  <div className="w-full bg-[#0c1122] flex rounded-t-xl">
                    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[white]">
                      개발기간
                    </div>
                    <div className="w-1/2 h-11 flex items-center font-semibold text-[white]">
                      부가세 별도
                    </div>
                  </div>
                  <div className="w-full  flex rounded-t-xl">
                    <div className="w-1/2 h-11 flex items-center p-3 font-semibold text-[white]">
                      <span className="bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent text-[18px]">
                        7
                      </span>
                      &nbsp;
                      <span className="text-[14px] font-medium">개월</span>
                    </div>
                    <div className="w-1/2 h-11 flex items-center  font-semibold text-[white] ">
                      <span className="bg-gradient-to-r from-[#396FFD] to-[#0744E6] bg-clip-text text-transparent text-[18px]">
                        {formatCurrency(getTotalPrice())}
                      </span>
                      &nbsp;
                      <span className="text-[14px] font-medium">만원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-start">
                * 상세 견적을 산줄하기 전의 대략적인 예상 견적입니다
              </p>
              <p className="text-start">
                * 상세 기획이 완성되면 저희가 꼼꼼하게 검토하여 세부적인 항목의
                견적을 다시 산출하게 됩니다
              </p>
              <p className="text-start">
                * 저희는 언어는 SVELTE (자바스크립)，DB는 SUPABASE (Postgres),
                서버는 VERCEL을 사용합니다{" "}
              </p>
            </div>
            <Button onClick={navigate} className="max-w-full">
              제출하기
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEstimate;
