import Image from "next/image";
import Link from "next/link";

const articles = [
  { href: "/articles/working-with-mirrors", title: "Working With Mirrors" },
  {
    href: "/articles/plant-propagation-stations",
    title: "Plant Propagation Stations",
  },
];

type SiteHeaderProps = {
  articlePage?: boolean;
  etsyShopUrl?: string;
};

export function SiteHeader({
  articlePage = false,
  etsyShopUrl,
}: SiteHeaderProps) {
  return (
    <>
      <header className={`site-header${articlePage ? " site-header--article" : ""}`}>
        <Link className="brand" href="/" aria-label="Shiny Moon Glass home">
          <Image
            src="/images/brand/shiny-logo-2026.png"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span className="brand__name">Shiny Moon Glass</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {articlePage ? (
            <Link className="site-nav__home" href="/">
              Home
            </Link>
          ) : (
            <>
              <Link href="/patterns">Patterns</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </>
          )}

          <details className="article-menu">
            <summary>
              Articles <span aria-hidden="true">⌄</span>
            </summary>
            <div className="article-menu__panel">
              {articles.map((article) => (
                <Link href={article.href} key={article.href}>
                  {article.title}
                </Link>
              ))}
            </div>
          </details>

          {!articlePage && etsyShopUrl ? (
            <a
              className="site-nav__etsy"
              href={etsyShopUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Etsy <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </nav>
      </header>
      <div className="header-divider" aria-hidden="true" />
    </>
  );
}
