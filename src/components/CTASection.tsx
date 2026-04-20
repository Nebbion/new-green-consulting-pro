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
      <div className="relative overflow-hidden rounded-sm bg-gradient-hero p-10 md:p-16 shadow-elevated">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.25),transparent_50%)]" />
        <div className="relative max-w-2xl">
          <span className="eyebrow text-accent-foreground/90">Iniziamo</span>
          <h2 className="mt-5 font-serif text-3xl md:text-4xl text-primary-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-base leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-sm bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to={secondaryHref}
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/25 text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary-foreground/5 transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
