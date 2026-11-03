import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Working With Mirrors | Shiny Moon Glass",
  description: "A Shiny Moon Glass guide to working with mirrors in stained glass projects.",
};

export default function WorkingWithMirrorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="article-page section-shell">
        <p className="eyebrow">Shiny Moon Glass · Article</p>
        <h1>Working With Mirrors</h1>
        <p className="article-page__intro">
          A practical guide to selecting, cutting and fitting mirror glass into
          your stained glass projects.
        </p>
        <div className="article-page__placeholder">
          <p>Article coming soon</p>
          <span>
            This page is ready for the guide that will accompany mirror-pattern
            purchases.
          </span>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
