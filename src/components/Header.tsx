import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-ngc-mark.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-background/80 backdrop-blur-sm border-b border-border/60"
      )}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label={site.name}>
          <img
            src={logoMark}
            alt="New Green Consulting"
            className="h-10 w-10 md:h-11 md:w-11 object-contain"
            width={44}
            height={44}
          />
          <div className="leading-tight">
            <div className="font-serif text-[15px] md:text-base text-primary font-semibold tracking-tight">
              New Green Consulting
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {site.payoff}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigazione principale">
          {nav.map((n) => (
            <NavLink
              key={n.href}
              to={n.href}
              end={n.href === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors relative py-1",
                  isActive
                    ? "text-primary after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-accent"
                    : "text-muted-foreground hover:text-primary"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary-soft transition-colors"
          >
            Richiedi consulenza
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Apri menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-prose py-4 flex flex-col gap-1" aria-label="Navigazione mobile">
            {nav.map((n) => (
              <NavLink
                key={n.href}
                to={n.href}
                end={n.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-2 py-3 rounded-sm text-sm border-b border-border last:border-b-0",
                    isActive ? "text-primary font-medium" : "text-muted-foreground"
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-4 py-3 text-sm font-medium"
            >
              Richiedi consulenza
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
