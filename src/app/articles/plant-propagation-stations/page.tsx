import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Plant Propagation Stations | Shiny Moon Glass",
  description: "A Shiny Moon Glass guide to assembling a stained glass plant propagation station.",
};

export default function PlantPropagationStationsPage() {
  return (
    <>
      <SiteHeader articlePage />
      <main className="article-page section-shell">
        <p className="eyebrow">Shiny Moon Glass · Article</p>
        <h1>Plant Propagation Stations</h1>
        <p className="article-page__intro">
          A step-by-step companion guide for assembling and enjoying your
          stained glass propagation station.
        </p>
        <div className="article-page__placeholder">
          <p>Article coming soon</p>
          <span>
            This page is ready for the guide that will accompany propagation
            station pattern purchases.
          </span>
        </div>
      </main>
    </>
  );
}
