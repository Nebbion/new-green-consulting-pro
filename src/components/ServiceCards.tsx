import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";

import safetyImg from "@/assets/section-safety.jpg";
import trainingImg from "@/assets/section-training.jpg";
import consultingImg from "@/assets/section-consulting.jpg";
import textureImg from "@/assets/texture-architecture.jpg";
import methodImg from "@/assets/section-method.jpg";
import marketingImg from "@/assets/section-marketing.jpg";

const imageMap: Record<string, string> = {
  "section-safety": safetyImg,
  "section-training": trainingImg,
  "section-consulting": consultingImg,
  "texture-architecture": textureImg,
  "section-method": methodImg,
  "section-marketing": marketingImg,
};

export const ServiceCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const img = imageMap[s.image as string];
        return (
          <Reveal key={s.id} delay={i * 80}>
            <Link
              to={`/services#${s.id}`}
              className="group relative block h-full overflow-hidden rounded-sm bg-card border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-elevated hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-primary">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top labels */}
                <div className="absolute inset-x-0 top-0 p-5 flex items-start justify-between">
                  <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.22em] text-primary-foreground/85">
                    <span className="font-serif text-accent-foreground/95 text-[12px] tracking-[0.18em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-6 bg-accent/70" />
                    <span>{s.category}</span>
                  </div>
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-primary-foreground/30 bg-primary/40 backdrop-blur-sm transition-all duration-500 group-hover:bg-accent group-hover:border-accent">
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Title overlay */}
                <h3 className="absolute inset-x-0 bottom-0 p-5 md:p-6 font-serif text-primary-foreground text-lg md:text-[1.35rem] leading-[1.2]">
                  {s.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 md:p-7">
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[4.5rem]">
                  {s.short}
                </p>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary/75 group-hover:text-accent transition-colors">
                  <span>Approfondisci</span>
                  <span className="h-px w-8 bg-accent/40 group-hover:w-14 group-hover:bg-accent transition-all duration-500" />
                </div>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
};
