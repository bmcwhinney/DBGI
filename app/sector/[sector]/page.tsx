import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SECTORS, sectorLabel, type SectorSlug } from "@/types/content";
import { getArticlesBySector } from "@/lib/articles";
import { ListingCard } from "@/components/ArticleCards";
import { SectorStrip } from "@/components/SectorStrip";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ sector: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}): Promise<Metadata> {
  const { sector } = await params;
  return { title: sectorLabel(sector) };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const isValid = SECTORS.some((s) => s.slug === sector);
  if (!isValid) notFound();

  const articles = getArticlesBySector(sector as SectorSlug);
  const label = sectorLabel(sector);

  return (
    <>
      <div className="listing-header">
        <div className="listing-eyebrow">Sector</div>
        <h1 className="listing-title serif-text">{label}</h1>
      </div>

      {articles.length > 0 ? (
        <div className="listing-grid">
          {articles.map((article) => (
            <ListingCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="listing-empty">No {label.toLowerCase()} stories yet. Check back soon.</p>
      )}

      <SectorStrip active={sector} />
    </>
  );
}
