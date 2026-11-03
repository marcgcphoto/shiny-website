"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const etsyShopUrl = "https://shinymoonglass.etsy.com";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/patterns", label: "Patterns" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const articles = [
  { href: "/articles/working-with-mirrors", title: "Working With Mirrors" },
  {
    href: "/articles/plant-propagation-stations",
    title: "Plant Propagation Stations",
  },
];

type SiteHeaderProps = {
  etsyShopUrl?: string;
};

export function SiteHeader({ etsyShopUrl: shopUrl = etsyShopUrl }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isArticleMenuOpen, setIsArticleMenuOpen] = useState(false);
  const articleMenuRef = useRef<HTMLDivElement>(null);
  const isArticlesPage = pathname.startsWith("/articles/");

  useEffect(() => {
    function closeArticleMenu(event: MouseEvent) {
      if (!articleMenuRef.current?.contains(event.target as Node)) {
        setIsArticleMenuOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsArticleMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeArticleMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeArticleMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <Link
          className="brand"
          href="/"
          aria-label="Shiny Moon Glass home"
          onClick={() => setIsArticleMenuOpen(false)}
        >
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
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                className={`site-nav__link${isActive ? " is-active" : ""}`}
                href={item.href}
                key={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsArticleMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="article-menu" ref={articleMenuRef}>
            <button
              className={`site-nav__article-toggle${isArticlesPage ? " is-active" : ""}`}
              type="button"
              aria-expanded={isArticleMenuOpen}
              aria-controls="article-menu-panel"
              onClick={() => setIsArticleMenuOpen((isOpen) => !isOpen)}
            >
              Articles <span aria-hidden="true">⌄</span>
            </button>
            {isArticleMenuOpen ? (
              <div className="article-menu__panel" id="article-menu-panel">
                {articles.map((article) => (
                  <Link
                    href={article.href}
                    key={article.href}
                    onClick={() => setIsArticleMenuOpen(false)}
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <a
            className="site-nav__etsy"
            href={shopUrl}
            target="_blank"
            rel="noreferrer"
          >
            Shop <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <div className="header-divider" aria-hidden="true" />
    </>
  );
}
