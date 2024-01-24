import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Options } from "@/types/Options";

export default function useOption(type?: string, tag?: string) {
  const { data: tags, error } = useSWR<Options[]>(
    "/v2/option" +
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
    tags,
    error,
    loading: !tags && !error,
  };
}
