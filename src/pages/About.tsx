import { Seo } from "@/components/Seo";
import { SectionTitle } from "@/components/SectionTitle";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Compass, Layers, LineChart, Users } from "lucide-react";
import headquartersImg from "@/assets/about-headquarters.jpg";
import methodImg from "@/assets/section-method.jpg";

const values = [
  {
    icon: Compass,
    title: "Direzione chiara",
    text: "Ogni progetto parte da obiettivi espliciti, condivisi con la direzione e coerenti con il contesto reale dell'impresa.",
  },
  {
    icon: Layers,
    title: "Approccio integrato",
    text: "Sicurezza, formazione, comunicazione e sviluppo non sono silos: lavorano dentro un disegno unitario.",
  },
  {
    icon: Users,
    title: "Relazione consulenziale",
    text: "Affianchiamo persone e team con continuità, non con interventi episodici, costruendo fiducia nel tempo.",
  },
  {
    icon: LineChart,
    title: "Misura ciò che conta",
    text: "Reportistica essenziale e indicatori chiari per orientare le scelte successive con sobrietà.",
  },
];

const About = () => {
  return (
    <>
      <Seo
        title="Chi siamo · Consulenza integrata per le imprese"
        description="New Green Consulting è una società B2B che affianca le PMI italiane con un approccio integrato a sicurezza, formazione, comunicazione e sviluppo commerciale."
        path="/about"
      />

      {/* Hero with architectural image */}
      <section className="relative isolate overflow-hidden pt-36 md:pt-44 pb-20 md:pb-28 bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10">
          <img
            src={headquartersImg}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.18),transparent_60%)]" />
        </div>

        <div className="container-prose relative">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60 animate-fade-in">
            <span className="h-px w-10 bg-accent" />
            <span>Chi siamo</span>
            <span className="text-primary-foreground/25">/</span>
            <span>Una struttura B2B</span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16 items-end animate-fade-up">
            <h1 className="lg:col-span-8 font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] tracking-[-0.02em] font-medium">
              Una struttura costruita intorno alle{" "}
              <span className="italic font-light text-accent-foreground/95">reali esigenze delle imprese</span>.
            </h1>
            <p className="lg:col-span-4 text-base md:text-lg text-primary-foreground/75 leading-relaxed">
              Lavoriamo accanto a datori di lavoro, direzioni e responsabili interni con
              un approccio integrato che mette in dialogo consulenza tecnica, organizzazione,
              comunicazione e sviluppo commerciale.
            </p>
          </div>
        </div>
      </section>

      {/* Visione + Metodo + Valore con immagine */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
          <Reveal className="md:col-span-5">
            <SectionTitle
              eyebrow="Approccio"
              title="Concretezza, ordine e continuità."
              description="Crediamo nei percorsi di lungo periodo, nelle scelte misurabili e in una relazione consulenziale capace di durare nel tempo."
            />
            <div className="mt-10 relative aspect-[4/5] overflow-hidden rounded-sm group">
              <img src={methodImg} alt="Documenti tecnici e analisi" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/70">Metodo</div>
                <div className="mt-2 font-serif text-lg">Rigore documentale, decisioni misurabili</div>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-7 space-y-8">
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
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 100}>
                <div className="group relative bg-card border border-border rounded-sm p-7 lg:p-8 hover:border-accent/40 hover:shadow-card transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <div className="font-serif text-accent text-[12px] tracking-[0.22em] pt-1 w-10 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-accent">{b.t}</div>
                      <p className="mt-3 text-base text-foreground leading-relaxed">{b.d}</p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valori — grid icone */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <Reveal>
            <SectionTitle
              eyebrow="Valori"
              title="Quattro principi che orientano il nostro lavoro."
              description="Non slogan, ma riferimenti operativi che guidano scelte, priorità e modo di stare accanto al cliente."
            />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="bg-card p-7 lg:p-8 h-full group hover:bg-surface transition-colors duration-500">
                    <div className="grid h-11 w-11 place-items-center rounded-sm bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-serif text-lg text-primary leading-snug">{v.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-prose py-24 md:py-32">
        <Reveal>
          <SectionTitle
            eyebrow="Team"
            title="Le persone che guidano l'azienda."
            description="Competenze complementari, una visione condivisa: ogni progetto è seguito con responsabilità diretta dalle figure di riferimento."
          />
        </Reveal>
        <div className="mt-14">
          <TeamSection />
        </div>
      </section>

      <CTASection
        title="Vuoi conoscerci più da vicino?"
        text="Una prima conversazione, senza impegno, è il modo migliore per valutare insieme un'eventuale collaborazione."
      />
      <div className="h-24 md:h-32" />
    </>
  );
};

export default About;
