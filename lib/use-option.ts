import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Options } from "@/types/Options";
import { IResponse } from "@/types/Response";

export default function useOption(type?: string, tag?: string) {
  const { data: options, error } = useSWR<IResponse<Options[]>>(
    "/v2/option?" +
      new URLSearchParams({
        ...(type ? { type } : {}),
        ...(tag ? { tag } : {}),
      }),
    fetcher,
    {
      dedupingInterval: 30000,
    },
  );

  return {
    options,
    error,
    loading: !options && !error,
  };
}
