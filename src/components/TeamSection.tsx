import { team } from "@/data/site";

export const TeamSection = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {team.map((m) => (
        <article
          key={m.name}
          className="group bg-card border border-border rounded-sm p-8 transition-colors hover:border-accent/40"
        >
          <div className="aspect-square w-20 rounded-sm bg-gradient-accent grid place-items-center shadow-card">
            <span className="font-serif text-2xl text-primary-foreground">
              {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </span>
          </div>
          <h3 className="mt-6 font-serif text-xl text-primary">{m.name}</h3>
          <div className="mt-1 text-xs uppercase tracking-[0.16em] text-accent">{m.role}</div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
        </article>
      ))}
    </div>
  );
};
