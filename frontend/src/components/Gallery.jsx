import { useCallback, useEffect, useState } from "react";
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { gallery, galleryCategories } from "../data/siteData";
import SmartImage from "./SmartImage";

const BATCH = 12; // images added each time

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(BATCH);
  const [index, setIndex] = useState(null); // lightbox position

  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);
  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  const changeCategory = (c) => {
    setActive(c);
    setVisible(BATCH);
  };

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-gloock text-4xl leading-tight md:text-5xl">From our shelves</h2>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => changeCategory(c)}
              aria-pressed={active === c}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                active === c
                  ? "border-terracotta bg-terracotta text-cream"
                  : "border-line text-ink-soft hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Fixed-ratio tiles: the layout never jumps while images load or new batches arrive */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {shown.map((g, i) => (
            <button
              key={`${active}-${i}`}
              onClick={() => setIndex(i)}
              className="group aspect-[4/5] overflow-hidden rounded-xl bg-sand"
              aria-label={`Open ${g.alt}`}
            >
              <SmartImage
                src={g.src}
                alt={g.alt}
                widths={[400, 700, 1000]}
                sizes="(min-width: 768px) 30vw, 48vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>

        {items.length > BATCH && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-sm text-ink-soft">
              Showing {shown.length} of {items.length}
            </p>
            <div className="flex gap-3">
              {hasMore && (
                <button
                  onClick={() => setVisible((v) => v + BATCH)}
                  className="rounded-full border border-terracotta px-7 py-3 font-medium text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
                >
                  Show more
                </button>
              )}
              {visible > BATCH && (
                <button
                  onClick={() => {
                    setVisible(BATCH);
                    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full border border-line px-7 py-3 font-medium text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
                >
                  Show less
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {index !== null && items[index] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[index].alt}
          onClick={close}
        >
          <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-cream">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous"
            className="absolute left-3 text-cream md:left-8"
          >
            <CaretLeft size={36} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-h-full">
            <SmartImage
              src={items[index].src}
              alt={items[index].alt}
              widths={[800, 1400, 2000]}
              sizes="90vw"
              eager
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next"
            className="absolute right-3 text-cream md:right-8"
          >
            <CaretRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}



