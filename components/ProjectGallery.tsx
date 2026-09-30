"use client";


import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  projectTitle: string;
};

export default function ProjectGallery({
  images,
  projectTitle,
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);
	
	
	const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);

const minimumSwipeDistance = 50;

function handleTouchStart(
  event: React.TouchEvent<HTMLDivElement>
) {
  touchEndX.current = null;
  touchStartX.current = event.targetTouches[0].clientX;
}

function handleTouchMove(
  event: React.TouchEvent<HTMLDivElement>
) {
  touchEndX.current = event.targetTouches[0].clientX;
}

function handleTouchEnd() {
  if (
    touchStartX.current === null ||
    touchEndX.current === null
  ) {
    return;
  }

  const distance =
    touchStartX.current - touchEndX.current;

  const swipedLeft =
    distance > minimumSwipeDistance;

  const swipedRight =
    distance < -minimumSwipeDistance;

  if (swipedLeft) {
    nextImage();
  }

  if (swipedRight) {
    previousImage();
  }

  touchStartX.current = null;
  touchEndX.current = null;
}

  const isOpen = selectedIndex !== null;

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function previousImage() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  }

  function nextImage() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Lightbox açıkken arka sayfanın kaymasını engelle
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [isOpen, selectedIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      {/* GALLERY GRID */}
      <div className="grid gap-5 md:grid-cols-12">
        {images.map((image, index) => {
          const large =
            index === 0 ||
            index === 3 ||
            index === 6;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`${projectTitle} fotoğrafı ${
                index + 1
              } büyüt`}
              className={`
                group relative block overflow-hidden
                bg-neutral-200 text-left
                ${
                  large
                    ? "aspect-[16/10] md:col-span-12"
                    : "aspect-[4/3] md:col-span-6"
                }
              `}
            >
              <Image
                src={image}
                alt={`${projectTitle} proje fotoğrafı ${
                  index + 1
                }`}
                fill
                sizes={
                  large
                    ? "100vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0
                  transition-colors
                  duration-300
                  group-hover:bg-black/15
                "
              />

              {/* Expand icon */}
              <div
                className="
                  absolute right-5 top-5
                  flex h-11 w-11
                  translate-y-2
                  items-center justify-center
                  bg-white text-black
                  opacity-0
                  shadow-lg
                  transition-all
                  duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <Expand size={17} />
              </div>

              {/* Number */}
              <span
                className="
                  absolute bottom-5 left-5
                  text-xs font-medium
                  tracking-[0.15em]
                  text-white
                  opacity-0
                  drop-shadow-lg
                  transition-opacity
                  group-hover:opacity-100
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
  className="
    fixed inset-0 z-[9999]
    flex touch-pan-y items-center justify-center
    bg-black/95
  "
  role="dialog"
  aria-modal="true"
  aria-label={`${projectTitle} fotoğraf galerisi`}
  onClick={closeLightbox}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
          {/* TOP BAR */}
          <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-8">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                {projectTitle}
              </p>

              <p className="mt-1 text-sm text-white/70">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeLightbox();
              }}
              aria-label="Galeriyi kapat"
              className="
                flex h-11 w-11
                items-center justify-center
                border border-white/20
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              h-[72vh]
              w-[calc(100%-120px)]
              max-w-[1500px]
              md:h-[82vh]
              md:w-[calc(100%-220px)]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <Image
              src={images[selectedIndex]}
              alt={`${projectTitle} proje fotoğrafı ${
                selectedIndex + 1
              }`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* PREVIOUS */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Önceki fotoğraf"
              className="
                absolute left-4 top-1/2 z-30
				hidden md:flex
                flex h-12 w-12
                -translate-y-1/2
                items-center justify-center
                border border-white/20
                bg-black/20
                text-white
                backdrop-blur
                transition
                hover:bg-white
                hover:text-black
                md:left-8
                md:h-14
                md:w-14
              "
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* NEXT */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Sonraki fotoğraf"
              className="
                absolute right-4 top-1/2 z-30
				hidden md:flex
                flex h-12 w-12
                -translate-y-1/2
                items-center justify-center
                border border-white/20
                bg-black/20
                text-white
                backdrop-blur
                transition
                hover:bg-white
                hover:text-black
                md:right-8
                md:h-14
                md:w-14
              "
            >
              <ChevronRight size={25} />
            </button>
          )}

          {/* MOBILE HINT */}
         <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-[0.15em] text-white/30 md:hidden">
  FOTOĞRAFLAR İÇİN SAĞA / SOLA KAYDIRIN
</p>
        </div>
      )}
    </>
  );
}