import { images, facts } from "../data/siteData";
import SmartImage from "./SmartImage";

export default function About() {
  return (
    <section id="about" className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <SmartImage
          src={images.about}
          alt="Inside the Mewar Pot Makers studio"
          sizes="(min-width: 768px) 45vw, 100vw"
          className="aspect-[4/5] w-full rounded-2xl bg-line object-cover"
        />
        <div>
          <h2 className="font-gloock text-4xl leading-tight md:text-5xl">A studio built around clay</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-ink-soft">
            Placeholder text. Tell the story of the studio here: how it began in Udaipur, what the
            family loves about the craft, and the kind of work you are known for. Two or three short
            paragraphs are plenty.
          </p>
          <dl className="mt-10 space-y-6">
            {facts.map((f) => (
              <div key={f.title} className="border-l-2 border-clay pl-5">
                <dt className="font-medium">{f.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}


