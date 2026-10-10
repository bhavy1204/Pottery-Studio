import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  MapPin,
} from "@phosphor-icons/react";
import { site, waLink, defaultMessage } from "../data/siteData";

function Row({ icon: Icon, label, value, href, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex items-center gap-4 border-b border-line py-4 transition-colors hover:text-terracotta"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-terracotta">
        <Icon size={22} />
      </span>
      <span>
        <span className="block text-sm text-ink-soft">{label}</span>
        <span className="block font-medium">{value}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
        <div>
          <h2 className="font-gloock text-4xl leading-tight md:text-5xl">Book your slot</h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
            We do not run fixed timings. Tell us when you would like to come and we will confirm a slot
            that works for you.
          </p>

          <a
            href={waLink(defaultMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3 font-medium text-cream transition-colors hover:bg-terracotta-dark"
          >
            <WhatsappLogo size={22} weight="fill" />
            Message us on WhatsApp
          </a>

          <div className="mt-8 border-t border-line">
            <Row icon={Phone} label="Call us" value={site.phoneDisplay} href={`tel:${site.phone}`} />
            <Row icon={EnvelopeSimple} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Row icon={MapPin} label="Studio" value={site.address} href={site.mapLink} external />
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <InstagramLogo size={22} />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-terracotta hover:text-terracotta"
            >
              <FacebookLogo size={22} />
            </a>
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-2xl border border-line bg-sand">
          <iframe
            title="Mewar Pot Makers on Google Maps"
            src={site.mapEmbed}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}




