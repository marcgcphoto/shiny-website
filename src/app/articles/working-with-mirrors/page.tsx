import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialFollow } from "@/components/social-follow";

export const metadata: Metadata = {
  title: "Adding Mirrors to Stained Glass Projects | Shiny Moon Glass",
  description: "A Shiny Moon Glass guide to working with mirrors in stained glass projects.",
};

export default function WorkingWithMirrorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="article-page article-page--mirrors section-shell">
        <p className="eyebrow">Shiny Moon Glass · Article</p>
        <h1>Adding Mirrors to Stained Glass Projects</h1>
        <article className="article-page__content">
          <p>
            Working with mirrors is very similar to working with regular stained
            glass, but the reflective backing needs a little extra care. In this
            guide, I&apos;ll walk you through the process, from choosing and cutting
            your mirror to protecting it during soldering and cleaning.
          </p>

          <section>
            <h2>Choosing your mirror</h2>
            <p>
              For most stained glass projects, look for mirror glass around
              <strong> 3–4 mm thick</strong>. Your stained glass supplier is a
              good place to start: the quality of the backing matters, and a
              durable coating makes the mirror easier to work with.
            </p>
            <p>
              Other mirrors may also work, but their backing can vary in quality.
              Stained glass suppliers may also offer decorative mirrors with
              different colours and finishes, so you can choose one that suits
              your project.
            </p>
          </section>

          <section>
            <h2>Cutting the mirror</h2>
            <p>
              Always score and cut the mirror from the <strong>front</strong>,
              the reflective side. If you score the painted back, you won&apos;t
              score the glass itself. Trying to break it along that line can
              cause the mirror to break unpredictably instead of following your
              intended cut.
            </p>
            <p>
              Before you start, make sure your work surface is clean. If it
              could scratch the back of the mirror, place a soft cloth or an old
              T-shirt underneath it. Keeping the backing intact throughout the
              process will help prevent visible marks in the finished piece.
            </p>
            <p><strong>Using a Cricut or a similar machine?</strong></p>
            <p>
              If you normally apply your pattern stickers to the smooth side of
              your glass and cut them using Mirror Mode, you&apos;ll need to change
              that setting for the mirror pieces. Because the mirror is cut from
              the opposite side, cut the stickers for those pieces <strong>without
              Mirror Mode</strong>.
            </p>
            <p>
              Check the orientation before cutting, especially if the mirror
              piece is asymmetrical.
            </p>
          </section>

          <section>
            <h2>Optional: protect the back</h2>
            <p>
              Once the mirror is cut, you can add a protective coating to the
              painted back to help protect it while you work.
            </p>
            <p>
              You can also coat the mirror before cutting, but applying the
              protection afterwards means you only use it on the pieces you need.
            </p>
            <p>
              I use{" "}
              <a className="article-page__inline-link" href="https://link.amazon/B05UyopcM" target="_blank" rel="noreferrer">
                this protective product
              </a><sup>1</sup>. Whichever product you choose, follow its
              manufacturer&apos;s instructions and let it dry completely before
              continuing to work with the mirror.
            </p>
          </section>

          <section>
            <h2>Grinding</h2>
            <p>
              When grinding the mirror, continue to protect its backing from
              scratches. Spread a soft cloth or an old T-shirt over the grinder
              surface and place the mirror on top. Keep the fabric well clear
              of the moving grinding bit.
            </p>
            <p>
              Use a <strong>fine-grit grinding bit</strong> and work carefully to
              reduce the risk of chipping the backing along the edge. Take your
              time as you work around the edge.
            </p>
          </section>

          <section>
            <h2>Sealing the edges</h2>
            <p>
              After grinding, seal the mirror edges before applying copper foil.
              This helps prevent flux from reaching the reflective backing and
              causing corrosion, which can appear as dark marks around the edge
              of the mirror.
            </p>
            <p>
              I use a mirror protector from CREARTEC, which is no longer
              manufactured. If you cannot find a product made for sealing mirror
              edges, some makers use clear nail polish. I haven&apos;t tried it
              myself, so I recommend testing it on a small offcut first.
            </p>
            <p>
              Apply the sealant along the edge, covering the junction where the
              glass meets the backing. I extend it slightly onto the painted
              back as well, to cover any small areas affected by grinding. Let
              the sealant dry completely before moving on.
            </p>
          </section>

          <section>
            <h2>Foiling</h2>
            <p>
              Once the sealant is fully dry, apply the copper foil as you
              normally would. There are no special steps: wrap the edges,
              burnish the foil and prepare the pieces for soldering.
            </p>
          </section>

          <section>
            <h2>Soldering</h2>
            <p>
              Solder your project as you normally would. Whenever possible, use
              an <strong>acid-free flux suitable for stained glass</strong>, as
              it is gentler on the mirror backing.
            </p>
          </section>

          <section>
            <h2>Cleaning the finished piece</h2>
            <p>
              Clean the finished piece carefully, taking care not to scratch
              either the front or the back of the mirror.
            </p>
            <p>
              Be especially cautious with <strong>steel wool</strong>. If it
              scratches or removes part of the backing, the damage will be
              visible from the front as a transparent or dark spot. The
              reflective layer sits beneath the protective paint, so damaging
              those layers can leave an area that no longer reflects properly.
            </p>
          </section>
        </article>
      </main>
      <SocialFollow />
      <aside className="article-page__affiliate section-shell">
            <p className="article-page__disclosure">
              <sup>1</sup> Some links on this page are affiliate links. If you
              purchase something through them, I may earn a small commission at
              no extra cost to you. Thank you for supporting my work!
            </p>
      </aside>
      <SiteFooter />
    </>
  );
}
