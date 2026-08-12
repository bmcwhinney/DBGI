import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, ArticleFrontmatter, SectionSlug, SectorSlug } from "@/types/content";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

let cache: Article[] | null = null;

function loadArticles(): Article[] {
  if (cache) return cache;

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as ArticleFrontmatter;

    return {
      ...frontmatter,
      slug,
      readTime: frontmatter.readTime ?? readingTime(content).text.replace("read", "").trim(),
      content,
    } satisfies Article;
  });

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  cache = articles;
  return articles;
}

export function getAllArticles(): Article[] {
  return loadArticles();
}

export function getArticlesBySection(section: SectionSlug): Article[] {
  return loadArticles().filter((a) => a.section === section);
}

export function getArticlesBySector(sector: SectorSlug): Article[] {
  return loadArticles().filter((a) => a.sector === sector);
}

export function getArticle(section: string, slug: string): Article | undefined {
  return loadArticles().find((a) => a.section === section && a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return loadArticles().find((a) => a.slug === slug);
}
