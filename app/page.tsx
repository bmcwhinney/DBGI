import { getAllArticles } from "@/lib/articles";
import { getLatestViewpoint } from "@/lib/viewpoints";
import { LeadCard, MidCard, SideItem, BottomCard } from "@/components/ArticleCards";
import { OpinionBox } from "@/components/OpinionBox";
import { SectorStrip } from "@/components/SectorStrip";

export default function HomePage() {
  const articles = getAllArticles();
  const viewpoint = getLatestViewpoint();

  const [lead, mid, ...rest] = articles;
  const sideItems = rest.slice(0, 4);
  const bottomStories = rest.slice(4, 7);

  return (
    <>
      <main className="main-grid">
        {lead && <LeadCard article={lead} />}

        <article className="mid-col">
          {mid && <MidCard article={mid} />}
          {viewpoint && <OpinionBox viewpoint={viewpoint} />}
        </article>

        <aside className="side-col">
          <h3 className="side-label">Also this week</h3>
          {sideItems.map((article) => (
            <SideItem key={article.slug} article={article} />
          ))}
        </aside>
      </main>

      <SectorStrip />

      <footer className="bottom-grid">
        {bottomStories.map((article) => (
          <BottomCard key={article.slug} article={article} />
        ))}
      </footer>
    </>
  );
}
