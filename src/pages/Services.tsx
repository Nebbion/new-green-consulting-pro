import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/CTASection";
import { services, sectors, principles } from "@/data/site";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  return (
    <>
      <Seo
        title="Servizi di consulenza B2B per imprese italiane"
        description="Sicurezza sul lavoro, formazione, comunicazione tecnica, supporto operativo e sviluppo commerciale: i servizi integrati di New Green Consulting per le PMI."
        path="/services"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 bg-primary">
        <div className="absolute inset-0 -z-10">
          <img
            src={servicesHero}
            alt="Sede istituzionale corporate"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.18),transparent_60%)]" />
        </div>

        <div className="container-prose relative">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60">
            <span className="h-px w-10 bg-accent" />
            <span>Servizi</span>
            <span className="text-primary-foreground/25">/</span>
            <span>Sei aree, un sistema</span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <h1 className="lg:col-span-8 font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] text-primary-foreground leading-[1.02] tracking-[-0.02em] font-medium">
              Un portafoglio di servizi pensato per la{" "}
              <span className="italic font-light text-accent-foreground/95">complessità delle imprese</span>.
            </h1>
            <p className="lg:col-span-4 text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Consulenza tecnica, supporto operativo, formazione e sviluppo commerciale:
              ambiti distinti, integrati in un percorso unico, costruito intorno al
              contesto specifico di ogni cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Index / Sommario */}
      <section className="border-b border-border bg-surface">
        <div className="container-prose py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <span className="eyebrow">Sommario</span>
              <div className="mt-3 font-serif text-primary text-base">Sei aree di intervento</div>
            </div>
            <ul className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2.5">
              {services.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 text-sm text-foreground hover:text-accent transition-colors py-1"
                  >
                    <span className="font-serif text-accent text-[12px] tracking-[0.18em] w-7 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="border-b border-transparent group-hover:border-accent/40 transition-colors">
                      {s.title}
                    </span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principi guida */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Principi guida</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[2.25rem] text-primary leading-[1.15]">
              Quattro principi che orientano ogni intervento.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {principles.map((p) => (
              <div key={p.n} className="bg-card p-7 lg:p-8">
                <div className="font-serif text-accent text-base">{p.n}</div>
                <div className="mt-4 font-serif text-lg text-primary leading-snug">{p.title}</div>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi dettagliati */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <div className="space-y-20 md:space-y-28">
            {services.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className="grid gap-10 md:grid-cols-12 md:gap-14 scroll-mt-24"
              >
                {/* Colonna sinistra — meta */}
                <div className="md:col-span-4 lg:col-span-4">
                  <div className="sticky top-28 space-y-5">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-accent">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-accent/40" />
                      <span className="text-muted-foreground">{s.category}</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-[1.75rem] text-primary leading-[1.15]">
                      {s.title}
                    </h2>
                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group"
                    >
                      Richiedi un confronto
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Colonna destra — contenuto */}
                <div className="md:col-span-8 lg:col-span-8 grid md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                  <div className="bg-card p-7 lg:p-8">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                      Ambiti di intervento
                    </div>
                    <ul className="mt-6 space-y-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-foreground leading-relaxed">
                          <span className="mt-2 h-px w-3.5 bg-accent shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card p-7 lg:p-8">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                      Cosa consegniamo
                    </div>
                    <ul className="mt-6 space-y-3.5">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-sm text-foreground leading-relaxed">
                          <Check className="h-3.5 w-3.5 text-accent mt-1 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2 bg-primary p-7 lg:p-8 text-primary-foreground">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-accent-foreground/70">
                      Risultati attesi
                    </div>
                    <div className="mt-5 grid sm:grid-cols-3 gap-6">
                      {s.outcomes.map((o, idx) => (
                        <div key={o} className="border-l border-primary-foreground/15 pl-4">
                          <div className="font-serif text-accent-foreground/70 text-[11px] tracking-[0.18em]">
                            {String(idx + 1).padStart(2, "0")}
                          </div>
                          <p className="mt-2 text-[13px] text-primary-foreground/85 leading-relaxed">
                            {o}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Settori */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-5">
            <span className="eyebrow">Settori</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[2.25rem] text-primary leading-[1.15]">
              Affianchiamo imprese in contesti operativi differenti.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
              Lavoriamo con realtà che richiedono rigore tecnico, continuità operativa
              e una comunicazione coerente con il proprio posizionamento istituzionale.
            </p>
          </div>
          <div className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {sectors.map((s, i) => (
                <li
                  key={s}
                  className="bg-card p-6 flex items-center gap-4 text-sm text-foreground"
                >
                  <span className="font-serif text-accent text-[12px] tracking-[0.18em] w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Vuoi capire quali servizi sono più rilevanti per te?"
        text="Partiamo dal tuo contesto: una conversazione preliminare ci permette di individuare le aree dove possiamo realmente fare la differenza."
      />
      <div className="h-24 md:h-32" />
    </>
  );
};

export default Services;
