export const SECTIONS = [
  { slug: "news", label: "News" },
  { slug: "opportunities", label: "Opportunities" },
  { slug: "founders", label: "Founders" },
  { slug: "sectors", label: "Sectors" },
  { slug: "island-life", label: "Island life" },
  { slug: "ideation-hub", label: "Ideation hub" },
] as const;

export type SectionSlug = (typeof SECTIONS)[number]["slug"];

export const SECTORS = [
  { slug: "clean-energy", label: "Clean energy" },
  { slug: "agribusiness", label: "Agribusiness" },
  { slug: "tourism", label: "Tourism" },
  { slug: "tech-digital", label: "Tech & digital" },
  { slug: "blue-economy", label: "Blue economy" },
] as const;

export type SectorSlug = (typeof SECTORS)[number]["slug"];

export interface ArticleVideo {
  playbackId: string;
  title?: string;
}

export interface ArticleFrontmatter {
  title: string;
  section: SectionSlug;
  sector?: SectorSlug;
  eyebrow: string;
  standfirst: string;
  author: string;
  authorRole?: string;
  authorImage?: string;
  date: string;
  readTime?: string;
  heroImage: string;
  heroImageAlt: string;
  video?: ArticleVideo;
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  readTime: string;
  content: string;
}

export interface ViewpointFrontmatter {
  name: string;
  role: string;
  image: string;
  relatedSlug?: string;
}

export interface Viewpoint extends ViewpointFrontmatter {
  slug: string;
  quote: string;
}

export function sectionLabel(slug: string): string {
  return SECTIONS.find((s) => s.slug === slug)?.label ?? slug;
}

export function sectorLabel(slug: string): string {
  return SECTORS.find((s) => s.slug === slug)?.label ?? slug;
}
