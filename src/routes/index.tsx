import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";

import aboutImg from "@/assets/about.jpg";
import cateringImg from "@/assets/catering.jpg";
import heroImg from "@/assets/hero.jpg";
import privateDiningImg from "@/assets/private-dining.jpg";
import { ConciergeButton, LinkButton } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section";
import { dishImages } from "@/components/site/dish-images";
import { findMenuItem, restaurant, signatureDishIds, testimonials } from "@/config/restaurant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Lumina | Modern Italian Restaurant in Downtown Dallas" },
      {
        name: "description",
        content:
          "Handmade pasta, wood-fired secondi and a deep Italian wine list in downtown Dallas. Reserve your table with Lumina, our AI concierge.",
      },
      { property: "og:title", content: "Casa Lumina | Modern Italian Dining in Dallas" },
      {
        property: "og:description",
        content:
          "An upscale modern Italian restaurant in downtown Dallas. Dinner nightly, private dining and catering across DFW.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const dishes = signatureDishIds
    .map((id) => ({ id, item: findMenuItem(id) }))
    .filter((entry): entry is { id: string; item: NonNullable<typeof entry.item> } =>
      Boolean(entry.item),
    );

  return (
    <>
      <section className="relative isolate grain overflow-hidden">
        <img
          src={heroImg}
          alt="Candlelit dining room at Casa Lumina in downtown Dallas"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-background" />
        <div className="shell relative flex min-h-[92vh] flex-col justify-center pb-24 pt-36">
          <Reveal>
            <p className="eyebrow">Downtown Dallas · Est. 2016</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl text-balance-pretty text-6xl leading-[0.95] md:text-8xl">
              Modern Italian Dining, <span className="italic text-gold">Reimagined.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Handmade pasta rolled each morning, secondi from the wood fire, and a cellar built for
              long evenings — in a candlelit room on Main Street.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <ConciergeButton prompt="I'd like to book a table.">
                Reserve a Table
              </ConciergeButton>
              <LinkButton to="/menu">
                Explore the Menu <ArrowRight className="size-3.5" />
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 text-gold" />
                {restaurant.address.full}
              </span>
              <span className="inline-flex items-center gap-2.5">
                <Clock className="size-4 text-gold" />
                Dinner nightly from 4:00 PM
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="img-cinematic aspect-[4/5]">
              <img
                src={aboutImg}
                alt="Chef finishing a plate of handmade pasta"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title={<>A room built for lingering.</>}
              intro="Casa Lumina began with a single pasta board and a conviction that Italian hospitality belongs in the heart of Dallas. Ten years on, our kitchen still rolls every sheet by hand and our sommelier still opens something you have never tried."
            />
            <Reveal delay={120}>
              <div className="mt-9 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { value: "10", label: "Years on Main St." },
                  { value: "14", label: "Pastas by hand" },
                  { value: "320", label: "Italian labels" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl text-gold">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <LinkButton to="/about">Read Our Story</LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y hairline bg-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Signature Dishes"
            title="What the room orders."
            intro="Six plates that define the kitchen — from the truffle tagliatelle to the tiramisu we have never taken off the menu."
            align="center"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map(({ id, item }, index) => (
              <Reveal key={id} delay={index * 80}>
                <article className="group">
                  <div className="img-cinematic aspect-[5/4]">
                    <img
                      src={dishImages[id]}
                      alt={item.name}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                    <span className="text-sm text-gold">${item.price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <LinkButton to="/menu">View the Full Menu</LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-8 lg:grid-cols-2">
          {[
            {
              image: privateDiningImg,
              eyebrow: "Private Dining",
              title: "Celebrate around the table.",
              copy: "Two private rooms and a full buyout, seating 14 to 110, each with a custom menu and dedicated captain.",
              to: "/private-dining",
              alt: "Private dining room set for a celebration",
            },
            {
              image: cateringImg,
              eyebrow: "Catering",
              title: "Casa Lumina, wherever you gather.",
              copy: "Office lunches to full-service weddings across the Dallas–Fort Worth metroplex, from $32 per guest.",
              to: "/catering",
              alt: "Catering grazing table styled with Italian antipasti",
            },
          ].map((card, index) => (
            <Reveal key={card.to} delay={index * 100}>
              <article className="group relative isolate overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="h-[30rem] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="eyebrow">{card.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl text-cream">{card.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {card.copy}
                  </p>
                  <div className="mt-6">
                    <LinkButton to={card.to}>
                      Learn More <ArrowRight className="size-3.5" />
                    </LinkButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y hairline bg-surface">
        <div className="shell">
          <SectionHeading eyebrow="Guest Notes" title="From our table to yours." align="center" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, index) => (
              <Reveal key={t.author} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-background p-8">
                  <blockquote className="flex-1 font-display text-xl italic leading-relaxed text-cream">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                    <span className="block text-cream">{t.author}</span>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {t.detail}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <Reveal className="relative isolate overflow-hidden rounded-xl border border-gold/25 bg-gradient-to-br from-surface-raised to-background px-8 py-16 text-center md:px-16 md:py-20">
            <Sparkles className="mx-auto size-6 text-gold" />
            <h2 className="mt-6 text-balance-pretty font-display text-4xl md:text-5xl">
              Meet Lumina, our AI concierge.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Ask about the menu, dietary needs or the wine list — or book a table, plan a private
              event and request catering, all in one conversation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ConciergeButton prompt="I'd like to book a table.">Start a Conversation</ConciergeButton>
              <LinkButton to="/contact">Contact the Team</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
