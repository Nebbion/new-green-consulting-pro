import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";

export const ServiceCards = () => {
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border rounded-sm overflow-hidden">
      {services.map((s, i) => (
        <Link
          to="/services"
          key={s.id}
          className="group relative bg-card p-8 lg:p-10 transition-colors hover:bg-surface"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-accent text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </div>
          <h3 className="mt-6 font-serif text-xl text-primary leading-snug">
            {s.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {s.short}
          </p>
        </Link>
      ))}
    </div>
  );
};
