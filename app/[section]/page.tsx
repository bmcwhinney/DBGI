import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SECTIONS, sectionLabel, type SectionSlug } from "@/types/content";
import { getArticlesBySection } from "@/lib/articles";
import { ListingCard } from "@/components/ArticleCards";
import { SectorStrip } from "@/components/SectorStrip";

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  return { title: sectionLabel(section) };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const isValid = SECTIONS.some((s) => s.slug === section);
  if (!isValid) notFound();

  const articles = getArticlesBySection(section as SectionSlug);
  const label = sectionLabel(section);

  return (
    <>
      <div className="listing-header">
        <div className="listing-eyebrow">Section</div>
        <h1 className="listing-title serif-text">{label}</h1>
      </div>

      {articles.length > 0 ? (
        <div className="listing-grid">
          {articles.map((article) => (
            <ListingCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="listing-empty">New {label.toLowerCase()} stories are on the way.</p>
      )}

      <SectorStrip />
    </>
  );
}
