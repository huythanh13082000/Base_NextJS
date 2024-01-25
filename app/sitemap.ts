import { type MetadataRoute } from "next";
import { NavList } from "@/data/nav-list";
import { getFrontEndUrl } from "@/lib/getBaseUrl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = getFrontEndUrl();

  const routes = NavList.map((nav) => ({
    url: `${baseURL}${nav.href}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
