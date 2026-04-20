import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-boardroom.jpg";

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-44 pb-24 md:pb-36 bg-gradient-hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Riunione direzionale in ambiente corporate"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.22),transparent_55%)]" />
      </div>

      {/* Subtle hairline grid */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/10" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary-foreground/10" aria-hidden />

      <div className="container-prose relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-9 animate-fade-up">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/70">
              <span className="h-px w-10 bg-accent" />
              <span>New Green Consulting</span>
              <span className="text-primary-foreground/30">·</span>
              <span>Consulenza B2B</span>
            </div>

            <h1 className="mt-8 font-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.02] text-primary-foreground font-medium tracking-[-0.02em]">
              Soluzioni strategiche per la{" "}
              <span className="italic text-accent-foreground/95">sicurezza</span>, la{" "}
              <span className="italic text-accent-foreground/95">formazione</span> e la crescita del tuo business.
            </h1>

            <p className="mt-9 max-w-2xl text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Affianchiamo aziende, datori di lavoro e direzioni aziendali con servizi integrati
              di consulenza, supporto operativo, comunicazione tecnica e sviluppo commerciale.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-accent text-accent-foreground px-7 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-all hover:shadow-elevated"
              >
                Richiedi una consulenza
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/[0.04] hover:border-primary-foreground/40 transition-all"
              >
                Scopri i servizi
                <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Right meta column */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="border-l border-primary-foreground/15 pl-6 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">Approccio</div>
                <div className="mt-2 font-serif text-primary-foreground text-base leading-snug">
                  Integrato, consulenziale, misurabile.
                </div>
              </div>
              <div className="h-px bg-primary-foreground/10" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">Settori</div>
                <div className="mt-2 font-serif text-primary-foreground text-base leading-snug">
                  PMI, industria, servizi B2B.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 rounded-sm overflow-hidden">
          {[
            ["01", "Sicurezza", "supporto al datore di lavoro"],
            ["02", "Formazione", "progettazione percorsi"],
            ["03", "Comunicazione", "tecnica e istituzionale"],
            ["04", "Sviluppo", "marketing e lead B2B"],
          ].map(([n, k, v]) => (
            <div key={k} className="bg-primary px-6 py-7 group hover:bg-primary-soft transition-colors">
              <div className="font-serif text-accent-foreground/70 text-xs tracking-[0.18em]">{n}</div>
              <div className="mt-3 font-serif text-primary-foreground text-lg">{k}</div>
              <div className="text-xs text-primary-foreground/55 mt-1.5 leading-relaxed">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
