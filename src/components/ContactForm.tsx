import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";


const schema = z.object({
  name: z.string().trim().min(2, "Inserisci nome e cognome").max(100),
  company: z.string().trim().min(2, "Inserisci la tua azienda").max(120),
  email: z.string().trim().email("Email non valida").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Numero di telefono non valido")
    .max(30)
    .regex(/^[0-9 +().-]+$/, "Numero di telefono non valido"),
  message: z.string().trim().min(10, "Scrivi un messaggio di almeno 10 caratteri").max(1500),
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
  try {
    await emailjs.send(
      "service_l5cik1f",
      "template_4a0whpd",
      {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        message: values.message,
      },
      "kpvw2PInjIda_ucJu"
    );

    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  } catch (err) {
    console.error(err);
    alert("Errore durante l'invio.");
  }
};

  const field =
    "w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
            Nome e cognome
          </label>
          <input id="name" type="text" autoComplete="name" {...register("name")} className={cn(field, errors.name && "border-destructive focus:border-destructive focus:ring-destructive")} />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
            Azienda
          </label>
          <input id="company" type="text" autoComplete="organization" {...register("company")} className={cn(field, errors.company && "border-destructive focus:border-destructive focus:ring-destructive")} />
          {errors.company && <p className="mt-1.5 text-xs text-destructive">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
            Email
          </label>
          <input id="email" type="email" autoComplete="email" {...register("email")} className={cn(field, errors.email && "border-destructive focus:border-destructive focus:ring-destructive")} />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
            Telefono
          </label>
          <input id="phone" type="tel" autoComplete="tel" {...register("phone")} className={cn(field, errors.phone && "border-destructive focus:border-destructive focus:ring-destructive")} />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.14em] text-muted-foreground mb-2">
          Messaggio
        </label>
        <textarea id="message" rows={5} {...register("message")} className={cn(field, "resize-y", errors.message && "border-destructive focus:border-destructive focus:ring-destructive")} />
        {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary-soft transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        {sent && (
          <div className="inline-flex items-center gap-2 text-sm text-accent animate-fade-in">
            <CheckCircle2 className="h-4 w-4" />
            Richiesta inviata. Ti risponderemo a breve.
          </div>
        )}
        <p className="text-xs text-muted-foreground sm:ml-auto">
          Inviando accetti di essere ricontattato per finalità informative.
        </p>
      </div>
    </form>
  );
};
