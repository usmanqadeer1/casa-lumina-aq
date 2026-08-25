import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

import { navLinks, restaurant } from "@/config/restaurant";

export function SiteFooter() {
  return (
    <footer className="hairline bg-ink">
      <div className="shell grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-cream">{restaurant.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {restaurant.tagline} Handmade pasta, wood-fired secondi and a deep Italian list in the
            heart of downtown {restaurant.city.split(",")[0]}.
          </p>
          <div className="mt-7 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={restaurant.address.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 transition-colors hover:text-cream"
            >
              <MapPin className="size-4 text-gold" />
              {restaurant.address.full}
            </a>
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-3 transition-colors hover:text-cream"
            >
              <Phone className="size-4 text-gold" />
              {restaurant.phone}
            </a>
            <a
              href={restaurant.emailHref}
              className="inline-flex items-center gap-3 transition-colors hover:text-cream"
            >
              <Mail className="size-4 text-gold" />
              {restaurant.email}
            </a>
            <span className="inline-flex items-center gap-3">
              <Instagram className="size-4 text-gold" />
              {restaurant.social.instagram}
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Hours</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {restaurant.hours.map((h) => (
              <li key={h.days}>
                <span className="block text-cream">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="shell flex flex-col gap-3 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. Fictional restaurant, built as a demo.
          </p>
          <p>
            AI concierge by <span className="text-gold">Aqalion</span> — AI systems for hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}
