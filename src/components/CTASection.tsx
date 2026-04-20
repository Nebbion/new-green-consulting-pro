import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const CTASection = ({
  title = "Parliamo del tuo prossimo progetto.",
  text = "Raccontaci il contesto della tua impresa: definiremo insieme un percorso di consulenza coerente con i tuoi obiettivi.",
  primaryLabel = "Richiedi una consulenza",
  primaryHref = "/contact",
  secondaryLabel = "Vedi i servizi",
  secondaryHref = "/services",
}: CTAProps) => {
  return (
    <section className="container-prose">
      <div className="relative overflow-hidden rounded-sm bg-gradient-hero p-10 md:p-20 shadow-elevated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-primary-foreground/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10" />

        <div className="relative grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
              <span className="h-px w-8 bg-accent" />
              <span>Iniziamo a collaborare</span>
            </div>
            <h2 className="mt-6 font-serif text-3xl md:text-[2.75rem] text-primary-foreground leading-[1.1] tracking-tight max-w-2xl">
              {title}
            </h2>
            <p className="mt-6 text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-xl">{text}</p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
            <Link
              to={primaryHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-sm bg-accent text-accent-foreground px-7 py-4 text-sm font-medium tracking-wide hover:bg-accent/90 transition-all w-full md:w-auto"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondaryHref}
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/25 text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/5 hover:border-primary-foreground/40 transition-all w-full md:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
