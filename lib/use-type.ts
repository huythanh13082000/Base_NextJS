import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Types } from "@/types/Types";
import { IResponse } from "@/types/Response";

export default function useType() {
  const { data: types, error } = useSWR<IResponse<Types[]>>(
    "/v2/type",
    fetcher,
    {
      dedupingInterval: 30000,
    },
  );

  return {
    types,
    error,
    loading: !types && !error,
  };
}
