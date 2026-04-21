import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import consultingImg from "@/assets/section-consulting.jpg";

const stats = [
  { k: "6", l: "Aree di consulenza", s: "integrate in un sistema unico" },
  { k: "5", l: "Fasi di metodo", s: "dall'analisi al monitoraggio" },
  { k: "100%", l: "Approccio su misura", s: "nessuna soluzione preconfezionata" },
  { k: "B2B", l: "Focus istituzionale", s: "PMI, industria, servizi" },
];

export const WhyUsSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <img
          src={consultingImg}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.18),transparent_60%)]" />
      </div>

      <div className="container-prose py-24 md:py-32">
        <div className="grid gap-14 md:gap-20 md:grid-cols-12 items-end">
          <Reveal className="md:col-span-7">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-primary-foreground/55">
              <span className="h-px w-10 bg-accent" />
              <span>Perché sceglierci</span>
            </div>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-[-0.02em] text-primary-foreground">
              Un partner unico per coordinare ciò che, di solito,{" "}
              <span className="italic font-light text-accent-foreground/90">resta disperso</span>.
            </h2>
            <p className="mt-7 max-w-xl text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Sicurezza, formazione, comunicazione e sviluppo commerciale lavorano dentro
              un disegno coerente. Meno fornitori, più continuità, decisioni più semplici
              per la direzione.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5" delay={120}>
            <Link
              to="/about"
              className="group inline-flex items-center justify-between gap-6 rounded-sm border border-primary-foreground/20 bg-primary-foreground/[0.03] pl-6 pr-5 py-5 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary-foreground/[0.07] hover:border-accent/50 transition-all w-full"
            >
              <span>Conosci il metodo e le persone</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="bg-primary p-7 md:p-8 group hover:bg-primary-soft/30 transition-colors duration-500 h-full">
                <div className="font-serif text-accent-foreground/90 text-[11px] tracking-[0.22em]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-5 font-serif text-4xl md:text-5xl text-primary-foreground tracking-[-0.02em] leading-none">
                  {s.k}
                </div>
                <div className="mt-4 text-[13px] text-primary-foreground font-medium">{s.l}</div>
                <div className="mt-1 text-[12px] text-primary-foreground/55 leading-relaxed">{s.s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
