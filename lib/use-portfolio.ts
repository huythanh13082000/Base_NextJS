import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export default function usePortfolio() {
  const { data: portfolios, error } = useSWR<PortfolioType[]>(
    "/v2/portfolio",
    fetcher,
    {
      dedupingInterval: 30000,
    },
  );

  return {
    portfolios,
    error,
    loading: !portfolios && !error,
  };
}
