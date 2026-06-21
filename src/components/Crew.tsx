import { Section } from "./ui/Section";
import { AgentCard } from "./ui/AgentCard";
import { LEAD_AGENT, SPECIALISTS } from "../lib/data";

export function Crew() {
  return (
    <Section
      id="crew"
      eyebrow="Your AI workforce"
      headline="Meet your crew."
      sub="Foxora leads. Sixteen specialists do the work — each with its own skills, tools, and judgment. You talk to one; a whole team moves."
      glow="violet"
    >
      {/* Lead + specialists layout: lead spans full width on mobile, then sits centered
          above a 4-column grid of specialists on larger screens. */}
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex justify-center md:mb-10">
          <div className="w-full max-w-sm">
            <AgentCard
              name={LEAD_AGENT.name}
              blurb={LEAD_AGENT.blurb}
              icon={LEAD_AGENT.icon}
              variant="lead"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {SPECIALISTS.map((agent, i) => (
            <AgentCard
              key={agent.name}
              name={agent.name}
              blurb={agent.blurb}
              icon={agent.icon}
              delay={Math.min(i * 0.04, 0.4)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-muted md:mt-14">
          17 agents · one shared memory · work in parallel
        </p>
      </div>
    </Section>
  );
}
