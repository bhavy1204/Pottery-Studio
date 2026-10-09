import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { site, waLink, defaultMessage } from "../data/siteData";

const links = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#instructors", label: "Our potters" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img src={site.logo} alt="" className="h-10 w-10 object-contain" />
          <span className="font-gloock text-lg leading-none">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-soft transition-colors hover:text-terracotta">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-terracotta px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-terracotta-dark"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={waLink(defaultMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-terracotta py-3 text-center font-medium text-cream"
          >
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

