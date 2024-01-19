import Image from "next/image";
import HeroSession from "@/components/hero-session";
import PricingSession from "@/components/pricing-session";
import PortfolioSession from "@/components/portfolio-session";
import PartnerSession from "@/components/partner-session";
import AboutSession from "@/components/about-session";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSession className="lg:px-[80px] px-4 xl:px-24" />
      <PricingSession className="lg:px-[80px] px-4 xl:px-24" />
      <PortfolioSession />
      <PartnerSession className="lg:px-[80px] px-4 xl:px-24" />
      <AboutSession className="lg:px-[80px] px-4 xl:px-24 mb-[150px]" />
    </main>
  );
}
