import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Viewpoint, ViewpointFrontmatter } from "@/types/content";

const VIEWPOINTS_DIR = path.join(process.cwd(), "content", "viewpoints");

let cache: Viewpoint[] | null = null;

function loadViewpoints(): Viewpoint[] {
  if (cache) return cache;

  const files = fs.readdirSync(VIEWPOINTS_DIR).filter((f) => f.endsWith(".mdx"));

  const viewpoints = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(VIEWPOINTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as ViewpointFrontmatter;

    return {
      ...frontmatter,
      slug,
      quote: content.trim(),
    } satisfies Viewpoint;
  });

  cache = viewpoints;
  return viewpoints;
}

export function getAllViewpoints(): Viewpoint[] {
  return loadViewpoints();
}

export function getLatestViewpoint(): Viewpoint | undefined {
  return loadViewpoints()[0];
}
