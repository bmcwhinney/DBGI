import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const SITE_URL = "https://dominicabgi.site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DBGI Platform",
    template: "%s | DBGI Platform",
  },
  description:
    "Dominica Business Growth & Innovation — weekly business news from the nature isle.",
  icons: {
    icon: "/images/dbgi-favicon.png",
    apple: "/images/dbgi-favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "DBGI Platform",
    title: "DBGI Platform",
    description:
      "Dominica Business Growth & Innovation — weekly business news from the nature isle.",
    images: [{ url: "/images/dbgi-og-v2.jpg", width: 1200, height: 1200 }],
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "DBGI Platform",
    description:
      "Dominica Business Growth & Innovation — weekly business news from the nature isle.",
    images: ["/images/dbgi-og-v2.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="dbgi-wrap">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
