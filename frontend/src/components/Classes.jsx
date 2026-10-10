import { CircleNotch, Hand, PaintBrush, Smiley, Buildings, Clock } from "@phosphor-icons/react";
import { classes, waLink } from "../data/siteData";

const icons = {
  wheel: CircleNotch,
  hand: Hand,
  glaze: PaintBrush,
  kids: Smiley,
  private: Buildings,
};

export default function Classes() {
  return (
    <section id="classes" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-xl">
          <h2 className="font-gloock text-4xl leading-tight md:text-5xl">Learn with us</h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Classes are small and hands-on. There are no fixed batches, so you pick a time that suits you
            and we book your slot.
          </p>
        </div>

        <ul className="mt-12 border-t border-line">
          {classes.map((c) => {
            const Icon = icons[c.icon];
            return (
              <li
                key={c.name}
                className="grid items-center gap-4 border-b border-line py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sand text-terracotta">
                    <Icon size={24} />
                  </span>
                  <h3 className="font-gloock text-xl">{c.name}</h3>
                </div>
                <p className="leading-relaxed text-ink-soft md:col-span-4">{c.text}</p>
                <div className="flex items-center justify-between gap-4 md:col-span-4 md:justify-end md:gap-6">
                  <p className="flex items-center gap-2 text-sm text-ink-soft">
                    <Clock size={16} />
                    {c.duration}, {c.level.toLowerCase()}
                  </p>
                  <a
                    href={waLink(`Hello Mewar Pot Makers, I am interested in the ${c.name} class. Could you share the available slots?`)}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-terracotta px-5 py-2 text-sm font-medium text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
                  >
                    Book a slot
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}



