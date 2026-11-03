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
  const heroPatterns = activePatterns.slice(0, 5);
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
            <p className="eyebrow">From idea to glass</p>
            <h1 id="hero-title">Stained glass patterns, tested in real glass.</h1>
            <p>
              Each pattern begins with a clear idea and develops into a finished
              pattern, released only after it has been tested in real glass.
            </p>
            <p>
              Designed to be made with standard stained glass tools and
              materials—no ring saw or other specialist tools required.
            </p>
            <div className="home-hero__actions">
              <a
                className="button button--primary"
                href={etsyShopUrl}
                target="_blank"
                rel="noreferrer"
              >
                Pattern shop <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="home-hero__patterns" aria-label="Selected Shiny Moon Glass patterns">
            {heroPatterns.map((pattern, index) => (
              <div className="home-hero__pattern" key={pattern.id}>
                <Image
                  src={`/images/${pattern.image}`}
                  alt={`${pattern.title} stained glass pattern preview`}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 780px) 28vw, 12vw"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="home-difference" aria-labelledby="difference-title">
          <div className="section-shell">
            <div className="home-difference__intro">
              <div className="home-difference__heading">
                <div>
                  <p className="eyebrow">About our patterns</p>
                  <h2 id="difference-title">Quality patterns for fellow artists.</h2>
                </div>
              </div>
              <Image
                className="home-difference__preview"
                src="/images/about-pattern-previews.png"
                alt="A selection of Shiny Moon Glass pattern previews"
                width={680}
                height={280}
              />
            </div>
            <div className="home-difference__grid">
              <article>
                <strong>Two pattern sizes</strong>
                <p>Every design includes both Small and Large versions.</p>
              </article>
              <article>
                <strong>Four print-ready PDFs</strong>
                <p>Digital download—no physical item is shipped. A4, Letter, A3 and Tabloid files are ready to print.</p>
              </article>
              <article>
                <strong>Print large at home</strong>
                <p>Large patterns also include tiled A4 and Letter pages.</p>
              </article>
              <article>
                <strong>PNG files included</strong>
                <p>Transparent PNGs are ready for Cricut and similar tools.</p>
              </article>
              <article>
                <strong>Made for the Tiffany method</strong>
                <p>Consistent pattern lines support accurate cuts and soldering.</p>
              </article>
              <article>
                <strong>Hobbyist or Commercial</strong>
                <p>Choose the license that fits the way you plan to make.</p>
              </article>
            </div>
            <Link className="text-link" href="/patterns">
              More info about our patterns <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="home-patterns section-shell" aria-labelledby="featured-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Available on Etsy</p>
              <h2 id="featured-title">A few patterns you&apos;ll find in my Etsy shop.</h2>
            </div>
            <a className="text-link" href={etsyShopUrl} target="_blank" rel="noreferrer">
              Visit my Etsy shop <span aria-hidden="true">↗</span>
            </a>
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
              <p className="eyebrow">From the workbench</p>
              <h2 id="home-gallery-title">See the finished pieces.</h2>
              <p>
                Explore the gallery to see a selection of finished stained
                glass pieces made from Shiny Moon Glass patterns.
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
              <strong>Working With Mirrors</strong>
              <em>Read article →</em>
            </Link>
            <Link href="/articles/plant-propagation-stations">
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
              sharing glass-tested patterns with fellow stained glass artists.
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
