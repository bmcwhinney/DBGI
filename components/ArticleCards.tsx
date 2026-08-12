import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/content";
import { articleHref } from "@/lib/urls";
import { ClockIcon, PlayIcon, StoreIcon, BulbIcon, LeafIcon, RocketIcon } from "./icons";

function PlayBadge() {
  return (
    <div className="play-badge">
      <PlayIcon /> Watch
    </div>
  );
}

export function LeadCard({ article }: { article: Article }) {
  const href = articleHref(article);
  return (
    <article className="lead-col card-link-target">
      <div className="mid-image-placeholder">
        {article.video && <PlayBadge />}
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          width={800}
          height={520}
          priority
        />
      </div>
      <span className="eyebrow">{article.eyebrow}</span>
      <h1 className="lead-headline">
        <Link href={href} className="stretched-link">
          {article.title}
        </Link>
      </h1>
      <p className="lead-standfirst">{article.standfirst}</p>
      <div className="read-meta">
        <ClockIcon />
        <span>{article.readTime} read</span>
      </div>
    </article>
  );
}

export function MidCard({ article }: { article: Article }) {
  const href = articleHref(article);
  return (
    <div className="mid-story-block card-link-target">
      <div className="mid-image-placeholder">
        {article.video && <PlayBadge />}
        <Image src={article.heroImage} alt={article.heroImageAlt} width={640} height={420} />
      </div>
      <span className="eyebrow">{article.eyebrow}</span>
      <h2 className="mid-headline serif-text">
        <Link href={href} className="stretched-link">
          {article.title}
        </Link>
      </h2>
      <div className="read-meta">
        <ClockIcon />
        <span>{article.readTime} read</span>
      </div>
    </div>
  );
}

const SECTOR_ICONS: Record<string, typeof StoreIcon> = {
  "clean-energy": BulbIcon,
  agribusiness: LeafIcon,
  tourism: LeafIcon,
  "tech-digital": RocketIcon,
  "blue-economy": StoreIcon,
};

export function SideItem({ article }: { article: Article }) {
  const Icon = (article.sector && SECTOR_ICONS[article.sector]) || StoreIcon;
  return (
    <Link href={articleHref(article)} className="side-item">
      <div className="side-icon-badge">
        <Icon />
      </div>
      <div className="side-content-block">
        <div className="side-title">{article.title}</div>
        <div className="side-sub">{article.eyebrow}</div>
      </div>
    </Link>
  );
}

export function BottomCard({ article }: { article: Article }) {
  return (
    <article className="bottom-col card-link-target">
      <h3 className="bottom-headline serif-text">
        <Link href={articleHref(article)} className="stretched-link">
          {article.title}
        </Link>
      </h3>
      <p className="bottom-snip">{article.standfirst}</p>
    </article>
  );
}

export function ListingCard({ article }: { article: Article }) {
  return (
    <Link href={articleHref(article)} className="listing-card">
      <div className="mid-image-placeholder">
        {article.video && <PlayBadge />}
        <Image src={article.heroImage} alt={article.heroImageAlt} width={640} height={420} />
      </div>
      <span className="eyebrow">{article.eyebrow}</span>
      <h3 className="listing-card-headline serif-text">{article.title}</h3>
      <div className="read-meta">
        <ClockIcon />
        <span>{article.readTime} read</span>
      </div>
    </Link>
  );
}
