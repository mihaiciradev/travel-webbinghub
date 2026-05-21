import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://travel.webbinghub.io/sitemap.xml",
    host: "https://travel.webbinghub.io",
  };
}
