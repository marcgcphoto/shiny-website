import Image from "next/image";
import Link from "next/link";

const etsyShopUrl = "https://www.etsy.com/shop/shinymoonglass";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner section-shell">
        <Link className="brand" href="/" aria-label="Shiny Moon Glass home">
          <Image
            src="/images/brand/shiny-logo-2026.png"
            alt=""
            width={40}
            height={40}
          />
          <span className="brand__name">Shiny Moon Glass</span>
        </Link>

        <p>Patterns, finished glass and resources for fellow artists.</p>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/patterns">Patterns</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href={etsyShopUrl} target="_blank" rel="noreferrer">
            Etsy <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
