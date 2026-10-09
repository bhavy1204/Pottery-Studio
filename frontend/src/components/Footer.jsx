import { site } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-ink-soft md:flex-row">
        <div className="flex items-center gap-3">
          <img src={site.logo} alt="" className="h-9 w-9 object-contain" />
          <span className="font-gloock text-base text-ink">{site.name}</span>
        </div>
        <p>
          {site.city}. © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}




