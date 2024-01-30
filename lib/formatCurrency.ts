export const formatCurrency = (price: number): string => {
  const won = new Intl.NumberFormat("ko-KR", {
    currency: "KRW",
  });
  return won.format(price);
};
