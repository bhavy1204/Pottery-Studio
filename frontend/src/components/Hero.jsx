import { useEffect, useState } from "react";
import { site, heroImages, waLink, defaultMessage } from "../data/siteData";
import SmartImage from "./SmartImage";

const delay = (s) => ({ animationDelay: `${s}s` });
const INTERVAL = 4500;

function ArchSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroImages.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full border-2 border-clay" aria-hidden="true" />

      {/* Arch window; the slides move sideways inside it */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full bg-sand">
        <div
          className="flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroImages.map((img, i) => (
            <div key={img.src + i} className="h-full w-full shrink-0" aria-hidden={i !== index}>
              <SmartImage
                src={img.src}
                alt={img.alt}
                eager={i === 0}
                widths={[500, 800, 1000]}
                sizes="(min-width: 768px) 30vw, 80vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="relative mt-7 flex justify-center gap-2" role="group" aria-label="Choose slide">
          {heroImages.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-terracotta" : "w-2 bg-clay/60 hover:bg-clay"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-12 md:pb-28 md:pt-40">
        <div className="md:col-span-7">
          <h1
            className="rise font-cormorant text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            style={delay(0.05)}
          >
            Made by hand,
            <br />
            shaped with patience.
          </h1>
          <p className="rise mt-7 max-w-md text-lg leading-relaxed text-ink-soft" style={delay(0.25)}>
            {site.name} has been working with clay in {site.city.split(",")[0]} for more than fifteen years,
            making pieces for homes and hotels, and teaching anyone who wants to try.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={delay(0.4)}>
            <a
              href={waLink(defaultMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-terracotta px-7 py-3 font-medium text-cream transition-colors hover:bg-terracotta-dark"
            >
              Book a class
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-ink/25 px-7 py-3 font-medium transition-colors hover:border-terracotta hover:text-terracotta"
            >
              See our work
            </a>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-sm md:col-span-5" style={delay(0.3)}>
          <ArchSlider />
        </div>
      </div>
    </section>
  );
}

