import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, MapPin, Users } from "lucide-react";

import cateringImg from "@/assets/catering.jpg";
import { ConciergeButton } from "@/components/site/cta";
import { Reveal } from "@/components/site/reveal";
import { PageHero, SectionHeading } from "@/components/site/section";
import { catering } from "@/config/restaurant";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering in Dallas–Fort Worth | Casa Lumina" },
      {
        name: "description",
        content:
          "Italian catering across the Dallas–Fort Worth metroplex — office lunches, grazing tables, full-service dinners and weddings from Casa Lumina.",
      },
      { property: "og:title", content: "Casa Lumina Catering" },
      {
        property: "og:description",
        content:
          "Office lunches to full-service weddings across DFW, from $32 per guest with a 10 guest minimum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  const facts = [
    { icon: Users, label: "Minimum", value: `${catering.minimumGuests} guests` },
    { icon: MapPin, label: "Service Area", value: catering.serviceArea },
    { icon: Clock, label: "Lead Time", value: catering.leadTime },
  ];

  return (
    <>
      <PageHero
        eyebrow="Catering"
        title={catering.headline}
        intro={catering.intro}
        image={cateringImg}
        imageAlt="Casa Lumina catering spread of Italian antipasti"
      />

      <section className="section-y">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-3">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 80}>
                <div className="flex gap-4 rounded-lg border border-border bg-surface p-7">
                  <fact.icon className="mt-1 size-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-cream">{fact.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading
            className="mt-20"
            eyebrow="Packages"
            title="From the office to the aisle."
            intro={catering.dietaryNote}
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {catering.packages.map((pkg, index) => (
              <Reveal key={pkg.id} delay={index * 80}>
                <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-cream">{pkg.name}</h3>
                    <span className="text-lg text-gold">{pkg.price}</span>
                  </div>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {pkg.minimum}
                  </p>
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
                      prompt={`I'd like a catering quote for the ${pkg.name} package.`}
                    >
                      Request a Quote
                    </ConciergeButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y hairline bg-surface">
        <div className="shell text-center">
          <SectionHeading
            eyebrow="Get a Quote"
            title="Tell us the date and the headcount."
            intro="Lumina will take your details, match you to a package and pass everything to our catering team — usually in under two minutes."
            align="center"
          />
          <Reveal className="mt-10">
            <ConciergeButton prompt="I'd like a catering quote.">
              Start a Catering Inquiry
            </ConciergeButton>
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
            {catering.eventTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
