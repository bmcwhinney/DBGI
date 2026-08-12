import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { SECTIONS, SECTORS } from "@/types/content";
import { articleHref } from "@/lib/urls";

const SITE_URL = "https://dominicabgi.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}${articleHref(article)}`,
    lastModified: article.date,
  }));

  const sectionEntries: MetadataRoute.Sitemap = SECTIONS.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
  }));

  const sectorEntries: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: `${SITE_URL}/sector/${s.slug}`,
  }));

  return [{ url: SITE_URL }, ...sectionEntries, ...sectorEntries, ...articleEntries];
}
