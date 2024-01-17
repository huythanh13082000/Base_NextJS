import Image from "next/image";
import HeroSession from "@/components/hero-session";
import PricingSession from "@/components/pricing-session";
import PortfolioSession from "@/components/portfolio-session";
import PartnerSession from "@/components/partner-session";
import AboutSession from "@/components/about-session";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSession />
      <PricingSession />
      <PortfolioSession />
      <PartnerSession />
      <AboutSession />
    </main>
  );
}
