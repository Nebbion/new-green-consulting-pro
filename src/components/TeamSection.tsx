import { team } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { Linkedin, Mail } from "lucide-react";

export const TeamSection = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={i * 100}>
          <article className="group relative overflow-hidden rounded-sm bg-card border border-border transition-all duration-500 hover:border-accent/40 hover:shadow-elevated h-full">
            {/* Portrait area — abstract gradient panel since no real photos */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-hero">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary-soft)/0.5),transparent_55%)]" />

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
                aria-hidden
              />

              {/* Initials monogram */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif text-primary-foreground/90 text-[6rem] md:text-[7rem] leading-none tracking-[-0.04em] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                </span>
              </div>

              {/* Bottom meta */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                <div className="text-[10px] uppercase tracking-[0.24em] text-primary-foreground/70">
                  {String(i + 1).padStart(2, "0")} · Team
                </div>
                <div className="flex gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-primary-foreground/25 bg-primary/30 backdrop-blur-sm text-primary-foreground/80">
                    <Linkedin className="h-3 w-3" />
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-primary-foreground/25 bg-primary/30 backdrop-blur-sm text-primary-foreground/80">
                    <Mail className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-7">
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent">{m.role}</div>
              <h3 className="mt-2 font-serif text-xl md:text-[1.35rem] text-primary leading-snug">
                {m.name}
              </h3>
              <p className="mt-3.5 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
};
