import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Types } from "@/types/Types";

export default function useType() {
  const { data: types, error } = useSWR<Types[]>("/v2/type", fetcher, {
    dedupingInterval: 30000,
  });

  return {
    types,
    error,
    loading: !types && !error,
  };
}
