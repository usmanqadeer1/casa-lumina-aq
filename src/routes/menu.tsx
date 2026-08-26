import { createFileRoute } from "@tanstack/react-router";

import interiorImg from "@/assets/interior.jpg";
import { ConciergeButton } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/section";
import { dishImages } from "@/components/site/dish-images";
import { dietaryLabels, dietaryShort, menu, restaurant } from "@/config/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Casa Lumina Modern Italian, Dallas" },
      {
        name: "description",
        content:
          "Explore the Casa Lumina menu — antipasti, handmade pasta, wood-fired secondi, dolci and an Italian wine list, with vegetarian, vegan and gluten-free options.",
      },
      { property: "og:title", content: "The Casa Lumina Menu" },
      {
        property: "og:description",
        content:
          "Handmade pasta, wood-fired secondi and seasonal antipasti at Casa Lumina in downtown Dallas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Rolled by hand, finished by fire."
        intro="The menu shifts with the season and the market. Everything below is served nightly in the dining room, at the bar, and in our private rooms."
        image={interiorImg}
        imageAlt="Casa Lumina dining room interior"
      />

      <section className="section-y">
        <div className="shell">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-border pb-8 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {Object.entries(dietaryLabels).map(([key, label]) => (
              <span key={key} className="inline-flex items-center gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-gold/40 text-[0.6rem] text-gold">
                  {dietaryShort[key as keyof typeof dietaryShort]}
                </span>
                {label}
              </span>
            ))}
          </Reveal>

          <div className="mt-16 space-y-20">
            {menu.map((category) => (
              <div key={category.id} className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
                <Reveal>
                  <h2 className="font-display text-4xl text-cream">{category.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {category.blurb}
                  </p>
                </Reveal>
                <div className="space-y-8">
                  {category.items.map((item, index) => (
                    <Reveal key={item.id} delay={index * 50}>
                      <article className="flex gap-5 border-b border-border/70 pb-8 last:border-0 last:pb-0">
                        {dishImages[item.id] ? (
                          <img
                            src={dishImages[item.id]}
                            alt={item.name}
                            loading="lazy"
                            className="hidden size-24 shrink-0 rounded-md object-cover sm:block"
                          />
                        ) : null}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-4">
                            <h3 className="font-display text-2xl text-cream">{item.name}</h3>
                            <span
                              className="mx-2 hidden h-px flex-1 bg-border sm:block"
                              aria-hidden
                            />
                            <span className="text-sm text-gold">${item.price}</span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                          {item.tags?.length ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
                                >
                                  {dietaryLabels[tag]}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal className="mt-20 rounded-xl border border-border bg-surface p-10 text-center">
            <h2 className="font-display text-3xl text-cream">Not sure what to order?</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Tell Lumina what you like, what you avoid and who you're dining with — she'll build
              the table an order and book it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ConciergeButton prompt="What do you recommend from the menu?">
                Ask for a Recommendation
              </ConciergeButton>
              <ConciergeButton variant="outline" prompt="I'd like to book a table.">
                Reserve a Table
              </ConciergeButton>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">{restaurant.hoursNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
