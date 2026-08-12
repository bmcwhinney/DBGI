import Link from "next/link";
import { SECTORS } from "@/types/content";

export function SectorStrip({ active }: { active?: string }) {
  return (
    <section className="sector-strip" aria-label="Sector categories">
      <div className="sector-label">Browse by sector:</div>
      {SECTORS.map((sector) => (
        <Link
          key={sector.slug}
          href={`/sector/${sector.slug}`}
          className={sector.slug === active ? "sector-pill active" : "sector-pill"}
        >
          {sector.label}
        </Link>
      ))}
    </section>
  );
}
