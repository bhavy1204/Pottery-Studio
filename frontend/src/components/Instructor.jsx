import { instructors } from "../data/siteData";
import SmartImage from "./SmartImage";
import Reveal from "./Reveal";

export default function Instructors() {
  return (
    <section id="instructors" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl font-gloock text-4xl leading-tight md:text-5xl">The hands behind the clay</h2>

        <div className="mt-16 space-y-20 md:space-y-28">
          {instructors.map((p, i) => (
            <Reveal key={p.name} className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
                <SmartImage
                  src={p.image}
                  alt={p.name}
                  widths={[500, 800, 1000]}
                  sizes="(min-width: 768px) 38vw, 90vw"
                  className="unveil mx-auto aspect-[3/4] w-full max-w-sm rounded-t-full bg-line object-cover"
                />
              </div>
              <div className={`fade-in md:col-span-7 ${i % 2 ? "md:order-1" : ""}`}>
                <h3 className="font-gloock text-3xl">{p.name}</h3>
                <p className="mt-1 text-olive">{p.role}</p>
                <div className="mt-6 max-w-lg space-y-4 leading-relaxed text-ink-soft">
                  {p.bio.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


