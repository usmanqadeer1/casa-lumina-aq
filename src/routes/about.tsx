import { createFileRoute } from "@tanstack/react-router";

import aboutImg from "@/assets/about.jpg";
import experienceImg from "@/assets/experience.jpg";
import interiorImg from "@/assets/interior.jpg";
import { ConciergeButton, LinkButton } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { PageHero, SectionHeading } from "@/components/site/section";
import { restaurant, testimonials } from "@/config/restaurant";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Casa Lumina, Modern Italian in Dallas" },
      {
        name: "description",
        content:
          "Ten years on Main Street: the kitchen, the cellar and the hospitality behind Casa Lumina, an upscale modern Italian restaurant in downtown Dallas.",
      },
      { property: "og:title", content: "The Story of Casa Lumina" },
      {
        property: "og:description",
        content:
          "Handmade pasta, a 320-label Italian cellar and a candlelit room built for lingering in downtown Dallas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Light, table, tradition."
        intro="Casa Lumina takes its name from the light that fills the room at sunset — the hour we open, every night, for ten years."
        image={aboutImg}
        imageAlt="Chef at Casa Lumina plating handmade pasta"
      />

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="The Kitchen"
              title="Everything begins with the dough."
              intro={restaurant.description}
            />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Our pasta room starts at six each morning: semolina, eggs from a farm outside
                Waxahachie, and a rolling pin. The wood fire is lit by two, and by the time the
                first table sits the kitchen has already broken down the day's fish and butchered
                the short rib.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                It is not a nostalgic restaurant. The technique is Italian, the produce is Texan,
                and the room sounds like a party.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="img-cinematic aspect-[4/5]">
              <img
                src={experienceImg}
                alt="Guests dining in the candlelit Casa Lumina room"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y hairline bg-surface">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="img-cinematic aspect-[4/3]">
              <img
                src={interiorImg}
                alt="The Casa Lumina dining room and bar"
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="The Room" title="A Main Street landmark." />
            <Reveal delay={100}>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Hospitality first",
                    copy: "Captains, not servers. Every table is walked through the menu, the wine and the pace of the evening.",
                  },
                  {
                    title: "A cellar with a point of view",
                    copy: "320 Italian labels, from Alto Adige whites to library Barolo, plus a rotating list of pours by the glass.",
                  },
                  {
                    title: "Built for occasions",
                    copy: "Two private rooms, a full buyout option, and a catering team that travels across the metroplex.",
                  },
                ].map((block) => (
                  <div key={block.title} className="border-l border-gold/40 pl-6">
                    <h3 className="font-display text-2xl text-cream">{block.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {block.copy}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <SectionHeading eyebrow="Guest Notes" title="In their words." align="center" />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <Reveal key={t.author} delay={index * 70}>
                <figure className="flex h-full flex-col rounded-lg border border-border bg-surface p-8">
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
          <Reveal className="mt-14 flex flex-wrap justify-center gap-3">
            <ConciergeButton prompt="I'd like to book a table.">Reserve a Table</ConciergeButton>
            <LinkButton to="/menu">See the Menu</LinkButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
