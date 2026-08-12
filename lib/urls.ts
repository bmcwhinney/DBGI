import type { Article } from "@/types/content";

export function articleHref(article: Pick<Article, "section" | "slug">): string {
  return `/${article.section}/${article.slug}`;
}
