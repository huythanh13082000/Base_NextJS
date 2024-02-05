import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estimate Pricing",
  description:
    "지엠포컴퍼니 투명하고 합리적인 가격 산정으로 고객들의 프로젝트를 지원합니다. 우리의 비용 산정은 프로젝트의 규모, 요구 사항, 그리고 고객의 목표를 고려하여 맞춤형으로 제공됩니다." +
    "서비스 및 솔루션 비용:\n" +
    "우리는 다양한 기술 솔루션과 서비스에 대한 비용을 명확하게 제시합니다. 프로젝트의 복잡성과 필요한 리소스에 따라 유연한 가격 책정을 통해 최적의 가치를 제공합니다." +
    "컨설팅 및 프로젝트 관리 비용:\n" +
    "프로젝트 시작 전에는 기술 컨설팅 및 프로젝트 관리에 대한 비용을 상세히 설명하여 고객이 프로젝트 진행 중에도 항상 투명한 상태를 유지할 수 있도록 합니다." +
    "추가 서비스 및 지원:\n" +
    "GM4는 프로젝트 완료 후에도 지속적인 지원을 제공합니다. 추가적인 유지보수, 업그레이드, 그리고 확장성에 따른 비용은 프로젝트 초기에 명시되어 더 나은 예산 계획을 도와줍니다." +
    "지엠포컴퍼니 고객의 예산과 목표를 고려하여 최상의 가치를 제공하기 위해 노력하고 있습니다. 저희와 함께하면 효율적이고 투명한 비용 산정을 통해 프로젝트를 안정적으로 진행할 수 있습니다.",
  alternates: {
    canonical: `/estimate-pricing`,
  },
};
export default function EstimatePricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
