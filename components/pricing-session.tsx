import React from "react";
import CardPricing from "@/components/card-pricing";

const PricingSession = () => {
  return (
    <section className="mt-20 flex flex-col items-center gap-4">
      <div className="bg-[#0b1421] max-w-fit py-1 px-4 rounded-full font-medium border border-[#151d2a]">
        PRICING
      </div>
      <p className="font-bold text-5xl mb-20">
        Unlock Your Website&#39;s Potential
      </p>
      <div className="flex gap-8 justify-between">
        <CardPricing />
        <CardPricing />
        <CardPricing />
        <CardPricing />
      </div>
    </section>
  );
};

export default PricingSession;
