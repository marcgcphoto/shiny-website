import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const etsyShopUrl = "https://www.etsy.com/shop/shinymoonglass";
const pinterestUrl = "https://www.pinterest.com/simpleglasspatterns/";

const pinterestFeatures = [
  {
    alt: "Tulip Flower stained glass pattern pin",
    image: "/images/pinterest/tulip-flower-pin.jpg",
    pinUrl: "https://www.pinterest.com/pin/1097400634223601160/",
  },
  {
    alt: "Underwater Shark stained glass pattern pin",
    image: "/images/pinterest/underwater-shark-pin.jpg",
    pinUrl: "https://www.pinterest.com/pin/1097400634227451151/",
  },
  {
    alt: "Oyster With Pearl stained glass pattern pin",
    image: "/images/pinterest/oyster-with-pearl-pin.jpg",
    pinUrl: "https://www.pinterest.com/pin/1097400634223964772/",
  },
];

type FeaturedPattern = {
  category: string;
  image: string;
  listingUrl: string;
  pieces?: number;
  size?: string;
  title: string;
};

const featuredPatterns: FeaturedPattern[] = [
  {
    category: "Word pattern",
    image: "/images/thumbs/open-panel.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4492430775",
    pieces: 29,
    size: "25 × 15 cm · 9.8 × 5.9 in",
    title: "Open Panel",
  },
  {
    category: "Pattern",
    image: "/images/thumbs/sitting-cat.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4412856958",
    pieces: 39,
    size: "15 × 21 cm · 5.9 × 8.3 in",
    title: "Sitting Cat",
  },
  {
    category: "Pattern",
    image: "/images/thumbs/celtic-love-knot.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4423576220",
    pieces: 33,
    size: "16 × 16 cm · 6.3 × 6.3 in",
    title: "Celtic Love Knot",
  },
  {
    category: "Mirror pattern",
    image: "/images/thumbs/ocean-wave-mirror.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4414174483",
    pieces: 10,
    size: "17 × 22 cm · 6.7 × 8.7 in",
    title: "Ocean Wave Mirror",
  },
  {
    category: "Word Pattern",
    image: "/images/thumbs/love-panel.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4431129817",
    pieces: 27,
    size: "25 × 15 cm · 9.8 × 5.9 in",
    title: "Love Panel",
  },
  {
    category: "Propagation station",
    image: "/images/thumbs/abstract-propagation-station.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4434921006",
    pieces: 13,
    size: "12 × 23 cm · 4.7 × 9 in",
    title: "Abstract Propagation Station",
  },
  {
    category: "Bundle",
    image: "/images/thumbs/propagation-station-bundle.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4517825210",
    title: "Propagation Station Bundle",
  },
  {
    category: "Bundle",
    image: "/images/thumbs/celtic-bundle.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4473032563",
    title: "Celtic Bundle",
  },
  {
    category: "Bundle",
    image: "/images/thumbs/geometric-mirror-bundle.jpg",
    listingUrl: "https://simpleglasspatterns.etsy.com/listing/4510324909",
    title: "Geometric Mirror Bundle",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader etsyShopUrl={etsyShopUrl} />

      <main id="top">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Digital patterns for stained glass</p>
            <h1 id="hero-title">
              Made for makers who love <strong>stained glass</strong>.
            </h1>
            <p className="hero__intro">
              Hand-designed for clean, achievable cuts with basic tools—no
              specialised ring saw required. Each pattern is approachable for
              first projects and rewarding for makers ready to refine their
              skills, with detail that feels satisfying without becoming
              difficult to make.
            </p>
            <div className="hero__actions">
              <a
                className="button button--primary"
                href={etsyShopUrl}
                target="_blank"
                rel="noreferrer"
              >
                Browse patterns on Etsy <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#featured-patterns">
                See featured patterns <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="A selection of stained glass pattern previews"
          >
            <div className="hero-art__image">
              <Image
                src="/images/hero-pattern-samples.png"
                alt="Four printable stained glass pattern previews: an eagle, yin and yang, sailing boat, and sitting cat"
                fill
                priority
                sizes="(max-width: 780px) 90vw, 42vw"
              />
            </div>
          </div>
        </section>

        <section
          className="value-section"
          aria-labelledby="pattern-includes-title"
        >
          <div className="section-shell value-section__heading">
            <h2 id="pattern-includes-title">
              What is included in each pattern
            </h2>
          </div>
          <div className="value-strip">
            <div className="section-shell value-strip__grid">
              <p>
                <strong>Instant digital download</strong>
                <span>Start making—no postal delivery</span>
              </p>
              <p>
                <strong>PDF + Cricut files</strong>
                <span>A4, US Letter, and transparent PNG</span>
              </p>
              <p>
                <strong>Made for easier cutting</strong>
                <span>Numbered pieces and a 1 mm / 0.04 in line gap</span>
              </p>
              <p>
                <strong>Commercial licence included</strong>
                <span>Finished pieces can be sold</span>
              </p>
            </div>
          </div>
          <div className="section-shell pattern-includes">
            <p className="pattern-includes__lead">
              Everything is ready to print, cut, and start crafting.
            </p>
            <div className="pattern-includes__main">
              <ul>
                <li>
                  <strong>Printable PDF files</strong> in US Letter and A4 sizes
                </li>
                <li>
                  <strong>Numbered pattern</strong> for easy glass cutting
                </li>
                <li>
                  <strong>Designed for the Tiffany method</strong>, with a 1 mm
                  (0.04 in) line gap for precise cuts and smooth soldering
                </li>
                <li>
                  <strong>Colour reference thumbnail</strong> to guide your
                  glass choices
                </li>
                <li>
                  <strong>Transparent PNG file</strong> for Cricut and other
                  cutting machines
                </li>
                <li>
                  <strong>Dashed grey lines</strong> showing the ideal placement
                  for hanging rings
                </li>
                <li>
                  <strong>Hobby, personal, and commercial licence</strong>{" "}
                  included
                </li>
                <li>
                  <strong>30% discount code</strong> for your next purchase
                </li>
              </ul>
            </div>
            <aside
              className="pattern-includes__extras"
              aria-label="Additional files for specific pattern types"
            >
              <p>When applicable</p>
              <ul>
                <li>
                  <strong>Mirror guide PDF</strong> explaining how to work with
                  mirrors
                </li>
                <li>
                  <strong>Propagation station guide PDF</strong> explaining how
                  to assemble it
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section
          className="featured section-shell"
          id="featured-patterns"
          aria-labelledby="featured-title"
        >
          <div className="section-heading">
            <div>
              <h2 id="featured-title">A few of our patterns & bundles</h2>
            </div>
            <a
              className="text-link"
              href={etsyShopUrl}
              target="_blank"
              rel="noreferrer"
            >
              See the full Etsy shop <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="pattern-grid">
            {featuredPatterns.map((pattern) => (
              <a
                className="pattern-card"
                href={pattern.listingUrl}
                key={pattern.listingUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="pattern-card__image">
                  <Image
                    src={pattern.image}
                    alt={`${pattern.title} stained glass pattern preview`}
                    fill
                    unoptimized
                    sizes="(max-width: 440px) 90vw, (max-width: 780px) 45vw, 30vw"
                  />
                </div>
                <span className="pattern-card__footer">
                  <span className="pattern-card__details">
                    <small>{pattern.category}</small>
                    <strong>{pattern.title}</strong>
                    {(pattern.size || pattern.pieces) && (
                      <span className="pattern-card__meta">
                        {pattern.size && <em>{pattern.size}</em>}
                        {pattern.pieces && <em>{pattern.pieces} pieces</em>}
                      </span>
                    )}
                  </span>
                  <span aria-hidden="true">View on Etsy ↗</span>
                </span>
              </a>
            ))}
          </div>

          <div className="featured__cta">
            <p>Discover the full collection, bundles, and new releases.</p>
            <a
              className="button button--primary"
              href={etsyShopUrl}
              target="_blank"
              rel="noreferrer"
            >
              Browse the full Etsy shop <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          className="pinterest section-shell"
          aria-labelledby="pinterest-title"
        >
          <div className="pinterest__mosaic">
            {pinterestFeatures.map((feature) => (
              <a
                className="pinterest__tile"
                href={feature.pinUrl}
                key={feature.pinUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 780px) 90vw, 42vw"
                />
              </a>
            ))}
          </div>
          <div className="pinterest__copy">
            <h2 id="pinterest-title">
              New patterns, straight to your Pinterest.
            </h2>
            <p>
              Follow Simple Glass Patterns on Pinterest to be among the first to
              spot new pattern releases, save ideas for later, and keep
              inspiration for your next stained glass project close at hand.
            </p>
            <a
              className="button button--primary"
              href={pinterestUrl}
              target="_blank"
              rel="noreferrer"
            >
              Follow on Pinterest <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          className="about section-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">The studio</p>
            <h2 id="about-title">Made in a small workshop near Barcelona.</h2>
          </div>
          <div className="about__body">
            <p>
              Shiny Moon Glass brings together thoughtfully designed stained
              glass patterns, finished pieces and practical resources for
              fellow artists.
            </p>
            <p>
              Each pattern begins as a real piece at the workbench, with the
              same attention to detail carried through to the finished glass.
            </p>
            <a className="text-link" href="/about">
              Meet the maker <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section
          className="contact section-shell"
          id="contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">Get in touch</h2>
          <p>
            Questions about an Etsy purchase are best handled through Etsy. For
            everything else, you can find the right way to reach me on the
            contact page.
          </p>
          <div className="contact__links">
            <a className="button button--primary" href="/contact">
              Contact Shiny Moon Glass <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
