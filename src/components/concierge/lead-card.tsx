import { CalendarCheck, PartyPopper, UtensilsCrossed } from "lucide-react";

type Row = { label: string; value: string | number | null | undefined };

const icons = {
  reservation: CalendarCheck,
  catering: UtensilsCrossed,
  event: PartyPopper,
} as const;

export function LeadCard({
  kind,
  title,
  reference,
  rows,
}: {
  kind: keyof typeof icons;
  title: string;
  reference?: string;
  rows: Row[];
}) {
  const Icon = icons[kind];
  return (
    <div className="rounded-lg border border-gold/35 bg-gold/[0.06] p-4">
      <div className="flex items-center gap-2.5">
        <Icon className="size-4 text-gold" />
        <p className="font-display text-lg text-cream">{title}</p>
        {reference ? (
          <span className="ml-auto text-[0.6rem] uppercase tracking-[0.2em] text-gold">
            {reference}
          </span>
        ) : null}
      </div>
      <dl className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
        {rows
          .filter((row) => row.value !== null && row.value !== undefined && row.value !== "")
          .map((row) => (
            <div key={row.label}>
              <dt className="text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                {row.label}
              </dt>
              <dd className="text-sm text-foreground">{String(row.value)}</dd>
            </div>
          ))}
      </dl>
      <p className="mt-4 border-t border-gold/20 pt-3 text-xs text-muted-foreground">
        Our team will confirm by email within one business day.
      </p>
    </div>
  );
}
