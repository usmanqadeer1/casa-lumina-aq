import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks, restaurant } from "@/config/restaurant";
import { cn } from "@/lib/utils";
import { useConcierge } from "@/components/concierge/concierge-context";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openConcierge } = useConcierge();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-cream">
            {restaurant.name}
          </span>
          <span className="mt-1 text-[0.5rem] uppercase tracking-[0.42em] text-gold">
            Modern Italian
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cream [&.active]:text-cream"
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openConcierge()}
            className="hidden h-10 items-center gap-2 rounded-full border border-gold/40 px-5 text-[0.72rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:inline-flex"
          >
            Reserve a Table
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-cream lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="shell flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl text-cream last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openConcierge();
              }}
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-gold text-[0.72rem] uppercase tracking-[0.2em] text-primary-foreground"
            >
              Ask Lumina
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
