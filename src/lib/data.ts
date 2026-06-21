import {
  Globe,
  Code2,
  Brain,
  ShieldCheck,
  Search,
  FileSearch,
  Eye,
  Wrench,
  ListChecks,
  TestTube2,
  Database,
  PenTool,
  ServerCog,
  Lock,
  Palette,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Agent = {
  name: string;
  blurb: string;
  icon: LucideIcon;
};

export const LEAD_AGENT: Agent = {
  name: "Foxora",
  blurb: "the lead — orchestrates your crew",
  icon: Sparkles,
};

export const SPECIALISTS: Agent[] = [
  { name: "Web", blurb: "live web search & fetch", icon: Globe },
  { name: "Coder", blurb: "implements changes end to end", icon: Code2 },
  { name: "Reasoner", blurb: "deep analysis & architecture", icon: Brain },
  { name: "Verifier", blurb: "reviews the real risks", icon: ShieldCheck },
  { name: "Researcher", blurb: "live research, cited", icon: Search },
  { name: "Scout", blurb: "finds where it lives in code", icon: FileSearch },
  { name: "Vision", blurb: "reads screenshots & mockups", icon: Eye },
  { name: "Utility", blurb: "summarize · extract · classify", icon: Wrench },
  { name: "Planner", blurb: "turns a goal into a plan", icon: ListChecks },
  { name: "Tester", blurb: "writes & runs the tests", icon: TestTube2 },
  { name: "Data", blurb: "wrangles & analyzes data", icon: Database },
  { name: "Writer", blurb: "docs, posts, emails", icon: PenTool },
  { name: "DevOps", blurb: "CI/CD, deploys, infra", icon: ServerCog },
  { name: "Security", blurb: "finds exploitable risk", icon: Lock },
  { name: "Designer", blurb: "UI, layout, visual polish", icon: Palette },
  { name: "Integrator", blurb: "wires APIs, MCP, connectors", icon: Plug },
];

export type Goal = {
  title: string;
  blurb: string;
  staffs: string[];
};

export const GOALS: Goal[] = [
  {
    title: "Launch a SaaS",
    blurb: "repo, auth, billing, deployed",
    staffs: ["Planner", "Coder", "DevOps"],
  },
  {
    title: "Find 50 qualified leads",
    blurb: "enriched + scored list",
    staffs: ["Researcher", "Data", "Web"],
  },
  {
    title: "Ship a hotfix",
    blurb: "reproduced, fixed, tests green",
    staffs: ["Scout", "Coder", "Verifier"],
  },
  {
    title: "Clear the support queue",
    blurb: "triaged + drafted replies",
    staffs: ["Utility", "Writer"],
  },
  {
    title: "Write the launch",
    blurb: "post, emails, assets",
    staffs: ["Writer", "Designer"],
  },
  {
    title: "Build an internal tool",
    blurb: "wired to your APIs",
    staffs: ["Coder", "Integrator"],
  },
];

export type Tier = {
  name: string;
  price: string;
  per: string;
  blurb: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string;
};

export const TIERS: Tier[] = [
  {
    name: "FREE",
    price: "$0",
    per: "forever",
    blurb: "Try the full crew, local-first",
    features: [
      "200 credits / month",
      "17 agents · Fast crew, 72 skills · build your own",
      "Local-first & private",
      "Community support",
    ],
    cta: "Download free",
  },
  {
    name: "STARTER",
    price: "$29",
    per: "mo",
    blurb: "Go cloud — agents that run for you",
    features: [
      "2,000 credits / month",
      "Cloud agents · 50 runs, 2 at once",
      "5 scheduled tasks",
      "Web search · 100 / mo",
      "Email support",
    ],
    cta: "Get Starter",
  },
  {
    name: "PRO",
    price: "$59",
    per: "mo",
    blurb: "Serious, multi-step build work",
    features: [
      "5,000 credits / month",
      "Cloud agents · 500 runs, 5 at once",
      "50 tasks · web search 500 / mo",
      "Bigger memory & embeddings",
      "Priority support",
    ],
    cta: "Start Pro",
    highlighted: true,
    badge: "POPULAR",
  },
  {
    name: "MAX",
    price: "$199",
    per: "mo",
    blurb: "Frontier models, runs 24/7",
    features: [
      "20,000 credits / month",
      "The Max crew — frontier models",
      "Cloud agents · 5,000 runs, 20 at once",
      "500 tasks · web search 2,000 / mo",
      "Priority everything",
    ],
    cta: "Go Max",
  },
];
