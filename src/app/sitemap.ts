import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://travel.webbinghub.io";
  const now = new Date();

  // All supported locales
  const locales = ["en", "fr", "es", "de", "ro"];

  // Key sections of the website
  const sections = ["", "why-it-matters", "what-we-build", "who-we-work-with", "how-we-work", "beyond-launch", "contact"];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add all locale + section combinations
  locales.forEach((locale) => {
    sections.forEach((section) => {
      const path = locale === "en" ? (section ? `/${section}` : "") : `/${locale}${section ? `/${section}` : ""}`;
      const url = `${baseUrl}${path}`;

      sitemap.push({
        url,
        lastModified: now,
        changeFrequency: section === "" ? "weekly" : "monthly",
        priority: section === "" ? 1.0 : 0.8,
        alternates: {
          languages: locales.reduce(
            (acc, lang) => {
              const altPath = lang === "en" ? (section ? `/${section}` : "") : `/${lang}${section ? `/${section}` : ""}`;
              acc[lang] = `${baseUrl}${altPath}`;
              return acc;
            },
            {} as Record<string, string>
          ),
        },
      });
    });
  });

  return sitemap;
}
