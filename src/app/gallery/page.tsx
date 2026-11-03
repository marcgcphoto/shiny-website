import type { Metadata } from "next";
import featuredPatternsData from "@/data/featured-patterns.json";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

const galleryImageDimensions: Record<string, { width: number; height: number }> = {
  "celtic-trinity-knot-gallery-01.jpg": { width: 4284, height: 5712 },
  "celtic-trinity-knot-gallery-02.jpg": { width: 3024, height: 4032 },
  "christmas-snowflakes-gallery-01.jpg": { width: 4000, height: 4000 },
  "christmas-snowflakes-gallery-02.jpg": { width: 4000, height: 4000 },
  "christmas-snowflakes-gallery-03.jpg": { width: 4000, height: 4000 },
  "coastal-mirror-set-gallery-01.jpg": { width: 4000, height: 4000 },
  "coastal-mirror-set-gallery-02.jpg": { width: 4000, height: 4000 },
  "dragonfly-gallery-01.jpg": { width: 3336, height: 4036 },
  "flying-owl-gallery-01.jpg": { width: 2692, height: 4000 },
  "jumping-dolphins-gallery-01.jpg": { width: 3789, height: 5052 },
  "love-celtic-knot-gallery.jpg": { width: 3024, height: 4032 },
  "ufo-alien-landing-gallery-01.jpg": { width: 3200, height: 4000 },
  "viking-ship-gallery-01.jpg": { width: 4000, height: 4000 },
};

const galleryItems = featuredPatternsData.flatMap((pattern) =>
  pattern.galleryImages.map((image, index) => {
    const dimensions = galleryImageDimensions[image];

    if (!dimensions) {
      throw new Error(`Missing gallery dimensions for ${image}`);
    }

    return {
      id: `${pattern.id}-${index + 1}`,
      image,
      patternTitle: pattern.title,
      commercialUrl: pattern.commercialUrl,
      ...dimensions,
    };
  }),
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
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
