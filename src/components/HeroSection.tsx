import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-boardroom.jpg";

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden pt-32 md:pt-40 pb-0 bg-primary">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Sala direzionale corporate al tramonto"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.18),transparent_60%)]" />
      </div>

      {/* Top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/10" aria-hidden />

      <div className="container-prose relative">
        {/* Eyebrow row */}
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60 animate-fade-in">
          <span className="h-px w-12 bg-accent" />
          <span className="font-medium">New Green Consulting</span>
          <span className="text-primary-foreground/25">/</span>
          <span>Consulenza B2B integrata</span>
        </div>

        <div className="mt-16 md:mt-20 grid gap-16 lg:grid-cols-12 lg:gap-20 items-end pb-20 md:pb-28">
          <div className="lg:col-span-9 animate-fade-up">
            <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-primary-foreground font-medium tracking-[-0.025em]">
              Soluzioni strategiche per la{" "}
              <span className="italic font-light text-accent-foreground/95">sicurezza</span>,
              <br className="hidden md:block" /> la{" "}
              <span className="italic font-light text-accent-foreground/95">formazione</span>{" "}
              e la crescita{" "}
              <span className="italic font-light text-accent-foreground/95">del tuo business</span>.
            </h1>

            <div className="mt-12 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <p className="md:col-span-7 text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-xl">
                Affianchiamo aziende, datori di lavoro e direzioni aziendali con servizi integrati
                di consulenza, supporto operativo, comunicazione tecnica e sviluppo commerciale.
              </p>
              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between gap-4 rounded-sm bg-accent text-accent-foreground pl-6 pr-5 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-all hover:shadow-elevated"
                >
                  Richiedi una consulenza
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-between gap-4 rounded-sm border border-primary-foreground/20 text-primary-foreground pl-6 pr-5 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/[0.04] hover:border-primary-foreground/40 transition-all"
                >
                  Scopri i servizi
                  <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right meta column */}
          <div className="lg:col-span-3 hidden lg:block animate-fade-up">
            <div className="border-l border-primary-foreground/15 pl-7 space-y-7">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/45">Approccio</div>
                <div className="mt-2.5 font-serif text-primary-foreground text-[15px] leading-snug">
                  Integrato, consulenziale, misurabile.
                </div>
              </div>
              <div className="h-px bg-primary-foreground/10" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/45">Settori</div>
                <div className="mt-2.5 font-serif text-primary-foreground text-[15px] leading-snug">
                  PMI, industria, servizi B2B.
                </div>
              </div>
              <div className="h-px bg-primary-foreground/10" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/45">Sede</div>
                <div className="mt-2.5 font-serif text-primary-foreground text-[15px] leading-snug">
                  Italia · operatività su tutto il territorio.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip — full width, attached to hero bottom */}
      <div className="relative border-t border-primary-foreground/10 bg-primary/40 backdrop-blur-sm">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
            {[
              ["01", "Sicurezza", "Supporto al datore di lavoro"],
              ["02", "Formazione", "Progettazione percorsi"],
              ["03", "Comunicazione", "Tecnica e istituzionale"],
              ["04", "Sviluppo", "Marketing e lead B2B"],
            ].map(([n, k, v], i) => (
              <div key={k} className={`px-5 md:px-7 py-7 md:py-8 group ${i === 0 ? "md:border-l-0" : ""}`}>
                <div className="font-serif text-accent-foreground/60 text-[11px] tracking-[0.22em]">{n}</div>
                <div className="mt-3 font-serif text-primary-foreground text-base md:text-lg leading-tight">{k}</div>
                <div className="text-[12px] text-primary-foreground/50 mt-1.5 leading-relaxed">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-32 right-8 xl:right-12 flex-col items-center gap-2 text-primary-foreground/40 text-[10px] uppercase tracking-[0.22em]">
        <span className="rotate-90 origin-center mb-6">Scopri</span>
        <ArrowDown className="h-3.5 w-3.5 animate-pulse" />
      </div>
    </section>
  );
};
