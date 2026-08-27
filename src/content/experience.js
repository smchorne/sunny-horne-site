// ─── EXPERIENCE PAGE ─────────────────────────────────────────────────────────
// Each entry in `roles` renders as one card in the timeline.
// Add/remove/reorder roles here — the page updates automatically.
//
// Fields:
//   company   — display name of the company
//   about     — one-line company description (optional, renders as subtext)
//   location  — city, state
//   dates     — "Month YYYY – Month YYYY" or "Month YYYY – Present"
//   title     — your role title at that company
//   intro     — (optional) one sentence context for the role, shown in italics
//   achievements — array of bullet strings

export const experience = [
  {
    company: "Intuit",
    about: "Global enterprise fintech — $21B revenue, 18.2K employees.",
    location: "Remote",
    dates: "Aug 2025 – Present",
    title: "Product Manager, Technical (Contract)",
    intro:
      "Own AI and technology strategy for a high-volume enterprise service platform, partnering with product, engineering, and business leadership to turn ambiguous transformation goals into an executable roadmap.",
    achievements: [
      "Own the fit/gap strategy and roadmap for Intuit's enterprise platform transformation to Workday, setting technical direction and sequencing delivery commitments across product, engineering, and business stakeholders through cutover and hypercare.",
      "Delivered a 0-1 custom Workday application powering a monthly manager-employee check-in process, setting the technical pattern for future Workday-native builds.",
      "Own AI product strategy and operating model for a core enterprise service domain, serving as the vertical strategy lead within Intuit's enterprise-wide AI architecture spanning self-service, automation, and knowledge tools used company-wide.",
      "Designed and launched a suite of AI workflows now in production, including 1:1 preparation, summary generation, and goal coaching, embedded directly into existing manager and employee workflows to remove the context-gathering work that crowds out substantive conversation. The suite established the data foundation and reusable configuration patterns that subsequent AI-native people experiences build on.",
    ],
  },
  {
    company: "Amazon",
    about: "Global technology and e-commerce leader — $638B revenue, 1.56M employees.",
    location: "Portland, OR",
    dates: "Apr 2024 – Aug 2025",
    title: "Principal Product Manager, Technical",
    intro:
      "Promoted to own platform strategy and the enterprise-wide product experience for Amazon's corporate talent acquisition systems, setting technical direction and investment priorities across 20+ teams supporting 50,000+ users enterprise-wide.",
    achievements: [
      "Owned the migration strategy and investment case to modernize legacy enterprise service architecture, evaluating build/buy/migrate trade-offs across 20+ technical teams and translating the decision into an executive-ready case that saved $5M YoY.",
      "Orchestrated an SVP-sponsored initiative to integrate the platform into a seamless manager experience, delivering against committed milestones in 10 weeks and reaching 50K users across the enterprise.",
      "Reduced privacy and compliance risk by 40% by redesigning the permissions and audit framework for sensitive personal data, establishing the ownership structure and accountability standards adopted across the org.",
      "Designed and launched the operating model defining cross-functional ownership lanes and SLAs across two developer organizations, improving delivery predictability and partnership effectiveness.",
    ],
  },
  {
    company: "Amazon",
    location: "Vancouver, WA",
    dates: "Nov 2021 – Apr 2024",
    title: "Senior Product Manager, Technical",
    intro:
      "Promoted to own enterprise sourcing strategy and drive organization-wide process standardization, building a zero-to-one sourcing product and the operating model that scaled delivery discipline org-wide.",
    achievements: [
      "Owned strategy, roadmap, and launch for a 0-1 specialty sourcing product, reducing cycle time by 25% and reaching 90% adoption within six months through integrated feedback loops and organizational change management.",
      "Designed the product to fold back into the broader platform; through a later enterprise technical consolidation, its capabilities were absorbed into the shared sourcing platform and extended org-wide, strengthening the function's seat in platform prioritization.",
      "Designed and launched the enterprise-wide SDLC operating model spanning 500+ technical and product professionals across 20+ teams, establishing planning cadences, ownership structures, and delivery standards that lifted cross-team collaboration and execution consistency org-wide.",
    ],
  },
  {
    company: "Amazon",
    location: "Seattle, WA",
    dates: "Mar 2020 – Oct 2021",
    title: "Senior Product Manager",
    intro:
      "Moved deliberately into product management, backed by leadership, to own strategy for a portfolio of enterprise service products, scaling from IC execution to organization-wide platform ownership.",
    achievements: [
      "Owned go-to-market strategy and roadmap for enterprise service products, scaling adoption +175% across all Amazon organizations, driving alignment across three organizations and 100+ FTEs, with sustained SVP-level visibility and quarterly business review ownership.",
      "Set product vision and strategy for a new enterprise data services platform, reducing developer costs across 10 global teams through disciplined capacity planning and delivery ownership.",
      "Drove the strategic transition of a single-purpose product into a reusable platform, decoupling notification, segmentation, and content orchestration into shared services that cut new site activation time from roughly 2 months to roughly 2 weeks.",
    ],
  },
  {
    company: "Amazon",
    location: "Seattle, WA",
    dates: "Apr 2019 – Mar 2020",
    title: "Senior Marketing Manager",
    intro:
      "Promoted to own global engagement strategy for Amazon Assistant, setting the roadmap and operating standards for a cross-functional team spanning engineering, UX, legal, and customer support.",
    achievements: [
      "Owned the global campaign experimentation strategy and roadmap, increasing monthly customer engagement by 225% by designing personalized experiences that drove systematic habit formation across user segments.",
      "Set product direction for gamification and engagement mechanisms, aligning engineering, UX, legal, and customer support around a single operational readiness standard for launch.",
      "Cut marketing campaign live error rate by 80% by establishing the QA, contingency planning, and metrics-tracking operating model adopted across the team.",
    ],
  },
  {
    company: "Amazon",
    location: "Seattle, WA",
    dates: "Oct 2016 – Apr 2019",
    title: "Marketing Manager",
    intro:
      "Hired to own e-commerce deal event strategy affecting millions of active customers, serving as strategic anchor for 40+ retail and tech teams, aligning product and UX roadmap decisions across Amazon's global deals ecosystem.",
    achievements: [
      "Owned cross-channel digital marketing strategy for global deal events, contributing 8-figure attributable revenue through campaign experimentation, increasing product CTR by 1,500 bps and driving cross-sell across complementary Amazon services.",
      "Led the rebranding and global launch of Amazon Deals, coordinating across Legal, PR, Product, Engineering, and Design, increasing deal CTR by 400 bps, driving significant revenue increase within the first two months.",
      "Built the experimentation and personalization systems that scaled across multiple product surfaces, identifying key user moments and driving measurable gains in user activation and retention.",
    ],
  },
  {
    company: "Amazon",
    location: "Robbinsville, NJ",
    dates: "Apr 2014 – Oct 2016",
    title: "Area Manager, Fulfillment Operations",
    intro:
      "Promoted to Area Manager II for sustained leadership performance and cross-functional excellence, directly owning fulfillment operations for teams of up to 150 hourly associates during peak volume.",
    achievements: [
      "Owned daily operations and people leadership for teams of 20–150 hourly associates across high-volume fulfillment, consistently hitting throughput targets while driving continuous process improvement.",
      "Built the operating conditions and team culture that helped associates perform at their best through peak-volume periods.",
    ],
  },
];

export const education = [
  {
    degree: "MBA",
    school: "University of Washington",
    note: "Capstone Competition Case Winner",
  },
  {
    degree: "BSBA, Marketing Concentration, Minor in Spanish",
    school: "Auburn University",
    note: "Magna Cum Laude",
  },
];

export const skills = [
  "AI Product Strategy",
  "Enterprise AI Roadmapping",
  "Operating Model Design",
  "Organizational Strategy",
  "Business Strategy",
  "Cross-Functional Leadership",
  "Change Management",
  "People Leadership & Team Development",
  "Stakeholder Management",
  "Executive Communication",
  "Conversational AI & Agentic Systems",
  "Automation & Self-Service Strategy",
  "Operational Governance",
  "Product Lifecycle Management",
  "Agile Product Operations",
  "Engagement Strategy & User Activation",
  "User Journey Optimization",
  "KPI Frameworks & Analytics",
  "Data-Driven Decision Making",
  "Systems Thinking",
  "Relationship Building",
  "Continuous Improvement",
  "Root Cause Analysis",
];
