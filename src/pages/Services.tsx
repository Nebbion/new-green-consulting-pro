import { Seo } from "@/components/Seo";
import { SectionTitle } from "@/components/SectionTitle";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/site";

const Services = () => {
  return (
    <>
      <Seo
        title="Servizi di consulenza B2B per imprese italiane"
        description="Sicurezza sul lavoro, formazione, comunicazione tecnica, supporto operativo e sviluppo commerciale: i servizi integrati di New Green Consulting per le PMI."
        path="/services"
      />

      {/* Hero */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-gradient-subtle border-b border-border">
        <div className="container-prose">
          <span className="eyebrow">Servizi</span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-primary leading-[1.05] max-w-4xl">
            Un portafoglio di servizi pensato per la complessità delle imprese.
          </h1>
          <p className="mt-7 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Consulenza tecnica, supporto operativo, formazione e sviluppo commerciale:
            ambiti distinti, integrati in un percorso unico, costruito intorno al
            contesto specifico di ogni cliente.
          </p>
        </div>
      </section>

      {/* Lista servizi dettagliata */}
      <section className="container-prose py-24 md:py-32">
        <div className="space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="grid gap-10 md:grid-cols-12 md:gap-14 scroll-mt-24">
              <div className="md:col-span-4">
                <div className="font-serif text-accent text-sm">
                  {String(i + 1).padStart(2, "0")} — Servizio
                </div>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl text-primary leading-tight">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {s.short}
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-foreground">
                      <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {i < services.length - 1 && (
                <div className="md:col-span-12 hairline mt-4" />
              )}
            </article>
          ))}
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
