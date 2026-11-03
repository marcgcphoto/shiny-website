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

export default async function Home() {
  await connection();

  const activePatterns = featuredPatternsData.filter(
    (pattern) => pattern.showInPatternsPage,
  );
  const featuredPatterns = shufflePatterns(activePatterns).slice(0, 3);
  const galleryPreview = featuredPatternsData
    .flatMap((pattern) =>
      pattern.galleryImages.map((image, index) => ({
        id: `${pattern.id}-${index + 1}`,
        image,
        patternTitle: pattern.title,
      })),
    )
    .slice(0, 2);

  return (
    <>
      <SiteHeader etsyShopUrl={etsyShopUrl} />
      <main className="home-page">
        <section className="home-hero section-shell" aria-labelledby="hero-title">
          <div className="home-hero__copy">
            <p className="eyebrow">Stained glass patterns for makers</p>
            <h1 id="hero-title">Thoughtfully designed. Tested in glass.</h1>
            <p>
              Digital stained glass patterns for artists who care about clear
              lines, considered detail and a satisfying finished piece.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--primary" href="/patterns">
                Explore patterns <span aria-hidden="true">→</span>
              </Link>
              <Link className="text-link" href="/gallery">
                View finished glass <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="home-hero__art" aria-label="Selected Shiny Moon Glass work">
            <div className="home-hero__art-main">
              <Image
                src="/images/viking-ship-gallery-01.jpg"
                alt="Viking Ship at Sea stained glass piece"
                fill
                priority
                sizes="(max-width: 780px) calc(100vw - 32px), 42vw"
              />
            </div>
            <Image
              className="home-hero__art-piece"
              src="/images/about-dragonfly.png"
              alt="Blue stained glass dragonfly"
              width={155}
              height={190}
            />
          </div>
        </section>

        <section className="home-difference" aria-labelledby="difference-title">
          <div className="section-shell">
            <div className="home-difference__heading">
              <p className="eyebrow">The Shiny difference</p>
              <h2 id="difference-title">Made for a better making process.</h2>
            </div>
            <div className="home-difference__grid">
              <article>
                <strong>Two sizes included</strong>
                <p>Small and Large versions, with tiled files for home printing.</p>
              </article>
              <article>
                <strong>Choose your license</strong>
                <p>Hobbyist and Commercial options for the way you make.</p>
              </article>
              <article>
                <strong>Tested in real glass</strong>
                <p>Every pattern is designed digitally, then made and refined at the workbench.</p>
              </article>
            </div>
            <Link className="text-link" href="/patterns">
              See everything included <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="home-patterns section-shell" aria-labelledby="featured-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Featured patterns</p>
              <h2 id="featured-title">Find your next project.</h2>
            </div>
            <Link className="text-link" href="/patterns">
              See all patterns <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="home-patterns__grid">
            {featuredPatterns.map((pattern) => (
              <article className="home-patterns__card" key={pattern.id}>
                <div className="home-patterns__image">
                  <Image
                    src={`/images/${pattern.image}`}
                    alt={`${pattern.title} stained glass pattern preview`}
                    fill
                    sizes="(max-width: 780px) calc(50vw - 24px), 31vw"
                  />
                </div>
                <div>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.description}</p>
                  <div>
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

        <section className="home-gallery" aria-labelledby="home-gallery-title">
          <div className="home-gallery__inner section-shell">
            <div className="home-gallery__copy">
              <p className="eyebrow">Finished glass</p>
              <h2 id="home-gallery-title">See the patterns in the light.</h2>
              <p>
                Every pattern is made in glass in my workshop before it is
                shared with other artists.
              </p>
              <Link className="button button--primary" href="/gallery">
                View the gallery <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="home-gallery__images">
              {galleryPreview.map((item) => (
                <div className="home-gallery__image" key={item.id}>
                  <Image
                    src={`/images/${item.image}`}
                    alt={`${item.patternTitle} finished stained glass piece`}
                    fill
                    sizes="(max-width: 780px) calc(50vw - 24px), 29vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-resources section-shell" aria-labelledby="resources-title">
          <div>
            <p className="eyebrow">Resources for makers</p>
            <h2 id="resources-title">A little help for the workbench.</h2>
          </div>
          <div className="home-resources__links">
            <Link href="/articles/working-with-mirrors">
              <span>Article</span>
              <strong>Working With Mirrors</strong>
              <em>Read article →</em>
            </Link>
            <Link href="/articles/plant-propagation-stations">
              <span>Article</span>
              <strong>Plant Propagation Stations</strong>
              <em>Read article →</em>
            </Link>
          </div>
        </section>

        <section className="home-artist section-shell" aria-labelledby="artist-title">
          <div className="home-artist__portrait">
            <Image
              src="/images/marc-garrido-portrait.webp"
              alt="Marc, the artist behind Shiny Moon Glass"
              fill
              sizes="(max-width: 780px) 180px, 220px"
            />
          </div>
          <div>
            <p className="eyebrow">The artist behind Shiny Moon Glass</p>
            <h2 id="artist-title">Hi, I&apos;m Marc.</h2>
            <p>
              Shiny Moon Glass grew from a new creative hobby into a way of
              sharing carefully considered patterns with fellow stained glass artists.
            </p>
            <Link className="text-link" href="/about">
              Meet the maker <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
