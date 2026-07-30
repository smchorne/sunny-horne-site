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
      "Own AI and technology strategy for Intuit's corporate talent performance management and development platform, partnering with product, engineering, and HR leadership to turn ambiguous transformation goals into an executable roadmap.",
    achievements: [
      "Own the fit/gap strategy and roadmap for Intuit's digital transformation to Workday, setting technical direction and sequencing delivery commitments across product, engineering, and HR stakeholders.",
      "Own AI product strategy and operating model for the talent performance domain, serving as the vertical strategy lead within Intuit's enterprise-wide AI architectural foundation spanning all workforce technology.",
      "Piloting an AI-powered 1:1 prep agent as the no-regret proof point for Intuit's enterprise AI architecture, generating contextual work summaries and agenda topics for manager-employee conversations, with a roadmap to scale into an enterprise-wide performance coach that helps managers develop and retain talent at scale.",
    ],
  },
  {
    company: "Amazon",
    about: "Global technology and e-commerce leader — $638B revenue, 1.56M employees.",
    location: "Portland, OR",
    dates: "Apr 2024 – Aug 2025",
    title: "Principal Product Manager, Technical",
    intro:
      "Promoted to own platform strategy and the enterprise-wide hiring experience for Amazon's corporate talent acquisition systems, setting technical direction and investment priorities across 20+ teams supporting 50,000+ leaders enterprise-wide.",
    achievements: [
      "Owned the migration strategy and investment case to modernize legacy talent acquisition architecture, evaluating build/buy/migrate trade-offs across 20+ technical teams and translating the decision into an executive-ready case that saved $5M YoY.",
      "Orchestrated an SVP-sponsored initiative to integrate the recruiting platform into a seamless hiring manager experience, delivering against committed milestones in 10 weeks, reaching 50K leaders across the enterprise.",
      "Reduced privacy and compliance risk by 40% by redesigning the permissions and audit framework for sensitive candidate data, establishing the ownership structure and accountability standards adopted across the org.",
      "Designed and launched the operating model defining cross-functional ownership lanes and SLAs across two developer organizations, improving delivery predictability and partnership effectiveness.",
    ],
  },
  {
    company: "Amazon",
    location: "Vancouver, WA",
    dates: "Nov 2021 – Apr 2024",
    title: "Senior Product Manager, Technical",
    intro:
      "Promoted to own talent acquisition strategy and drive organization-wide process standardization, building a zero-to-one executive sourcing product and the operating model that scaled delivery discipline org-wide.",
    achievements: [
      "Owned strategy, roadmap, and launch for a 0-1 specialty executive recruiting product, reducing executive hiring cycle time by 25% and reaching 90% adoption within year one through integrated feedback loops and organizational change management.",
      "Designed and launched the enterprise-wide SDLC operating model spanning 500+ technical and product professionals across 20+ teams, establishing planning cadences, ownership structures, and delivery standards that lifted cross-team collaboration and execution consistency org-wide.",
    ],
  },
  {
    company: "Amazon",
    location: "Seattle, WA",
    dates: "Mar 2020 – Oct 2021",
    title: "Senior Product Manager",
    intro:
      "Moved deliberately into product management, backed by leadership, to own strategy for talent products spanning performance and learning and development, scaling from IC execution to organization-wide platform ownership.",
    achievements: [
      "Owned go-to-market strategy and roadmap for talent management products, scaling adoption +175% across all Amazon organizations, driving alignment across three organizations and 100+ FTEs, with sustained SVP-level visibility and quarterly business review ownership.",
      "Set product vision and strategy for a new HR data services platform, reducing developer costs across 10 global teams through disciplined capacity planning and delivery ownership.",
      "Drove the strategic transition of a single-purpose learning product into a reusable platform, decoupling notification, segmentation, and content orchestration into shared services that cut new site activation time from roughly 2 months to roughly 2 weeks.",
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
    dates: "Apr 2014 – Mar 2016",
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
  "Organizational Strategy",
  "Operating Model Design",
  "Business Strategy",
  "Cross-Functional Leadership",
  "People Leadership & Team Development",
  "Executive Communication",
  "Change Management",
  "Stakeholder Management",
  "AI Product Strategy",
  "Agentic Systems Development",
  "Enterprise AI Roadmapping",
  "Product Lifecycle Management",
  "Agile Product Operations",
  "Relationship Building",
  "Data-Driven Decision Making",
  "Systems Thinking",
  "Engagement Strategy & User Activation",
  "User Journey Optimization",
  "KPI Frameworks & Analytics",
  "A/B Testing & Experimentation",
  "Root Cause Analysis",
  "Continuous Improvement",
];
