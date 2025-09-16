"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Drop this file into your Next.js project (e.g., app/components/MarketExperience.tsx)
 * TailwindCSS required. Icons from lucide-react.
 *
 * Usage:
 * <MarketExperience images={[
 *   { src: "/images/lounge.jpg", alt: "Exclusive lounge" },
 *   { src: "/images/pitches.jpg", alt: "SME Spotlight Pitches" },
 *   { src: "/images/networking.jpg", alt: "Networking" },
 *   { src: "/images/showcase.jpg", alt: "Product showcase" },
 *   // ...more
 * ]} />
 */

export type MarketImage = { src: string; alt?: string };

type Props = {
  images?: MarketImage[];
};

const fallbackImages: MarketImage[] = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    alt: "Networking in a lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    alt: "Speaker on stage",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop",
    alt: "Team discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop",
    alt: "Product tasting",
  },
  {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    alt: "Demo showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop",
    alt: "Curated vendor mix",
  },
];

export default function MarketExperience({ images = fallbackImages }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);

  const updatePagination = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const count = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    setPageCount(count);
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };

    const ro = new ResizeObserver(() => updatePagination());
    ro.observe(el);

    el.addEventListener("scroll", onScroll, { passive: true });
    updatePagination();

    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
    };
  }, [updatePagination, images.length]);

  const scrollToPage = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(i, pageCount - 1));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  const next = () => scrollToPage(page + 1);
  const prev = () => scrollToPage(page - 1);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 h-[600px]">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-5">
          <h2 className="text-lg font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
            <span className="block">More Than a Market:</span>
            <span className="block mt-1">An Unforgettable</span>
            <span className="block">Market Experience</span>
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-7 text-gray-600">
            <p>
              Connect with corporate buyers and partners in our exclusive lounge,
              featuring a curated vendor mix to foster powerful B2B opportunities.
            </p>
            <p>
              Be entertained and inspired by live demos, fashion showcases, product
              tastings, and illuminating SME spotlight pitches.
            </p>
          </div>
        </div>

        {/* Gallery / Carousel */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="relative">
            {/* Track */}
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-8 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
              aria-label="Market experience gallery"
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="snap-start shrink-0 basis-[85%] sm:basis-[65%] md:basis-[55%] lg:basis-[40%] xl:basis-[30%]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-200">
                    {/* Use <Image> if preferred; <img> keeps this single-file and config-free */}
                    <img
                      src={img.src}
                      alt={img.alt ?? `Gallery item ${idx + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Controls + Dots */}
            <div className="mt-2 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="ml-auto flex items-center gap-2 pr-1">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide group ${i + 1}`}
                    onClick={() => scrollToPage(i)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === page ? "bg-gray-900" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
