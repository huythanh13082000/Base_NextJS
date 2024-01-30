import Image from "next/image";
import HeroSession from "@/components/hero-session";
import PricingSession from "@/components/pricing-session";
import PortfolioSession from "@/components/portfolio-session";
import PartnerSession from "@/components/partner-session";
import AboutSession from "@/components/about-session";
import { Button } from "@/components/ui/button";
import CallIcon from "@/public/icons/call.svg";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSession className="lg:px-[80px] px-4 xl:px-24" />
      <PricingSession className="lg:px-[80px] px-4 xl:px-24" />
      <PortfolioSession />
      <PartnerSession className="lg:px-[80px] px-4 xl:px-24" />
      <AboutSession className="lg:px-[80px] px-4 xl:px-24 mb-[150px]" />

      <a
        href="tel:050356925001"
        className="fixed animate-pulse-call cursor-pointer w-12 h-12 bg-[#396FFD] flex justify-center items-center rounded-full lg:top-[830px] xl:top-[850px] top-[680px] right-4 lg:right-5 xl:right-7 z-50 2xl:right-[250px]"
      >
        <CallIcon />
      </a>
    </main>
  );
}
