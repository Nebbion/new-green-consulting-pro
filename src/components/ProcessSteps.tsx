import { process } from "@/data/site";

export const ProcessSteps = () => {
  return (
    <ol className="grid gap-px bg-border md:grid-cols-5 border border-border rounded-sm overflow-hidden">
      {process.map((p) => (
        <li key={p.n} className="bg-card p-6 lg:p-7">
          <div className="font-serif text-accent text-sm">{p.n}</div>
          <div className="mt-4 font-serif text-lg text-primary">{p.title}</div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
        </li>
      ))}
    </ol>
  );
};
