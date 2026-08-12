import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticle } from "@/lib/articles";
import { sectionLabel } from "@/types/content";
import { VideoEmbed } from "@/components/VideoEmbed";
import { mdxComponents } from "@/lib/mdx-components";
import { ClockIcon } from "@/components/icons";
import { SectorStrip } from "@/components/SectorStrip";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    section: article.section,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await params;
  const article = getArticle(section, slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.standfirst,
    openGraph: {
      title: article.title,
      description: article.standfirst,
      images: [{ url: article.heroImage }],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const article = getArticle(section, slug);
  if (!article) notFound();

  const dateLabel = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <div className="article-hero">
        <span className="eyebrow">
          {article.eyebrow} &middot; {sectionLabel(article.section)}
        </span>
        <h1 className="lead-headline">{article.title}</h1>
        <p className="lead-standfirst">{article.standfirst}</p>

        <div className="article-byline">
          {article.authorImage && (
            <div className="article-byline-avatar">
              <Image src={article.authorImage} alt={article.author} width={40} height={40} />
            </div>
          )}
          <div>
            <div className="article-byline-name">{article.author}</div>
            <div className="article-byline-meta">
              {article.authorRole ? `${article.authorRole} · ` : ""}
              {dateLabel}
            </div>
          </div>
          <div className="read-meta" style={{ marginLeft: "auto" }}>
            <ClockIcon />
            <span>{article.readTime} read</span>
          </div>
        </div>

        <div className="article-media">
          {article.video ? (
            <VideoEmbed
              playbackId={article.video.playbackId}
              title={article.video.title ?? article.title}
              poster={article.heroImage}
            />
          ) : (
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              width={1400}
              height={900}
              priority
            />
          )}
        </div>
      </div>

      <div className="article-body">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>

      <SectorStrip active={article.sector} />
    </article>
  );
}
