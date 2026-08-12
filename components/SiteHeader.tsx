"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, SearchIcon } from "./icons";
import { SECTIONS } from "@/types/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="top-bar">
        <div className="top-left">
          <button className="menu-icon" aria-label="Open menu">
            <MenuIcon />
          </button>
          <nav className="top-links" aria-label="Secondary navigation">
            <Link href="/news">News</Link>
            <Link href="/opportunities">Opportunities</Link>
            <Link href="/founders">Founders</Link>
          </nav>
        </div>
        <div className="top-right">
          <button className="top-icon" aria-label="Search" style={{ marginRight: 4 }}>
            <SearchIcon />
          </button>
          <button className="login-text">Log in</button>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </header>

      <section className="masthead-row">
        <aside className="masthead-aside masthead-dispatch left">
          <Image
            className="masthead-dispatch-img"
            src="/images/reporting-from-portsmouth.png"
            alt="Illustration of a coconut pen"
            width={96}
            height={90}
          />
          <div className="dispatch-caption">Reporting from Portsmouth Dominica</div>
        </aside>

        <div className="masthead-brand">
          <Link href="/" className="masthead-logo">
            DBGI
          </Link>
          <p className="masthead-tagline">Dominica Business Growth &amp; Innovation</p>
        </div>

        <aside className="masthead-aside right masthead-dispatch">
          <Image
            className="masthead-dispatch-img"
            src="/images/founder-dispatch-parrot.png"
            alt="Sisserou parrot carrying a dispatch envelope"
            width={96}
            height={75}
          />
          <div className="dispatch-caption">Weekly business news from the nature isle</div>
        </aside>
      </section>

      <nav className="nav-strip" aria-label="Main navigation">
        {SECTIONS.map((section) => (
          <Link
            key={section.slug}
            href={`/${section.slug}`}
            className={pathname?.startsWith(`/${section.slug}`) ? "active" : undefined}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
