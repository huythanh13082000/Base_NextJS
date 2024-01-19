export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 pt-12 pb-[60px] lg:px-11 lg:py-20 xl:px-[252px] xl:pt-[112px] xl:pb-[90px]">
      {children}
    </div>
  );
}
