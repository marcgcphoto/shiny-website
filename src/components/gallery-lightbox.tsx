"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export type GalleryItem = {
  commercialUrl: string;
  height: number;
  id: string;
  image: string;
  patternTitle: string;
  width: number;
};

type GalleryLightboxProps = {
  items: GalleryItem[];
};

export function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = selectedIndex === null ? null : items[selectedIndex];
  const photos = items.map((item) => ({
    ...item,
    src: `/images/${item.image}`,
    alt: `${item.patternTitle} finished stained glass piece`,
  }));

  function showPrevious() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex - 1 + items.length) % items.length,
    );
  }

  function showNext() {
    setSelectedIndex((currentIndex) =>
      currentIndex === null ? null : (currentIndex + 1) % items.length,
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null ? null : (currentIndex - 1 + items.length) % items.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) =>
          currentIndex === null ? null : (currentIndex + 1) % items.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length, selectedIndex]);

  return (
    <>
      <section className="gallery-page__grid section-shell" aria-label="Finished stained glass gallery">
        <RowsPhotoAlbum
          photos={photos}
          targetRowHeight={(containerWidth) => (containerWidth < 620 ? 190 : 270)}
          rowConstraints={{ minPhotos: 1, maxPhotos: 3, singleRowMaxHeight: 350 }}
          spacing={12}
          padding={0}
          sizes={{
            size: "1200px",
            sizes: [{ viewport: "(max-width: 1248px)", size: "calc(100vw - 48px)" }],
          }}
          onClick={({ index }) => setSelectedIndex(index)}
          render={{
            extras: (_, { photo }) => (
              <span className="gallery-page__item-label">
                <strong>{photo.patternTitle}</strong>
                <em>View piece ↗</em>
              </span>
            ),
          }}
        />
      </section>

      {selectedItem ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.patternTitle} image viewer`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedIndex(null);
          }}
        >
          <button
            className="gallery-lightbox__close"
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            className="gallery-lightbox__control gallery-lightbox__control--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="gallery-lightbox__content">
            <div className="gallery-lightbox__image">
              <Image
                src={`/images/${selectedItem.image}`}
                alt={`${selectedItem.patternTitle} finished stained glass piece`}
                fill
                sizes="100vw"
                priority
              />
            </div>
            <p>
              <span className="gallery-lightbox__title">
                {selectedItem.patternTitle}
                <span className="gallery-lightbox__count">
                  {(selectedIndex ?? 0) + 1} / {items.length}
                </span>
              </span>
              <a
                className="gallery-lightbox__cta"
                href={selectedItem.commercialUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get the pattern <span aria-hidden="true">↗</span>
              </a>
            </p>
          </div>
          <button
            className="gallery-lightbox__control gallery-lightbox__control--next"
            type="button"
            onClick={showNext}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}
