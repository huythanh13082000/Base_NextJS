import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "지엠포컴퍼니 블로그입니다. 지엠포컴퍼니의 다양한 소식과 정보를 확인하세요." +
    "지엠포컴퍼니 블로그에서는 다양한 주제의 기술 블로그를 제공합니다. 지엠포컴퍼니의 다양한 소식과 정보를 확인하세요.",
  alternates: {
    canonical: `/blog`,
  },
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-[80px] px-4 xl:px-24 pb-11">{children}</div>;
}
