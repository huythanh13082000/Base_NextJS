import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface MyDialogProps {
  data?: PortfolioType;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const DialogCustom: React.FC<MyDialogProps> = ({
  isOpen,
  onClose,
  children,
  data,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#010A18] border-[#1e2736] border-[1px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogDescription>
            <div className="lg:flex lg:gap-6 lg:align-top ">
              {data && data.logo && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/${data?.logo}`}
                  alt=""
                  width={60}
                  height={60}
                  className="h-[60px] rounded-[10px] mb-4"
                />
              )}
              <div>
                <p className="text-[18px] font-bold text-[white] text-start">
                  {data?.title}
                </p>
                <p className="text-[15px] text-[white] mt-[8px] mb-[16px] text-start">
                  {data?.programming_language}
                </p>
                <p className="text-start">{data?.description}</p>
              </div>
            </div>
            <div className="min-h-[650px]">
              {data?.images &&
                Array.isArray(data.images) &&
                data.images.map((image, index) => (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${image}`}
                    alt={image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-full object-contain rounded-xl mt-[32px]"
                  />
                ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCustom;
