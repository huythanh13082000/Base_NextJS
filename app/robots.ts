import { type MetadataRoute } from "next";
import { getFrontEndUrl } from "@/lib/getBaseUrl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getFrontEndUrl()}/sitemap.xml`,
  };
}
