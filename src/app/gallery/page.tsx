import type { Metadata } from "next";
import featuredPatternsData from "@/data/featured-patterns.json";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const galleryItems = featuredPatternsData.flatMap((pattern) =>
  pattern.galleryImages.map((image, index) => ({
    id: `${pattern.id}-${index + 1}`,
    image,
    patternTitle: pattern.title,
    commercialUrl: pattern.commercialUrl,
  })),
);

export const metadata: Metadata = {
  title: "Gallery | Shiny Moon Glass",
  description: "A selection of finished stained glass pieces by Shiny Moon Glass.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader etsyShopUrl="https://shinymoonglass.etsy.com" />
      <main className="gallery-page">
        <section className="gallery-page__intro">
          <div className="gallery-page__intro-inner section-shell">
            <p className="eyebrow">Finished glass</p>
            <h1>Pieces brought to life in glass.</h1>
            <p>
              A selection of stained glass pieces made in the workshop, each
              one starting as a Shiny Moon Glass pattern.
            </p>
          </div>
        </section>

        <GalleryLightbox items={galleryItems} />
      </main>
      <SiteFooter />
    </>
  );
}
