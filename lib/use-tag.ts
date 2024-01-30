import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Tags } from "@/types/Tags";
import { IResponse } from "@/types/Response";

export default function useTags(type?: string) {
  let key = "/v2/tag";
  if (type) {
    key += `?type=${type}`;
  }
  const { data: tags, error } = useSWR<IResponse<Tags[]>>(key, fetcher, {
    dedupingInterval: 30000,
  });

  return {
    tags,
    error,
    loading: !tags && !error,
  };
}
