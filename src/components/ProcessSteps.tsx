import { process } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const ProcessSteps = () => {
  return (
    <ol className="grid gap-px bg-border md:grid-cols-5 border border-border rounded-sm overflow-hidden">
      {process.map((p, i) => (
        <Reveal as="li" key={p.n} delay={i * 80}>
          <div className="bg-card p-7 lg:p-8 relative group hover:bg-surface transition-all duration-500 h-full">
            <div className="flex items-center gap-3">
              <div className="font-serif text-accent text-[13px] tracking-[0.18em]">{p.n}</div>
              <div className="h-px flex-1 bg-accent/25 group-hover:bg-accent transition-colors duration-500" />
            </div>
            <div className="mt-7 font-serif text-lg text-primary leading-snug">{p.title}</div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            {i < process.length - 1 && (
              <div className="hidden md:block absolute top-9 -right-[5px] w-2.5 h-2.5 rotate-45 border-r border-t border-accent/40 bg-card" aria-hidden />
            )}
            {/* Bottom accent line on hover */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700" />
          </div>
        </Reveal>
      ))}
    </ol>
  );
};
