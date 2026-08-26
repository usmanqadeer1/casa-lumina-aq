import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import privateDiningImg from "@/assets/private-dining.jpg";
import { ConciergeButton } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { PageHero, SectionHeading } from "@/components/site/section";
import { privateDining } from "@/config/restaurant";

export const Route = createFileRoute("/private-dining")({
  head: () => ({
    meta: [
      { title: "Private Dining & Events | Casa Lumina Dallas" },
      {
        name: "description",
        content:
          "Host 14 to 110 guests at Casa Lumina in downtown Dallas. Two private rooms, full buyouts, prix fixe and chef's table packages with custom menus.",
      },
      { property: "og:title", content: "Private Dining at Casa Lumina" },
      {
        property: "og:description",
        content:
          "Two private rooms and a full buyout option in downtown Dallas, each with custom menus and a dedicated captain.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivateDiningPage,
});

function PrivateDiningPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Dining"
        title={privateDining.headline}
        intro={privateDining.intro}
        image={privateDiningImg}
        imageAlt="Private dining room at Casa Lumina set for an event"
      />

      <section className="section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="The Spaces"
            title="Three ways to take the room."
            intro="Each space comes with its own captain, sound and lighting control, and a menu written for your evening."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {privateDining.spaces.map((space, index) => (
              <Reveal key={space.id} delay={index * 90}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-8">
                  <h3 className="font-display text-3xl text-cream">{space.name}</h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-gold">
                    {space.seated} · {space.standing}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {space.description}
                  </p>
                  <p className="mt-6 border-t border-border pt-5 text-sm text-cream">
                    {space.minimum}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y hairline bg-surface">
        <div className="shell">
          <SectionHeading
            eyebrow="Menu Packages"
            title="Choose a menu, or write one with us."
            align="center"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {privateDining.packages.map((pkg, index) => (
              <Reveal key={pkg.id} delay={index * 90}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-background p-8">
                  <h3 className="font-display text-2xl text-cream">{pkg.name}</h3>
                  <p className="mt-2 text-2xl text-gold">{pkg.price}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6 text-sm">
                    {pkg.includes.map((line) => (
                      <li key={line} className="flex gap-3 text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ConciergeButton
                      variant="outline"
                      className="w-full"
                      prompt={`I'm interested in the ${pkg.name} package for a private event.`}
                    >
                      Inquire
                    </ConciergeButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Occasions" title="What we host." />
            <Reveal delay={100}>
              <ul className="mt-8 space-y-4">
                {privateDining.eventTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-4 border-b border-border pb-4 font-display text-2xl text-cream last:border-0"
                  >
                    <span className="size-1.5 rounded-full bg-gold" />
                    {type}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-xl border border-gold/25 bg-surface p-10">
              <p className="eyebrow">Planning</p>
              <h3 className="mt-4 font-display text-3xl text-cream">
                Tell Lumina about your event.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {privateDining.planningNotes}
              </p>
              <div className="mt-8">
                <ConciergeButton prompt="I'd like to plan a private event at Casa Lumina.">
                  Start an Event Inquiry
                </ConciergeButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
