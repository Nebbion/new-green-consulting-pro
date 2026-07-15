import { Seo } from "@/components/Seo";
import { SectionTitle } from "@/components/SectionTitle";

import { CTASection } from "@/components/CTASection";

const About = () => {
  return (
    <>
      <Seo
        title="Chi siamo · Consulenza integrata per le imprese"
        description="New Green Consulting è una società B2B che affianca le PMI italiane con un approccio integrato a sicurezza, formazione, comunicazione e sviluppo commerciale."
        path="/about"
      />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-gradient-subtle border-b border-border">
        <div className="container-prose">
          <span className="eyebrow">Chi siamo</span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-primary leading-[1.05] max-w-4xl">
            Una struttura B2B costruita intorno alle reali esigenze delle imprese.
          </h1>
          <p className="mt-7 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Lavoriamo accanto a datori di lavoro, direzioni e responsabili interni con
            un approccio integrato che mette in dialogo consulenza tecnica, organizzazione,
            comunicazione e sviluppo commerciale.
          </p>
        </div>
      </section>

      {/* Approccio + Visione */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle
              eyebrow="Approccio"
              title="Concretezza, ordine e continuità."
              description="Crediamo nei percorsi di lungo periodo, nelle scelte misurabili e in una relazione consulenziale capace di durare nel tempo."
            />
          </div>
          <div className="md:col-span-7 space-y-10">
            {[
              {
                t: "Visione",
                d: "Essere il partner stabile a cui le imprese affidano la regia di sicurezza, organizzazione, comunicazione e crescita commerciale.",
              },
              {
                t: "Metodo",
                d: "Analisi, pianificazione, sviluppo strategico, esecuzione operativa e monitoraggio: cinque fasi che strutturano ogni progetto.",
              },
              {
                t: "Valore per il cliente",
                d: "Un unico interlocutore qualificato, capace di ridurre la complessità gestionale e di valorizzare ciò che l'impresa già fa bene.",
              },
            ].map((b) => (
              <div key={b.t} className="border-l-2 border-accent pl-6">
                <div className="text-xs uppercase tracking-[0.16em] text-accent">{b.t}</div>
                <p className="mt-2 text-base text-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <SectionTitle
            eyebrow="Team"
            title="Le persone che guidano l'azienda."
            description="Competenze complementari, una visione condivisa: ogni progetto è seguito con responsabilità diretta dalle figure di riferimento."
          />
          <div className="mt-14">
            <TeamSection />
          </div>
        </div>
      </section>

      <div className="h-16" />
      <CTASection
        title="Vuoi conoscerci più da vicino?"
        text="Una prima conversazione, senza impegno, è il modo migliore per valutare insieme un'eventuale collaborazione."
      />
      <div className="h-24 md:h-32" />
    </>
  );
};

export default About;
