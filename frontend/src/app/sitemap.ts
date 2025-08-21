// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://nextdynamicsinc.com";

  // Define all your static routes based on your switch cases
  const routes = [
    "services",
    "services/custom-software-development",
    "services/product-strategy-and-design",
    "services/rapid-prototyping",
    "services/data-and-platform-engineering",
    "industries/life-sciences",
    "industries/consumer-packaged-goods",
    "industries/manufacturing",
    "industries/financial-services",
    "contact-us",
    "cookies-policy",
  ];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1
        : route.includes("services") || route.includes("industries")
          ? 0.8
          : 0.5,
  }));

  return sitemapEntries;
}
