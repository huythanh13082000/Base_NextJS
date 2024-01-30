import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { IResponse } from "@/types/Response";

export default function usePortfolio() {
  const { data: portfolios, error } = useSWR<IResponse<PortfolioType[]>>(
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
