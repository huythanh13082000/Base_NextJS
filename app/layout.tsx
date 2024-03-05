import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import SiteFooter from "@/components/site-footer";
import CopyrightBanner from "@/components/copyright-banner";
import { getFrontEndUrl } from "@/lib/getBaseUrl";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
const GA_CONVERSION_LABEL = process.env.NEXT_PUBLIC_CONVERSION_LABEL;

export const metadata: Metadata = {
  metadataBase: new URL(getFrontEndUrl()),
  title: "지엠포컴퍼니",
  description:
    "해외 개발자 채용 플랫폼인 지엠포컴퍼니 엄격한 검증 절차를 통과한 전세계 상위10% 개발자를 1주안에 채용합니다. 개발자 모집부터 검증 및 채용까지 개발자 채용에 필요한 모든 서비스를 원스톱 형태로 기업이 원하는 개발자를 채용가능합니다. 앱개발,웹개발,소프트웨어개발,앱제작,웹제작,개발자채용,개발자프리렌서",
  icons: {
    icon: "/images/logo_new_header.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ko-KO": "/ko-KO",
      "vi-VI": "/vi-VI",
    },
  },
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "지엠포컴퍼니",
    "GM4",
    "GM4COMPANY",
    "GM4 기술 솔루션즈",
    "[GM4COMPANY] 스타트업 전문 개발자",
    "Greenapps.kr",
    "Greenapps",
    "기술 솔루션즈",
    "기술 솔루션",
    "혁신적인 소프트웨어",
    "디지털 전환 서비스",
    "스마트 IT 솔루션",
    "클라우드 컴퓨팅",
    "기술 컨설팅",
    "맞춤형 소프트웨어 개발",
    "애플리케이션",
    "앱개발",
    "사이트제작",
    "프론트개발",
    "백엔드개발",
    "앱제작",
    "개발자채용",
    "개발자프리렌서 채용",
    "앱만들기",
    "소프트웨어개발",
    "플랫폼 앱",
    "네이티브 앱",
    "하이브리드 앱",
    "플러터",
    "리액트네이티브",
    "php",
    "nodejs",
    "모바일 앱",
    "어플 만들기",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [
      { url: "/images/avatar.png" },
      { url: "https://d1gey57zr11abr.cloudfront.net/avatar.png" },
      { url: "/images/logo_new_header.png" },
    ],
    emails: ["gm4-korea@greenapps.kr"],
  },
  verification: {
    google: "02_hAUYVHZ-qJTu_eeASXfV2iaGwJboSXqO2bS74MBM",
    other: {
      "naver-site-verification": "09b7054d7a3c644c373a67ef955201bf54dd5594",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*<Head>*/}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>

      <Script id="gtag-event" strategy="afterInteractive">
        {`
        gtag('event', 'conversion', {'send_to': '${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}'});
          `}
      </Script>
      <Script id="gtag-event-init" strategy="afterInteractive">
        {`
        function gtag_report_conversion(url) {
        var callback = function () {
        if (typeof(url) != 'undefined') {
        window.location = url;
        }
        };
       gtag('event', 'conversion', {
      'send_to': '${GA_MEASUREMENT_ID}/${GA_CONVERSION_LABEL}',
      'event_callback': callback
       });
       return false;
       }
          `}
      </Script>
      {/*</Head>*/}

      <body
        className={cn("min-h-screen bg-background font-sans", inter.className)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative max-w-[1440px] mx-auto flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 lg:pt-12">{children}</div>
            <SiteFooter />
            {/* <CopyrightBanner /> */}
            <TailwindIndicator />
          </div>
        </ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                "bg-toast opacity-40 text-opacity-100 font-bold gap-2 p-3 rounded-full flex items-center justify-between",
              error: "text-red-400",
              success: "text-green-400",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
      </body>
    </html>
  );
}
