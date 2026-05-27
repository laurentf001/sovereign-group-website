import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sovereigncapital.co.za";
  const routes = [
    "",
    "/about",
    "/living",
    "/developments",
    "/money",
    "/impact",
    "/consortium",
    "/leadership",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
