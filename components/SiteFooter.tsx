import Link from "next/link";
import { SECTORS } from "@/types/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="site-footer-brand">DBGI</div>
        <div className="site-footer-tag">Dominica Business Growth &amp; Innovation</div>
      </div>
      <nav className="site-footer-links" aria-label="Footer navigation">
        {SECTORS.map((sector) => (
          <Link key={sector.slug} href={`/sector/${sector.slug}`}>
            {sector.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
