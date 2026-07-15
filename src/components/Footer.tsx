import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { nav, site } from "@/data/site";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/80 mt-24">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-serif text-2xl text-primary-foreground tracking-tight">
            {site.name}
          </div>
          <p className="mt-3 text-sm text-primary-foreground/65 max-w-md leading-relaxed">
            {site.payoff}. Un unico partner per sicurezza, organizzazione, comunicazione e sviluppo commerciale.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50 mb-4">
            Naviga
          </div>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link to={n.href} className="hover:text-primary-foreground transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/50 mb-4">
            Contatti
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                {site.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.pec}`} className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                PEC: {site.pec}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} {site.legalName}. Tutti i diritti riservati.</div>
          <div>P. IVA {site.vat} · Sede legale Italia</div>
        </div>
      </div>
    </footer>
  );
};
