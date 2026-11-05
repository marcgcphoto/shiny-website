"use client";

import { Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
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
  { href: "/articles/working-with-mirrors", title: "Adding Mirrors to Stained Glass Projects" },
  { href: "/articles/plant-propagation-stations", title: "Plant Propagation Stations" },
];

type SiteHeaderProps = { etsyShopUrl?: string };

export function SiteHeader({ etsyShopUrl: shopUrl = etsyShopUrl }: SiteHeaderProps) {
  const pathname = usePathname();
  const isArticlesPage = pathname.startsWith("/articles/");

  return (
    <>
      <Disclosure as="header" className="site-header">
        {({ open, close }) => (
          <>
            <Link className="brand" href="/" aria-label="Shiny Moon Glass home" onClick={() => close()}>
              <Image src="/images/brand/shiny-logo-2026.png" alt="" width={44} height={44} priority />
              <span className="brand__name">Shiny Moon Glass</span>
            </Link>

            <nav className="site-nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link className={`site-nav__link${pathname === item.href ? " is-active" : ""}`} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
              <Popover className="article-menu">
                <PopoverButton className={`site-nav__article-toggle${isArticlesPage ? " is-active" : ""}`}>
                  Articles <span aria-hidden="true">+</span>
                </PopoverButton>
                <PopoverPanel className="article-menu__panel" anchor="bottom end">
                  {({ close: closeArticles }) => <>{articles.map((article) => (
                    <Link href={article.href} key={article.href} aria-current={pathname === article.href ? "page" : undefined} onClick={() => closeArticles()}>{article.title}</Link>
                  ))}</>}
                </PopoverPanel>
              </Popover>
              <a className="site-nav__etsy" href={shopUrl} target="_blank" rel="noreferrer">Shop <span aria-hidden="true">↗</span></a>
            </nav>

            <DisclosureButton className="site-mobile-toggle" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
              <span aria-hidden="true">{open ? "×" : "☰"}</span>
            </DisclosureButton>
            <DisclosurePanel as="nav" className="site-mobile-nav" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link className={`site-nav__link${pathname === item.href ? " is-active" : ""}`} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => close()}>{item.label}</Link>
              ))}
              <Disclosure as="div" className="site-mobile-articles">
                {({ open: articlesOpen }) => (
                  <>
                    <DisclosureButton className={`site-nav__article-toggle${isArticlesPage ? " is-active" : ""}`}>
                      Articles <span aria-hidden="true">{articlesOpen ? "−" : "+"}</span>
                    </DisclosureButton>
                    <DisclosurePanel className="site-mobile-article-links">
                      {articles.map((article) => (
                        <Link href={article.href} key={article.href} aria-current={pathname === article.href ? "page" : undefined} onClick={() => close()}>{article.title}</Link>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <a className="site-nav__etsy" href={shopUrl} target="_blank" rel="noreferrer" onClick={() => close()}>Shop <span aria-hidden="true">↗</span></a>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <div className="header-divider" aria-hidden="true" />
    </>
  );
}
