export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="lg:px-[80px] px-4 xl:px-24">{children}</div>;
}
