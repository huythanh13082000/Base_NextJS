"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import useAbout from "@/lib/use-about";
import Loading from "@/components/loading";
const containerStyle = {
  background:
    "radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
};
const About = () => {
  const { abouts, loading, error } = useAbout();
  return (
    <div className="w-full">
      <div
        className="text-center lg:leading-[60px] p-[30px] leading-[30px] lg:mb-[40px]"
        style={containerStyle}
      >
        <h1 className="mb-3 lg:mb-4 xl:text-[70px] xl:leading-[80px] lg:text-[52px] lg:leading-[60px] text-[32px] leading-[40px] font-bold translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          About Us
        </h1>
        <p className="mb-6 lg:mb-8 xl:text-[20px] xl:leading-[28px] lg:text-[18px] lg:leading-[26px] text-[14px] leading-[20px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Learn more about us - download our PDF now!
        </p>
        <a
          href="https://d1gey57zr11abr.cloudfront.net/GM4Portfolio.pdf"
          target="_blank"
        >
          <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            Download PDF
          </Button>
        </a>
      </div>
      {loading && (
        <div className="w-1/4 mx-auto h-fit flex justify-center items-center">
          <Loading />
        </div>
      )}
      {abouts &&
        abouts.map((img) => (
          <div key={img}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${img}`}
              alt=""
              width={1000}
              height={500}
              className="w-[100%] object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default About;
