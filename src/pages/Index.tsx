import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, GraduationCap, LineChart } from "lucide-react";
import { Seo } from "@/components/Seo";
import { HeroSection } from "@/components/HeroSection";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCards } from "@/components/ServiceCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { benefits, site } from "@/data/site";
import safetyImg from "@/assets/section-safety.jpg";
import trainingImg from "@/assets/section-training.jpg";
import marketingImg from "@/assets/section-marketing.jpg";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.legalName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: "IT",
  };

  return (
    <>
      <Seo
        title="Consulenza B2B per sicurezza, formazione e crescita aziendale"
        description="New Green Consulting affianca le PMI italiane con consulenza integrata su sicurezza sul lavoro, formazione, comunicazione tecnica e sviluppo commerciale B2B."
        path="/"
        jsonLd={jsonLd}
      />

      <HeroSection />

      {/* Intro brand */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow">Chi siamo</span>
            <h2 className="mt-5 font-serif text-3xl md:text-[2.5rem] leading-[1.15] text-primary">
              Un unico partner per sicurezza, organizzazione, comunicazione e sviluppo commerciale.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              New Green Consulting è una realtà B2B che integra competenze tecniche, organizzative
              e comunicative per supportare aziende, datori di lavoro e direzioni nella gestione
              quotidiana e nella crescita strutturata del proprio business.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Conosci l'azienda
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Macroaree servizi */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <SectionTitle
            eyebrow="Aree di intervento"
            title="Sei macroaree di consulenza, un approccio integrato."
            description="Ogni servizio è progettato per dialogare con gli altri: sicurezza, formazione, comunicazione e sviluppo commerciale lavorano insieme dentro un percorso coerente."
          />
          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* Focus sicurezza */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <span className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Focus sicurezza</span>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-primary leading-tight">
              Supporto al datore di lavoro e alla direzione aziendale.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Affianchiamo le imprese nella pianificazione delle attività di prevenzione, nella
              definizione delle procedure operative e nell'integrazione tra consulenza tecnica
              e formazione interna. Un presidio costante che riduce la complessità gestionale
              e rafforza la cultura organizzativa.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Pianificazione delle attività di prevenzione",
                "Procedure operative coerenti con il contesto",
                "Integrazione tra consulenza tecnica e formazione",
                "Supporto continuativo alla direzione",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={safetyImg} alt="Documentazione tecnica e supporto in cantiere" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Formazione & comunicazione */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
            <div className="md:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={trainingImg} alt="Sessione formativa aziendale" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
              </div>
            </div>
            <div className="md:col-span-6">
              <span className="eyebrow"><GraduationCap className="h-3.5 w-3.5" /> Formazione e comunicazione</span>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl text-primary leading-tight">
                Percorsi formativi progettati, comunicazione tecnica curata.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Costruiamo percorsi formativi su misura e materiali informativi chiari, capaci
                di tradurre contenuti complessi in linguaggio operativo. Una comunicazione
                istituzionale coerente che alimenta la cultura della sicurezza nel tempo.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Progettazione di percorsi formativi verticali e trasversali",
                  "Materiali didattici e informativi su misura",
                  "Comunicazione tecnica chiara e istituzionale",
                  "Cultura della sicurezza in ottica continuativa",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground">
                    <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing & sviluppo */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <span className="eyebrow"><LineChart className="h-3.5 w-3.5" /> Marketing & sviluppo</span>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl text-primary leading-tight">
              SEO specialistica, content marketing e lead generation B2B.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sviluppiamo strategie di crescita commerciale strutturate, basate su contenuti
              autorevoli, visibilità organica qualificata e generazione di contatti coerenti
              con il posizionamento dell'impresa. Un approccio phygital che integra dato,
              relazione e presidio operativo.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "SEO specialistica per il contesto B2B",
                "Content marketing istituzionale",
                "Lead generation e nurturing",
                "Reportistica, monitoraggio e sviluppo dati",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-2 h-px w-4 bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-primary">
              <img src={marketingImg} alt="Reportistica analitica per la direzione" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Metodo */}
      <section className="bg-surface border-y border-border">
        <div className="container-prose py-24 md:py-32">
          <SectionTitle
            eyebrow="Metodo di lavoro"
            title="Cinque fasi per portare ordine, chiarezza e risultati."
            description="Un percorso strutturato che parte dall'analisi del contesto e arriva al monitoraggio continuo, garantendo coerenza tra strategia ed esecuzione."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle
              eyebrow="Cosa puoi aspettarti"
              title="Benefici concreti, dichiarati con prudenza."
              description="Lavoriamo per costruire valore nel tempo, non per promettere risultati assoluti."
            />
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card p-7">
                <h3 className="font-serif text-lg text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <div className="h-24 md:h-32" />
    </>
  );
};

export default Index;
