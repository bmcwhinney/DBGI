import Image from "next/image";
import Link from "next/link";
import type { Viewpoint } from "@/types/content";

export function OpinionBox({ viewpoint }: { viewpoint: Viewpoint }) {
  const href = viewpoint.relatedSlug ? `/news/${viewpoint.relatedSlug}` : "#";

  return (
    <Link href={href} className="opinion-box">
      <div className="opinion-label">Viewpoint</div>
      <div className="opinion-avatar">
        <Image src={viewpoint.image} alt={viewpoint.name} width={64} height={64} />
      </div>
      <div className="opinion-name">{viewpoint.name}</div>
      <div className="opinion-role">{viewpoint.role}</div>
      <div className="opinion-text">&ldquo;{viewpoint.quote}&rdquo;</div>
    </Link>
  );
}
