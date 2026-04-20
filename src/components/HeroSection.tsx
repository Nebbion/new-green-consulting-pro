import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-boardroom.jpg";

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Riunione direzionale in ambiente corporate"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container-prose relative">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent-foreground/90">
            <span className="h-px w-8 bg-accent" />
            New Green Consulting · B2B
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] text-primary-foreground font-medium tracking-tight">
            Soluzioni strategiche per la sicurezza, la formazione e la crescita del tuo business.
          </h1>
          <p className="mt-7 max-w-2xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
            Affianchiamo aziende, datori di lavoro e direzioni aziendali con servizi integrati
            di consulenza, supporto operativo, comunicazione tecnica e sviluppo commerciale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Richiedi una consulenza
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/25 text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
            >
              Scopri i servizi
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 rounded-sm overflow-hidden">
          {[
            ["Sicurezza", "supporto al datore di lavoro"],
            ["Formazione", "progettazione percorsi"],
            ["Comunicazione", "tecnica e istituzionale"],
            ["Sviluppo", "marketing e lead B2B"],
          ].map(([k, v]) => (
            <div key={k} className="bg-primary px-5 py-5">
              <div className="font-serif text-primary-foreground text-lg">{k}</div>
              <div className="text-xs text-primary-foreground/60 mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
