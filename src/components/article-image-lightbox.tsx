"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function ArticleImageLightbox({ src, alt, sizes, className = "", fill, width, height }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={`article-image-trigger ${fill ? "article-image-trigger--fill" : ""} ${className}`}
        aria-label={`Enlarge image: ${alt}`}
        onClick={() => dialog.current?.showModal()}
      >
        {fill ? (
          <Image src={src} alt={alt} fill sizes={sizes} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />
        )}
      </button>
      <dialog
        ref={dialog}
        className="article-image-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button type="button" className="article-image-dialog__close" aria-label="Close image viewer" onClick={() => dialog.current?.close()}>×</button>
        <div className="article-image-dialog__image">
          <Image src={src} alt={alt} fill sizes="100vw" />
        </div>
      </dialog>
    </>
  );
}
