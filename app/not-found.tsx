import Link from "next/link";

export default function NotFound() {
  return (
    <div className="listing-header" style={{ textAlign: "center", padding: "96px 32px" }}>
      <div className="listing-eyebrow">404</div>
      <h1 className="listing-title serif-text">This story hasn&apos;t been filed yet</h1>
      <p style={{ marginTop: 16, color: "var(--ink-muted)" }}>
        <Link href="/">Back to the front page</Link>
      </p>
    </div>
  );
}
