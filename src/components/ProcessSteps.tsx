import { process } from "@/data/site";

export const ProcessSteps = () => {
  return (
    <ol className="grid gap-px bg-border md:grid-cols-5 border border-border rounded-sm overflow-hidden">
      {process.map((p, i) => (
        <li key={p.n} className="bg-card p-7 lg:p-8 relative group hover:bg-surface transition-colors">
          <div className="flex items-center gap-3">
            <div className="font-serif text-accent text-sm tracking-wider">{p.n}</div>
            <div className="h-px flex-1 bg-accent/30" />
          </div>
          <div className="mt-6 font-serif text-lg text-primary leading-snug">{p.title}</div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          {i < 4 && (
            <div className="hidden md:block absolute top-9 -right-2 w-4 h-px bg-border" aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
};
