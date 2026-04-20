import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";

export const ServiceCards = () => {
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border rounded-sm overflow-hidden">
      {services.map((s, i) => (
        <Link
          to={`/services#${s.id}`}
          key={s.id}
          className="group relative bg-card p-8 lg:p-10 transition-all hover:bg-surface min-h-[300px] flex flex-col"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-serif text-accent text-[13px] tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {s.category}
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </div>

          <h3 className="mt-10 font-serif text-xl lg:text-[1.4rem] text-primary leading-snug">
            {s.title}
          </h3>
          <p className="mt-3.5 text-sm text-muted-foreground leading-relaxed flex-1">
            {s.short}
          </p>
          <div className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary/70 group-hover:text-accent transition-colors">
            <span>Approfondisci</span>
            <span className="h-px w-8 bg-accent/40 group-hover:w-14 group-hover:bg-accent transition-all duration-500" />
          </div>
        </Link>
      ))}
    </div>
  );
};
