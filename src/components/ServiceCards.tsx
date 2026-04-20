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
          className="group relative bg-card p-8 lg:p-10 transition-all hover:bg-surface min-h-[260px] flex flex-col"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-accent text-sm tracking-wider">
              {String(i + 1).padStart(2, "0")}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </div>
          <h3 className="mt-8 font-serif text-xl lg:text-[1.35rem] text-primary leading-snug">
            {s.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
            {s.short}
          </p>
          <div className="mt-6 h-px w-8 bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
        </Link>
      ))}
    </div>
  );
};
