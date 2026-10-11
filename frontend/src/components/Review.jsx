import { Star } from "@phosphor-icons/react";
import { reviews } from "../data/siteData";
import SmartImage from "./SmartImage";

function Card({ r }) {
  const initials = r.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <figure className="w-80 shrink-0 rounded-2xl border border-line bg-cream p-6 md:w-96">
      <div className="flex items-center gap-4">
        {r.image ? (
          <SmartImage
            src={r.image}
            alt=""
            widths={[96, 160]}
            sizes="48px"
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay font-gloock text-cream">
            {initials}
          </span>
        )}
        <div>
          <figcaption className="font-medium">{r.name}</figcaption>
          <div className="mt-1 flex gap-0.5 text-terracotta" aria-label={`${r.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} weight={i < r.rating ? "fill" : "regular"} />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="mt-4 leading-relaxed text-ink-soft">{r.text}</blockquote>
    </figure>
  );
}

export default function Reviews() {
  // Duplicate the list so the loop is seamless
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-gloock text-4xl leading-tight md:text-5xl">Kind words</h2>
      </div>
      <div className="marquee mt-12 overflow-hidden">
        <div className="marquee-track flex gap-6 px-3">
          {loop.map((r, i) => (
            <div key={i} aria-hidden={i >= reviews.length}>
              <Card r={r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



