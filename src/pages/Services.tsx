import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { services, sectors, principles } from "@/data/site";
import servicesHero from "@/assets/services-hero.jpg";

import safetyImg from "@/assets/section-safety.jpg";
import trainingImg from "@/assets/section-training.jpg";
import consultingImg from "@/assets/section-consulting.jpg";
import textureImg from "@/assets/texture-architecture.jpg";
import methodImg from "@/assets/section-method.jpg";
import marketingImg from "@/assets/section-marketing.jpg";

const imageMap: Record<string, string> = {
  "section-safety": safetyImg,
  "section-training": trainingImg,
  "section-consulting": consultingImg,
  "texture-architecture": textureImg,
  "section-method": methodImg,
  "section-marketing": marketingImg,
};

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
            className="h-full w-full object-cover opacity-25 animate-image-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.18),transparent_60%)]" />
        </div>

        <div className="container-prose relative">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60 animate-fade-in">
            <span className="h-px w-10 bg-accent" />
            <span>Servizi</span>
            <span className="text-primary-foreground/25">/</span>
            <span>Sei aree, un sistema</span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16 items-end animate-fade-up">
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
      <section className="border-b border-border bg-surface sticky top-[64px] z-20 backdrop-blur-md bg-surface/85">
        <div className="container-prose py-6 md:py-8">
          <div className="grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <span className="eyebrow">Sommario</span>
              <div className="mt-2 font-serif text-primary text-sm">Sei aree di intervento</div>
            </div>
            <ul className="md:col-span-9 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
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
          <Reveal className="md:col-span-4">
            <span className="eyebrow">Principi guida</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[2.25rem] text-primary leading-[1.15]">
              Quattro principi che orientano ogni intervento.
            </h2>
          </Reveal>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="bg-card p-7 lg:p-8 h-full group hover:bg-surface transition-colors duration-500">
                  <div className="font-serif text-accent text-base">{p.n}</div>
                  <div className="mt-4 font-serif text-lg text-primary leading-snug">{p.title}</div>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  <div className="mt-5 h-px w-8 bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi dettagliati con immagine */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <div className="space-y-24 md:space-y-32">
            {services.map((s, i) => {
              const img = imageMap[s.image as string];
              const reverse = i % 2 === 1;
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="grid gap-10 md:grid-cols-12 md:gap-14 scroll-mt-40"
                >
                  {/* Image side */}
                  <Reveal
                    className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm group sticky top-44">
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/10 to-transparent" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
                      <div className="absolute inset-x-0 top-0 p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-primary-foreground/85">
                          <span className="font-serif text-accent-foreground/90 text-[12px]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-6 bg-accent/70" />
                          <span>{s.category}</span>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                        <div className="font-serif text-lg leading-snug">{s.title}</div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Content side */}
                  <Reveal
                    className={`md:col-span-7 ${reverse ? "md:order-1" : ""}`}
                    delay={120}
                  >
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-serif text-2xl md:text-[2rem] text-primary leading-[1.1]">
                          {s.title}
                        </h2>
                        <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">
                          {s.description}
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                        <div className="bg-card p-6 lg:p-7">
                          <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                            Ambiti di intervento
                          </div>
                          <ul className="mt-5 space-y-3">
                            {s.points.map((p) => (
                              <li key={p} className="flex gap-3 text-sm text-foreground leading-relaxed">
                                <span className="mt-2 h-px w-3.5 bg-accent shrink-0" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-card p-6 lg:p-7">
                          <div className="text-[10px] uppercase tracking-[0.22em] text-accent">
                            Cosa consegniamo
                          </div>
                          <ul className="mt-5 space-y-3">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex gap-3 text-sm text-foreground leading-relaxed">
                                <Check className="h-3.5 w-3.5 text-accent mt-1 shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-primary p-6 lg:p-8 text-primary-foreground rounded-sm">
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

                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                      >
                        Richiedi un confronto su quest'area
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Settori */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
          <Reveal className="md:col-span-5">
            <span className="eyebrow">Settori</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[2.25rem] text-primary leading-[1.15]">
              Affianchiamo imprese in contesti operativi differenti.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
              Lavoriamo con realtà che richiedono rigore tecnico, continuità operativa
              e una comunicazione coerente con il proprio posizionamento istituzionale.
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {sectors.map((s, i) => (
                <Reveal key={s} delay={i * 60}>
                  <li
                    className="bg-card p-6 flex items-center gap-4 text-sm text-foreground h-full group hover:bg-surface transition-colors duration-500"
                  >
                    <span className="font-serif text-accent text-[12px] tracking-[0.18em] w-7 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{s}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </li>
                </Reveal>
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
