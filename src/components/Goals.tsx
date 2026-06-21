import { Section } from "./ui/Section";
import { GoalCard } from "./ui/GoalCard";
import { GOALS } from "../lib/data";

export function Goals() {
  return (
    <Section
      id="goals"
      eyebrow="Run your business"
      headline="Point it at anything a startup needs."
      sub="Your crew doesn't just code. Give it the goal — it staffs the right agents, does the work, and ships."
      glow="orange"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {GOALS.map((goal, i) => (
          <GoalCard
            key={goal.title}
            title={goal.title}
            blurb={goal.blurb}
            staffs={goal.staffs}
            delay={Math.min(i * 0.05, 0.3)}
          />
        ))}
      </div>
    </Section>
  );
}
