import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per gli utenti del sito New Green Consulting."
        path="/privacy-policy"
      />

      <section className="pt-36 md:pt-44 pb-12 bg-gradient-subtle border-b border-border">
        <div className="container-prose">
          <span className="eyebrow">Informativa</span>
          <h1 className="mt-5 font-serif text-4xl md:text-5xl text-primary leading-[1.05] max-w-3xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Informativa resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR)
            agli utenti del sito {site.url}.
          </p>
        </div>
      </section>

      <section className="container-prose py-16 md:py-24">
        <article className="prose prose-neutral max-w-3xl text-foreground/90 leading-relaxed text-[15px] space-y-8">
          <div>
            <h2 className="font-serif text-xl text-primary">1. Titolare del trattamento</h2>
            <p className="mt-2">
              Titolare del trattamento è <strong>{site.legalName}</strong>, con sede legale in Italia.
              Per qualsiasi richiesta è possibile scrivere a{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>{" "}
              o telefonare al {site.phone}.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">2. Tipologie di dati raccolti</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1.5">
              <li>Dati di contatto forniti volontariamente tramite il modulo (nome, azienda, email, telefono, messaggio).</li>
              <li>Dati di navigazione raccolti automaticamente (indirizzo IP, browser, pagine visitate) ai soli fini tecnici e statistici aggregati.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">3. Finalità e base giuridica</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1.5">
              <li><strong>Riscontro alle richieste</strong> inviate tramite il modulo o i recapiti pubblicati — base giuridica: esecuzione di misure precontrattuali (art. 6.1.b GDPR).</li>
              <li><strong>Adempimenti di legge</strong> connessi all'attività professionale — base giuridica: obbligo legale (art. 6.1.c GDPR).</li>
              <li><strong>Sicurezza del sito</strong> e prevenzione di abusi — base giuridica: legittimo interesse (art. 6.1.f GDPR).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">4. Conservazione</h2>
            <p className="mt-2">
              I dati di contatto vengono conservati per il tempo necessario a gestire la richiesta e,
              successivamente, per un massimo di 24 mesi, salvo diversi obblighi di legge o avvio di
              un rapporto contrattuale.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">5. Destinatari e trasferimenti</h2>
            <p className="mt-2">
              I dati possono essere trattati da personale autorizzato e da fornitori tecnici (hosting,
              servizi email) nominati Responsabili del trattamento. Non è previsto alcun trasferimento
              al di fuori dello Spazio Economico Europeo. In caso di necessità verranno adottate adeguate
              garanzie ai sensi degli artt. 44 e ss. GDPR.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">6. Diritti dell'interessato</h2>
            <p className="mt-2">
              In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 GDPR:
              accesso, rettifica, cancellazione, limitazione, portabilità, opposizione e revoca
              del consenso. Per esercitarli scrivi a{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>.
              Hai inoltre diritto di proporre reclamo al Garante per la Protezione dei Dati Personali
              (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer noopener" className="text-accent hover:underline">www.garanteprivacy.it</a>).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-primary">7. Modifiche</h2>
            <p className="mt-2">
              La presente informativa può essere aggiornata. La versione vigente è sempre pubblicata su questa pagina.
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default PrivacyPolicy;
