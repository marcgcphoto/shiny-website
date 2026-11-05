import type { Metadata } from "next";
import { ArticleImageLightbox } from "@/components/article-image-lightbox";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

export const metadata: Metadata = {
  title: "Plant Propagation Stations Assembly Guide | Shiny Moon Glass",
  description: "A Shiny Moon Glass guide to assembling a stained glass plant propagation station.",
};

export default function PlantPropagationStationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="article-page article-page--propagation section-shell">
        <p className="eyebrow">Shiny Moon Glass · Article</p>
        <h1>Plant Propagation Stations Assembly Guide</h1>
        <article className="article-page__content">
          <p>
            This page explains how to add a propagation station to your stained
            glass projects. It is based on our patterns, but the same principles
            also apply if you create your own pattern.
          </p>
          <p>
            A propagation station uses the same techniques as a standard
            Tiffany-style suncatcher, with only two additional support rings to
              hold a test tube securely. Follow the steps below to assemble
            your piece safely and neatly.
          </p>

          <section className="article-page__illustrated-section">
            <h2>Pattern markings</h2>
            <div className="article-page__illustrated-layout">
              <div>
                <p>
                  If you are using one of our patterns, two horizontal dashed
                  grey lines show the suggested placement of the support rings:
                </p>
                <ul>
                  <li>
                    The <strong>upper line</strong> marks the stabilizing ring.
                    It should fit snugly around the tube without being tight,
                    so the tube can be removed for cleaning, refilling, or plant
                    maintenance.
                  </li>
                  <li>
                    The <strong>lower line</strong>{" "}marks the ring that supports
                    the tube. Shape it slightly smaller than the tube&apos;s
                    diameter so it can hold the weight securely.
                  </li>
                </ul>
                <p>
                  These marks are <strong>guidelines</strong>. You can adjust
                  their position for a taller or shorter test tube. In general,
                  support rings can be placed wherever there is a solder line
                  between glass pieces.
                </p>
              </div>
              <div className="article-page__markings-visual">
                <ArticleImageLightbox
                                    src="/images/propagation-station-pattern-markings.png"
                  alt="Pattern detail showing dashed guide marks for propagation station support rings"
                  fill
                  sizes="(max-width: 780px) 300px, 240px"
                />
              </div>
            </div>
          </section>

          <section>
            <h2>The wire</h2>
            <p>
              Creating the support rings is very similar to making hanging
              rings on a traditional suncatcher.
            </p>
            <p>
              Use <strong>pre-tinned copper wire between 1.5-2 mm</strong>{" "}
              (approx. <strong>14-16 AWG</strong>). This thickness provides the
              right balance between strength and ease of shaping.
            </p>
          </section>

          <section>
            <h2>Recommended test tubes</h2>
            <div className="article-page__illustrated-layout">
              <div>
                <p>
                  Standard test tube sizes such as 2.5 × 15 cm (1 × 6 inches) or
                  3 × 16.5 cm (1.18 × 6.5 inches) work well. I prefer the larger
                  size and use{" "}
                  <a className="article-page__inline-link" href="https://amzn.to/44queDo" target="_blank" rel="noreferrer">
                    StonyLab test tubes from Amazon
                  </a><sup>1</sup> for my propagation stations.
                </p>
                <p>
                  Choose your tube before positioning the rings, as their
                  placement depends on its size. Place the upper ring high
                  enough to stabilise the tube, but leave some space below its
                  rim to help keep it secure if the ring bends slightly with use.
                </p>
                <p>
                  The upper ring keeps the tube stable, while the lower ring
                  supports its rounded, tapered base, helping it sit securely.
                </p>
              </div>
              <div className="article-page__tube-visual">
                <ArticleImageLightbox
                  src="/images/propagation-tube-detail.webp"
                  alt="Close-up of a test tube held by upper and lower rings on a stained glass propagation station"
                  fill
                  sizes="(max-width: 780px) 300px, 240px"
                />
              </div>
            </div>
          </section>

          <section>
            <h2>Soldering the rings</h2>
            <div className="article-page__illustrated-layout">
              <div>
                <p>
                  Start shaping a clean circle using the test tube itself as a
                  guide for both rings. Once formed, use your fingers to tighten
                  the lower ring slightly before bending the wire legs. This
                  makes the lower ring a little smaller than the tube so it can
                  support the base securely.
                </p>
                <p>
                  As a guide, leave two straight legs of about 1–2 cm (0.4–0.8
                  in) on each side of the circle. Adjust this length to suit
                  your tube and design.
                </p>
              </div>
              <div className="article-page__rings-visual">
                <ArticleImageLightbox
                  src="/images/propagation-station-ring-forms.webp"
                  alt="Two formed wire support rings for a glass propagation station"
                  fill
                  sizes="(max-width: 780px) 540px, 240px"
                />
              </div>
            </div>
            <p>
              Next, start by soldering the back of the piece as usual. Once the back
              is finished, turn the piece over to work on the rings on the front.
            </p>
            <p>
              Each ring is fixed using two wire legs, one leg points upward,
              the other points downward. In this design I use the central
              vertical spine for better stability.
            </p>
            <p>
              At this stage, the solder is intentionally minimal. The goal is
              positioning, not finishing.
            </p>
            <ArticleImageLightbox
              className="article-page__inline-image"
              src="/images/propagation-station-soldered-ring-horizontal.webp"
              alt="A support ring lightly soldered to the central spine of a stained glass pattern"
              width={1600}
              height={1200}
              sizes="(max-width: 780px) 100vw, 560px"
            />
            <p>
              Now that the rings are lightly soldered in place, insert the test
              tube and check that it slides in and out easily and sits securely
              without wobbling or excessive pressure. Once everything fits
              correctly, finish soldering the rings in place.
            </p>
            <ArticleImageLightbox
              className="article-page__inline-image"
              src="/images/propagation-finished.webp"
              alt="Finished stained glass propagation station with two test tubes and plant cuttings"
              width={1600}
              height={1908}
              sizes="(max-width: 780px) 100vw, 360px"
            />
          </section>

        </article>
      </main>
      <SocialFollow />
      <aside className="article-page__affiliate section-shell">
            <p className="article-page__disclosure">
              <sup>1</sup> Note: Some of the links in this document are
              affiliate links. If you purchase something through them, I may
              earn a small commission at no extra cost to you. Thank you for
              supporting my work!
            </p>
      </aside>
      <SiteFooter />
    </>
  );
}
