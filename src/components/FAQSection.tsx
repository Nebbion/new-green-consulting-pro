import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export const FAQSection = () => {
  return (
    <section className="container-prose py-24 md:py-32">
      <div className="grid gap-12 lg:gap-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Domande frequenti</span>
          <h2 className="mt-5 font-serif text-3xl md:text-[2.25rem] text-primary leading-[1.15]">
            Risposte chiare, prima di iniziare.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base">
            Una sintesi delle domande più ricorrenti che riceviamo da imprese,
            datori di lavoro e direzioni aziendali.
          </p>
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg md:text-xl text-primary hover:no-underline hover:text-accent transition-colors gap-6">
                  <span className="flex items-start gap-5">
                    <span className="font-sans text-xs tracking-[0.18em] text-accent pt-1.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-12 text-muted-foreground leading-relaxed text-[15px]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
