import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ngc-cookie-consent-v1";

type Consent = "accepted" | "rejected";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      localStorage.setItem(`${STORAGE_KEY}-at`, new Date().toISOString());
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa cookie"
      className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-[60] animate-fade-in"
    >
      <div className="bg-card border border-border shadow-elevated rounded-sm p-5 md:p-6">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 shrink-0 rounded-sm bg-accent-soft grid place-items-center">
            <Cookie className="h-4 w-4 text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-[0.16em] text-accent">Privacy & Cookie</div>
            <h2 className="mt-1.5 font-serif text-lg text-primary leading-tight">
              Rispettiamo la tua privacy.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Utilizziamo solo cookie tecnici necessari al funzionamento del sito.
              Nessun cookie di profilazione o tracciamento di terze parti viene attivato senza il tuo consenso.
              Per dettagli consulta la{" "}
              <Link to="/cookie-policy" className="text-accent underline-offset-2 hover:underline">Cookie Policy</Link>{" "}
              e la{" "}
              <Link to="/privacy-policy" className="text-accent underline-offset-2 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
          <button
            onClick={() => decide("rejected")}
            aria-label="Chiudi"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => decide("rejected")}
            className="flex-1 rounded-sm border border-border bg-card text-primary text-sm font-medium px-4 py-2.5 hover:bg-secondary transition-colors"
          >
            Solo necessari
          </button>
          <button
            onClick={() => decide("accepted")}
            className="flex-1 rounded-sm bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 hover:bg-primary-soft transition-colors"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
};
