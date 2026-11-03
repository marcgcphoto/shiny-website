import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

export const metadata: Metadata = {
  title: "Contact | Shiny Moon Glass",
  description: "Get in touch with Shiny Moon Glass.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader articlePage />
      <main className="contact-page">
        <section className="contact-page__intro">
          <div className="contact-page__intro-inner section-shell">
            <div>
              <h1>Get in touch</h1>
              <p>
                Need help with a pattern or want to say hello? Here&apos;s the best
                way to reach Shiny Moon Glass.
              </p>
            </div>
            <Image
              className="contact-page__intro-art"
              src="/images/contact-dolphins.png"
              alt="Dolphin stained glass suncatcher"
              width={210}
              height={259}
              priority
            />
          </div>
        </section>

        <section className="contact-page__details section-shell">
          <div>
            <p className="eyebrow">Etsy orders</p>
            <h2>Questions about a purchase?</h2>
            <p>
              Please send a message through Etsy. It&apos;s the quickest way to
              find your order and help with a download or pattern question.
            </p>
            <a
              className="button button--primary"
              href="https://shinymoonglass.etsy.com"
              target="_blank"
              rel="noreferrer"
            >
              Message on Etsy <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div>
            <p className="eyebrow">General enquiries</p>
            <h2>For everything else</h2>
            <p>
              For general questions, collaborations or anything not related to
              an Etsy order, you can email me directly.
            </p>
            <a className="contact-page__email" href="mailto:info@shinymoonglass.com">
              info@shinymoonglass.com
            </a>
          </div>
        </section>
      </main>
      <SocialFollow />
      <SiteFooter />
    </>
  );
}
