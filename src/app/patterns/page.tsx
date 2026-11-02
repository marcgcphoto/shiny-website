import type { Metadata } from "next";
import Image from "next/image";
import { connection } from "next/server";
import featuredPatternsData from "@/data/featured-patterns.json";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

const etsyShopUrl = "https://www.etsy.com/shop/shinymoonglass";
const etsyCommercialUrl = `${etsyShopUrl}?section_id=60965408`;
const etsyHobbyistUrl = `${etsyShopUrl}?section_id=52850249`;

type FeaturedPattern = (typeof featuredPatternsData)[number];

function shufflePatterns(patterns: FeaturedPattern[]) {
  const shuffledPatterns = [...patterns];

  for (let index = shuffledPatterns.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledPatterns[index], shuffledPatterns[randomIndex]] = [
      shuffledPatterns[randomIndex],
      shuffledPatterns[index],
    ];
  }

  return shuffledPatterns;
}

export const metadata: Metadata = {
  title: "Stained Glass Patterns | Shiny Moon Glass",
  description:
    "Digital stained glass patterns with Hobbyist and Commercial licenses for independent makers.",
};

export default async function PatternsPage() {
  await connection();
  const featuredPatterns = shufflePatterns(
    featuredPatternsData.filter((pattern) => pattern.showInPatternsPage),
  );

  return (
    <>
      <SiteHeader etsyShopUrl={etsyShopUrl} />
      <main className="patterns-page">
        <section className="patterns-page__intro">
          <div className="patterns-page__intro-inner section-shell">
            <div>
              <p className="eyebrow">Digital stained glass patterns</p>
              <h1>Patterns made for the workbench.</h1>
              <p>
                Each Shiny Moon Glass pattern is designed digitally, tested in
                glass and prepared for makers who want a clear, considered
                starting point for their next piece.
              </p>
              <a
                className="button button--primary"
                href={etsyShopUrl}
                target="_blank"
                rel="noreferrer"
              >
                Browse patterns on Etsy <span aria-hidden="true">↗</span>
              </a>
            </div>
            <Image
              className="patterns-page__intro-art"
              src="/images/about-moon-mirror.png"
              alt="Stained glass moon mirror with a web-shaped frame"
              width={230}
              height={275}
              priority
            />
          </div>
        </section>

        <section className="patterns-page__includes section-shell" aria-labelledby="includes-title">
          <div className="patterns-page__section-heading">
            <p className="eyebrow">Built into every pattern</p>
            <h2 id="includes-title">Files made to be used.</h2>
          </div>
          <div className="patterns-page__include-grid">
            <article>
              <strong>Two practical sizes</strong>
              <p>Small files include A4 and US Letter. Large files include A3 and Tabloid.</p>
            </article>
            <article>
              <strong>Tiled files for home printing</strong>
              <p>Large versions are also supplied as tiled A4 and Letter pages to print, trim and assemble.</p>
            </article>
            <article>
              <strong>Ready for Tiffany work</strong>
              <p>Numbered pieces and 1 mm pattern lines support accurate cuts and smooth soldering.</p>
            </article>
            <article>
              <strong>PDF + PNG files</strong>
              <p>Use the printable PDFs at the right scale, or transparent PNGs with Cricut and similar tools.</p>
            </article>
          </div>
        </section>

        <section className="patterns-page__licenses" aria-labelledby="licenses-title">
          <div className="section-shell">
            <div className="patterns-page__license-heading">
              <div>
                <p className="eyebrow">Choose the right license</p>
                <h2 id="licenses-title">Choose the license that fits your plans.</h2>
              </div>
              <p>
                Every design is available as a Hobbyist or Commercial license.
                Choose the one that fits what you plan to make with it.
              </p>
            </div>
            <div className="patterns-page__license-grid">
              <article className="license-card">
                <p className="eyebrow">Hobbyist license</p>
                <h3>Make for yourself, or to give.</h3>
                <p>Create as many handmade pieces as you like for personal use or as gifts.</p>
                <p className="license-card__note">Finished pieces may not be sold under this license.</p>
              </article>
              <article className="license-card license-card--commercial">
                <p className="eyebrow">Commercial license</p>
                <h3>Make pieces to sell.</h3>
                <p>Includes all Hobbyist rights, plus permission to sell handmade finished pieces made from the pattern.</p>
                <p className="license-card__note">For independent, small-scale artists only. Mass production is not permitted.</p>
              </article>
            </div>
            <p className="patterns-page__license-rule">
              For both licenses, pattern files, PNGs and derived patterns may not be modified, redistributed or resold.
            </p>
          </div>
        </section>

        <section className="patterns-page__featured section-shell" aria-labelledby="featured-patterns-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few designs to start with</p>
              <h2 id="featured-patterns-title">Find your next project.</h2>
            </div>
            <div className="patterns-page__shop-links">
              <a href={etsyHobbyistUrl} target="_blank" rel="noreferrer">
                Hobbyist patterns <span aria-hidden="true">↗</span>
              </a>
              <a href={etsyCommercialUrl} target="_blank" rel="noreferrer">
                Commercial patterns <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="patterns-page__featured-grid">
            {featuredPatterns.map((pattern) => (
              <article className="patterns-page__pattern-card" key={pattern.title}>
                <div className="patterns-page__pattern-image">
                  <Image
                    src={`/images/${pattern.image}`}
                    alt=""
                    width={170}
                    height={190}
                  />
                </div>
                <div>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.description}</p>
                  <div className="patterns-page__card-links">
                    <a href={pattern.hobbyistUrl} target="_blank" rel="noreferrer">
                      Hobbyist <span aria-hidden="true">↗</span>
                    </a>
                    <a href={pattern.commercialUrl} target="_blank" rel="noreferrer">
                      Commercial <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
