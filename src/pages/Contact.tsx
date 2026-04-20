import { Mail, Phone, MapPin } from "lucide-react";
import { Seo } from "@/components/Seo";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { site } from "@/data/site";

const Contact = () => {
  return (
    <>
      <Seo
        title="Contatti · Richiedi una consulenza"
        description="Contatta New Green Consulting per una prima consulenza dedicata alla tua impresa. Scrivici via email o compila il modulo nella pagina."
        path="/contact"
      />

      <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-gradient-subtle border-b border-border">
        <div className="container-prose">
          <span className="eyebrow">Contatti</span>
          <h1 className="mt-5 font-serif text-4xl md:text-6xl text-primary leading-[1.05] max-w-4xl">
            Iniziamo a conoscerci.
          </h1>
          <p className="mt-7 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Raccontaci il tuo contesto aziendale e gli obiettivi che vuoi raggiungere.
            Ti risponderemo con una proposta di confronto strutturata e senza impegno.
          </p>
        </div>
      </section>

      <section className="container-prose py-24 md:py-32">
        <div className="grid gap-14 lg:gap-20 lg:grid-cols-12">
          {/* Info */}
          <aside className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.16em] text-accent">Riferimenti diretti</div>
            <h2 className="mt-3 font-serif text-2xl text-primary leading-tight">
              Parla con il nostro team.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Per richieste urgenti puoi contattarci direttamente via email o telefono
              negli orari d'ufficio.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-sm bg-accent-soft grid place-items-center">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</div>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-primary hover:text-accent break-all">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-sm bg-accent-soft grid place-items-center">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Telefono</div>
                  <a href={`tel:${site.phoneRaw}`} className="mt-1 block text-sm text-primary hover:text-accent">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-sm bg-accent-soft grid place-items-center">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Sede</div>
                  <div className="mt-1 text-sm text-primary">Italia · operatività su tutto il territorio nazionale</div>
                </div>
              </li>
            </ul>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-sm p-7 md:p-10 shadow-card">
              <div className="text-xs uppercase tracking-[0.16em] text-accent">Richiesta consulenza</div>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-primary leading-tight">
                Compila il modulo, ti ricontattiamo entro 48 ore.
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface">
        <FAQSection />
      </div>
    </>
  );
};

export default Contact;
