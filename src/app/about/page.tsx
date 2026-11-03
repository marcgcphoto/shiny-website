import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

export const metadata: Metadata = {
  title: "About | Shiny Moon Glass",
  description:
    "Meet the maker behind Shiny Moon Glass, a stained glass studio near Barcelona.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader articlePage />
      <main className="about-page">
        <section className="about-page__intro">
          <div className="about-page__intro-inner section-shell">
            <h1>About Shiny Moon Glass</h1>
            <p>
              Thoughtfully designed, glass-tested patterns for fellow stained
              glass artists.
            </p>
          </div>
        </section>

        <section className="about-page__shiny">
          <div className="about-page__shiny-inner section-shell">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>From idea to glass.</h2>
            </div>
            <div className="about-page__copy">
              <div className="about-page__work-block">
                <p>
                  Each design starts with an idea that develops into an initial
                  sketch. From there, I create the pattern in vector software to
                  ensure the highest possible quality.
                </p>
                <p>
                  Before a pattern is released, I make it in glass myself and
                  fine-tune it when needed.
                </p>
              </div>
              <div className="about-page__work-block about-page__work-block--audience">
                <h3>Made for makers.</h3>
                <p>
                  Shiny Moon Glass patterns are made by an artist for stained
                  glass artists, makers and hobbyists. You’ll need the usual
                  basic tools and materials for cutting, grinding, copper
                  foiling and soldering, along with glass for your project —
                  but no ring saw.
                </p>
              </div>
              <div className="about-page__pattern-preview">
                <Image
                  src="/images/about-pattern-previews.png"
                  alt="A selection of Shiny Moon Glass stained glass pattern previews"
                  width={1877}
                  height={747}
                  sizes="(max-width: 780px) calc(100vw - 64px), 560px"
                />
              </div>
              <div className="about-page__work-cta">
                <p>The current collection is available as digital patterns on Etsy.</p>
                <a
                  className="button button--primary"
                  href="https://shinymoonglass.etsy.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore patterns on Etsy <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page__artist section-shell">
          <div className="about-page__portrait">
            <Image
              src="/images/marc-garrido-portrait.webp"
              alt="Marc, the artist behind Shiny Moon Glass"
              fill
              sizes="(max-width: 780px) calc(100vw - 64px), 360px"
              priority
            />
          </div>
          <div className="about-page__artist-copy">
            <p className="eyebrow">The artist behind Shiny Moon Glass</p>
            <h2>Hi, I&apos;m Marc.</h2>
            <p>
              I live in a small village near Barcelona. My background is in
              software engineering and{" "}
              <a
                className="about-page__inline-link"
                href="https://www.marcgcphotography.com"
                target="_blank"
                rel="noreferrer"
              >
                photography
              </a>
              , two worlds that shape how I approach stained glass: with
              curiosity, attention to detail and a love of making ideas
              tangible.
            </p>
            <p>
              Shiny Moon Glass began in 2024, when a leg injury kept me closer
              to home and I decided to try a new creative hobby: stained glass.
              The injury healed, but the hobby stayed.
            </p>
            <p>
              Today, I use my small workshop to explore the craft, make
              suncatchers and share the patterns that grow out of that process
              with other stained glass artists.
            </p>
            <div
              className="about-page__finished-work"
              aria-label="Selected finished stained glass work"
            >
              <p className="eyebrow">A few pieces from the workbench</p>
              <div>
                <Image
                  src="/images/about-dragonfly.png"
                  alt="Blue stained glass dragonfly suncatcher"
                  width={120}
                  height={148}
                />
                <Image
                  src="/images/about-moon-mirror.png"
                  alt="Stained glass moon mirror with a web-shaped frame"
                  width={112}
                  height={134}
                />
                <Image
                  src="/images/about-celtic-knot.png"
                  alt="Green stained glass Celtic knot suncatcher"
                  width={124}
                  height={121}
                />
                <Image
                  src="/images/about-chick.png"
                  alt="Yellow chick stained glass suncatcher"
                  width={108}
                  height={131}
                />
                <Image
                  src="/images/about-cat.png"
                  alt="Black cat stained glass panel"
                  width={104}
                  height={131}
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
