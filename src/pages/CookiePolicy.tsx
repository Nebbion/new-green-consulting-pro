import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

const CookiePolicy = () => {
  return (
    <>
      <Seo
        title="Cookie Policy"
        description="Informativa sull'utilizzo dei cookie nel sito New Green Consulting in conformità al GDPR e alle linee guida del Garante Privacy."
        path="/cookie-policy"
      />

      <section className="pt-36 md:pt-44 pb-12 bg-gradient-subtle border-b border-border">
        <div className="container-prose">
          <span className="eyebrow">Informativa</span>
          <h1 className="mt-5 font-serif text-4xl md:text-5xl text-primary leading-[1.05] max-w-3xl">
            Cookie Policy
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Informativa redatta in conformità alle Linee guida del Garante Privacy del 10 giugno 2021
            e al Regolamento (UE) 2016/679 (GDPR).
          </p>
        </div>
      </section>

      <section className="container-prose py-16 md:py-24">
        <article className="prose prose-neutral max-w-3xl text-foreground/90 leading-relaxed text-[15px] space-y-8">
          <div>
            <h2 className="font-serif text-xl text-primary">Cosa sono i cookie</h2>
            <p className="mt-2">
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente,
              dove vengono memorizzati e ritrasmessi ai medesimi siti alle visite successive.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">Cookie utilizzati da questo sito</h2>
            <p className="mt-2">
              Il sito {site.url} utilizza esclusivamente <strong>cookie tecnici</strong> necessari
              al corretto funzionamento e alla sicurezza delle pagine. In particolare:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5">
              <li><strong>Cookie di sessione</strong> per la corretta navigazione tra le pagine.</li>
              <li><strong>Memorizzazione locale del consenso</strong> (<code>ngc-cookie-consent-v1</code>)
              per non riproporre il banner ad ogni visita.</li>
            </ul>
            <p className="mt-3">
              <strong>Non vengono utilizzati cookie di profilazione</strong> né strumenti di tracciamento
              di terze parti senza il tuo esplicito consenso.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">Gestione delle preferenze</h2>
            <p className="mt-2">
              Puoi modificare in ogni momento le tue preferenze cancellando i dati di navigazione
              dal tuo browser. Al successivo accesso il banner sarà nuovamente visibile.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">Riferimenti</h2>
            <p className="mt-2">
              Per maggiori informazioni puoi consultare la nostra{" "}
              <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>{" "}
              o scrivere a{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default CookiePolicy;
