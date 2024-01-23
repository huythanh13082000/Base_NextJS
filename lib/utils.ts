import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getBaseUrl } from "@/lib/getBaseUrl";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SWRError extends Error {
  status: number;
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  if (typeof input === "string") {
    input = `${getBaseUrl()}${input}`;
  }
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = await res.text();
    const err = new Error(error) as SWRError;
    err.status = res.status;
    throw err;
  }

  return res.json();
}
