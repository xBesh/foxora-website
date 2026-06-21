import { Section } from "./ui/Section";
import { PricingCard } from "./ui/PricingCard";
import { TIERS } from "../lib/data";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      headline="A whole team. One simple price."
      sub="Start free. Upgrade the gear when the work gets serious."
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
        {TIERS.map((tier, i) => (
          <PricingCard key={tier.name} tier={tier} delay={Math.min(i * 0.06, 0.3)} />
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted md:mt-12">
        Credits meter the compute you use — memory &amp; skills are always free.
        Top up anytime · cancel anytime.
      </p>
    </Section>
  );
}
