import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import featuredPatternsData from "@/data/featured-patterns.json";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

const etsyShopUrl = "https://shinymoonglass.etsy.com";

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
    "Digital stained glass patterns designed, refined and tested for independent makers.",
};

export default async function PatternsPage() {
  await connection();
  const featuredPatterns = shufflePatterns(
    featuredPatternsData.filter((pattern) => pattern.showInPatternsPage),
  ).slice(0, 9);

  return (
    <>
      <SiteHeader etsyShopUrl={etsyShopUrl} />
      <main className="patterns-page">
        <section className="patterns-page__intro">
          <div className="patterns-page__intro-inner section-shell">
            <div className="patterns-page__intro-copy">
              <p className="eyebrow">Digital stained glass patterns</p>
              <h1>A clearer starting point for your next piece.</h1>
              <p>
                Each pattern arrives ready to use: a clean vector layout refined for
                the Tiffany method and tested in glass before it is released.
              </p>
              <a
                className="button button--primary"
                href={etsyShopUrl}
                target="_blank"
                rel="noreferrer"
              >
                Explore patterns on Etsy <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="patterns-page__process" aria-label="The creative process behind our patterns">
              <p className="eyebrow">The creative process behind our patterns</p>
              <ol>
                <li>
                  <span>01</span>
                  <div>
                    <strong>Start with a sketch</strong>
                    <p>Every design starts with an idea that is developed into an initial sketch.</p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <strong>Refine in vector software</strong>
                    <p>
                      Curves, proportions and spacing are refined manually into a precise
                      vector pattern.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <strong>Test in glass</strong>
                    <p>Each pattern is made in glass and fine-tuned when needed before it becomes a finished product.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="patterns-page__tools" aria-labelledby="tools-title">
          <div className="section-shell">
            <div className="patterns-page__tools-heading">
              <p className="eyebrow">Tiffany method patterns</p>
              <h2 id="tools-title">What you’ll need to get started.</h2>
            </div>
            <div className="patterns-page__tools-grid">
              <article>
                <strong>Only basic stained glass tools required</strong>
                <p>
                  You’ll need the standard tools and materials for cutting, grinding,
                  copper foiling and soldering, along with glass for your project — the
                  same core setup you would use for any other Tiffany piece.
                </p>
              </article>
              <article>
                <strong>No ring saw required</strong>
                <p>
                  The usual stained glass tools are enough to take a pattern from print
                  to finished piece.
                </p>
              </article>
              <article>
                <strong>Small grinding bits</strong>
                <p>
                  Some patterns include tighter curves that require small standard-grit
                  grinding bits to finish cleanly. 1/8″ (3.2 mm) and 1/4″ (6.4 mm) bits
                  are sufficient.
                </p>
              </article>
              <article>
                <strong>Who these patterns are for</strong>
                <p>
                  Made for stained glass makers who know the basics of the Tiffany method —
                  from confident beginners to independent artists. These are ready-to-use
                  patterns, not step-by-step tutorials.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="patterns-page__featured section-shell" aria-labelledby="featured-patterns-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A small selection from our Etsy shop</p>
              <h2 id="featured-patterns-title">A few patterns to get you started.</h2>
            </div>
            <div className="patterns-page__featured-aside">
              <p>
                Every design is available with a <a href="#licenses-title">Hobbyist</a> or{" "}
                <a href="#licenses-title">Commercial</a> license. Choose the one that
                matches what you plan to make.
              </p>
              <div className="patterns-page__shop-links">
                <a href={etsyShopUrl} target="_blank" rel="noreferrer">
                  Browse all patterns on Etsy <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="patterns-page__featured-grid">
            {featuredPatterns.map((pattern) => (
              <article className="patterns-page__pattern-card" key={pattern.title}>
                <div className="patterns-page__pattern-image">
                  <Image src={`/images/${pattern.image}`} alt="" width={170} height={190} />
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

        <section className="patterns-page__details" aria-labelledby="details-title">
          <div className="section-shell">
            <div className="patterns-page__details-heading">
              <div>
                <p className="eyebrow">Inside every download</p>
                <h2 id="details-title">Everything prepared for the workbench.</h2>
              </div>
              <p>
                A ready-to-use pattern pack with the files you need for your own
                Tiffany workflow.
              </p>
            </div>

            <div className="patterns-page__include-grid">
              <article>
                <strong>Two pattern sizes</strong>
                <p>Each pattern includes both Small and Large versions, ready to choose for your project.</p>
                <Image
                  className="patterns-page__support-image"
                  src="/images/pattern-two-sizes-preview.png"
                  alt="Example of small and large versions of a stained glass pattern"
                  width={1798}
                  height={1566}
                />
              </article>
              <article>
                <strong>Four print-ready PDFs</strong>
                <p>This is a digital download; no physical item will be shipped. Every pattern includes A4, US Letter, A3 and Tabloid PDFs.</p>
                <Image
                  className="patterns-page__support-image"
                  src="/images/pattern-pdf-formats-preview.png"
                  alt="Example of A4, US Letter, A3 and Tabloid pattern PDFs"
                  width={1288}
                  height={1715}
                />
              </article>
              <article>
                <strong>Large patterns, tiled for home printing</strong>
                <p>Large designs also include tiled A4 and Letter pages to print, trim and assemble.</p>
                <Image
                  className="patterns-page__support-image"
                  src="/images/pattern-tiled-assembly-preview.png"
                  alt="Example of a large pattern split across tiled A4 or Letter pages"
                  width={1358}
                  height={1830}
                />
              </article>
              <article>
                <strong>PNG files for Cricut</strong>
                <p>A ZIP of transparent PNGs is ready to use with Cricut and similar cutting tools.</p>
                <Image
                  className="patterns-page__support-image"
                  src="/images/pattern-cricut-preview.jpg"
                  alt="A stained glass pattern cut on a Cricut mat using the supplied PNG file"
                  width={1804}
                  height={1965}
                />
              </article>
              <article>
                <strong>Designed for the Tiffany method</strong>
                <ul className="patterns-page__feature-list">
                  <li>1 mm (0.04 in) line gap for precise cuts and smooth soldering.</li>
                  <li>Numbered pieces with a letter for each colour group.</li>
                  <li>A colour-reference thumbnail to guide your glass choices.</li>
                </ul>
              </article>
              <article>
                <strong>Hobbyist or Commercial</strong>
                <p>Choose a Hobbyist license for personal making, or Commercial to sell handmade finished pieces.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="patterns-page__licenses" aria-labelledby="licenses-title">
          <div className="section-shell">
            <div className="patterns-page__license-heading">
              <div>
                <p className="eyebrow">Choose the right license</p>
                <h2 id="licenses-title">Make for yourself, or make to sell.</h2>
              </div>
              <p>
                Every design is available with a Hobbyist or Commercial license.
                Choose the one that fits the work you plan to make.
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
                <p>For independent stained glass artists selling handmade work.</p>
                <p className="license-card__note">
                  Mass production is not permitted. Need a premium license?{" "}
                  <Link className="license-card__contact-link" href="/contact">Contact me →</Link>
                </p>
              </article>
            </div>
            <p className="patterns-page__license-rule">
              Pattern files, PNGs and derived patterns may not be modified, redistributed or resold.
            </p>
          </div>
        </section>
      </main>
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
