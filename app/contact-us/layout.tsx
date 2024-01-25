import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "GM4 기술 솔루션즈에 대한 궁금한 점이나 협력에 대한 문의가 있으신가요? 언제든지 당사와 연락 주시기 바랍니다. 우리는 고객과의 소통을 소중히 여기며, 빠르고 친절한 서비스를 제공합니다." +
    "연락처:" +
    "전화: 0503-5692-5001" +
    "이메일: gm4-korea@greenapps.kr" +
    "우리는 기술 솔루션 분야에서의 전문성과 세심한 서비스로 항상 고객 여러분의 요구에 부응하겠습니다. 문의하시면 빠르게 답변 드리겠습니다. 감사합니다.",
  alternates: {
    canonical: `/contact-us`,
  },
};
export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 pt-12 pb-[60px] lg:px-11 lg:py-20 xl:px-[252px] xl:pt-[60px] xl:pb-[90px]">
      {children}
    </div>
  );
}
