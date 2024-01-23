import useSWR from "swr";
import { fetcher } from "@/lib/utils";

export default function useAbout() {
  const { data: abouts, error } = useSWR<string[]>("/about", fetcher, {
    dedupingInterval: 30000,
  });

  return {
    abouts,
    error,
    loading: !abouts && !error,
  };
}
