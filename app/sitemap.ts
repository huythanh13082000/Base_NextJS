import { type MetadataRoute } from "next";
import { NavList } from "@/data/nav-list";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = "http://localhost:3000";

  const routes = NavList.map((nav) => ({
    url: `${baseURL}${nav.href}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
