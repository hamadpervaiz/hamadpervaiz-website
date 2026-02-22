export interface Memo {
  slug: string;
  date: string;
  fullDate: string;
  title: string;
  tag: string;
  time: string;
  featuredImage?: string;
  sections: {
    type: "heading" | "paragraph" | "blockquote" | "callout" | "image";
    content: string;
    caption?: string;
  }[];
}

export const memos: Memo[] = [
  {
    slug: "the-middleware-paradox",
    date: "2025.02",
    fullDate: "2025.02.20",
    title: "The Middleware Paradox: Why Most SaaS is Dead Architecture",
    tag: "SYSTEMS",
    time: "8 MIN READ",
    sections: [
      { type: "heading", content: "// 01. THE SYSTEMIC FAILURE" },
      {
        type: "paragraph",
        content:
          "The modern SaaS landscape is built on a lie. Somewhere between the first wave of cloud computing and the current gold rush of AI-powered everything, we collectively decided that middleware \u2014 the connective tissue between systems \u2014 was a feature, not a liability.",
      },
      {
        type: "paragraph",
        content:
          "Every integration layer you add is a structural dependency you cannot remove. Every API call to a third-party service is a wall you\u2019ve built inside your own house. The paradox is this: the more \u2018connected\u2019 your stack becomes, the more fragile your architecture gets.",
      },
      {
        type: "paragraph",
        content:
          "I\u2019ve watched this pattern destroy three portfolio companies in the last eighteen months. Not from lack of product-market fit. Not from poor execution. From middleware rot \u2014 the slow, invisible decay that happens when your core business logic is scattered across twelve different vendor APIs.",
      },
      {
        type: "blockquote",
        content:
          "The middleware layer is the new technical debt. It\u2019s the debt nobody audits, nobody owns, and nobody can remove without rebuilding from scratch.",
      },
      { type: "heading", content: "// 02. THE ARCHITECTURE ALTERNATIVE" },
      {
        type: "paragraph",
        content:
          "The solution is not fewer integrations \u2014 it\u2019s a fundamentally different relationship with external dependencies. What I call \u2018sovereign architecture\u2019 is the practice of building core business logic entirely in-house, treating every external service as replaceable infrastructure.",
      },
      {
        type: "paragraph",
        content:
          "This means your payment processing, your notification layer, your authentication \u2014 none of it should contain a single line of business logic. They are pipes, not brains. The moment a pipe starts making decisions, you\u2019ve lost control of your own system.",
      },
      {
        type: "callout",
        content:
          "At BearPlex, we rebuilt our entire notification infrastructure in 72 hours after our primary vendor changed their pricing by 400%. The reason we could do this? Zero business logic in the notification layer. It was a pipe. We just connected a different pipe.",
      },
      {
        type: "image",
        content: "GRAYSCALE DIAGRAM / FIGURE",
        caption:
          "Fig. 01 \u2014 Dependency graph of a typical SaaS stack with 12+ middleware integrations. Each node represents a single point of failure.",
      },
      { type: "heading", content: "// 03. THE PERMANENT ADVANTAGE" },
      {
        type: "paragraph",
        content:
          "Companies that own their architecture own their destiny. This isn\u2019t ideology \u2014 it\u2019s mathematics. When you control the core logic, your marginal cost of change approaches zero. When someone else controls it, your marginal cost of change approaches infinity.",
      },
      {
        type: "paragraph",
        content:
          "The companies I invest in understand this intuitively. They build slowly, they build deeply, and they build permanently. They don\u2019t chase the latest integration marketplace. They build the marketplace.",
      },
      {
        type: "paragraph",
        content:
          "The middleware paradox will claim more casualties in the next five years than any market downturn. The survivors won\u2019t be the ones with the most integrations. They\u2019ll be the ones who never needed them in the first place.",
      },
    ],
  },
  {
    slug: "asymmetric-bets",
    date: "2025.01",
    fullDate: "2025.01.15",
    title: "Asymmetric Bets: A Framework for Non-Consensus Investing",
    tag: "INVESTING",
    time: "12 MIN READ",
    sections: [
      { type: "heading", content: "// 01. THE CONTRARIAN IMPERATIVE" },
      {
        type: "paragraph",
        content:
          "The greatest investments of the last century share one trait: they were universally dismissed at inception. The pattern is so consistent it should be a law of physics \u2014 consensus returns deliver consensus results.",
      },
      {
        type: "paragraph",
        content:
          "Asymmetric bets are not about being contrarian for its own sake. They\u2019re about identifying structural mispricings where the downside is bounded but the upside is exponential. The math has to work before the narrative does.",
      },
      {
        type: "paragraph",
        content:
          "In frontier markets, these mispricings are everywhere. Infrastructure that the West takes for granted simply doesn\u2019t exist, creating vacuum opportunities for founders who can build from first principles rather than copying Silicon Valley playbooks.",
      },
      {
        type: "blockquote",
        content:
          "The best investments are the ones that make you uncomfortable. If everyone agrees with your thesis, you\u2019re already too late.",
      },
      { type: "heading", content: "// 02. THE FRAMEWORK" },
      {
        type: "paragraph",
        content:
          "My framework for evaluating asymmetric opportunities has three pillars: structural advantage, founder permanence, and market timing dislocation. All three must be present. Two out of three is a trap.",
      },
      {
        type: "paragraph",
        content:
          "Structural advantage means the company has built something that cannot be replicated with capital alone. Founder permanence means the leadership treats this as a life\u2019s work, not a stepping stone. Market timing dislocation means the market hasn\u2019t yet recognized what\u2019s being built.",
      },
      {
        type: "callout",
        content:
          "Of the 47 deals we evaluated last quarter at Turing VC, only 3 met all three criteria. Our acceptance rate isn\u2019t low because we\u2019re selective \u2014 it\u2019s low because true asymmetry is genuinely rare.",
      },
      { type: "heading", content: "// 03. THE PATIENT CAPITAL THESIS" },
      {
        type: "paragraph",
        content:
          "The venture industry\u2019s obsession with speed is its greatest weakness. Asymmetric returns require patient capital \u2014 the willingness to wait years for a thesis to materialize while the market calls you wrong.",
      },
      {
        type: "paragraph",
        content:
          "Every great architecture was built slowly. The same is true for great portfolios. The compounding effects of permanent, well-architected investments create returns that make speed-optimized portfolios look like noise.",
      },
    ],
  },
  {
    slug: "the-permanent-portfolio",
    date: "2024.11",
    fullDate: "2024.11.08",
    title: "The Permanent Portfolio: Building What Outlasts You",
    tag: "STRATEGY",
    time: "6 MIN READ",
    sections: [
      { type: "heading", content: "// 01. BEYOND THE EXIT" },
      {
        type: "paragraph",
        content:
          "The venture ecosystem has conditioned an entire generation of founders to optimize for a single metric: the exit. Build fast, scale faster, sell fastest. But what if the exit is the wrong goal entirely?",
      },
      {
        type: "paragraph",
        content:
          "A permanent portfolio is built on the premise that the most valuable thing you can create is something that doesn\u2019t need to be sold. Infrastructure so essential, so deeply embedded, that removing it would be more expensive than acquiring it.",
      },
      {
        type: "blockquote",
        content:
          "Build something that outlasts you. That\u2019s the only exit strategy worth having.",
      },
      { type: "heading", content: "// 02. THE INFRASTRUCTURE MINDSET" },
      {
        type: "paragraph",
        content:
          "Infrastructure companies don\u2019t chase trends. They create the ground on which trends are built. This is the difference between building on shifting sand and building on bedrock.",
      },
      {
        type: "paragraph",
        content:
          "Every company in my portfolio was built with a 20-year horizon. Not because we\u2019re patient \u2014 because permanent infrastructure requires permanent thinking. The quarterly earnings call is the enemy of architectural excellence.",
      },
    ],
  },
  {
    slug: "zero-to-one-infrastructure",
    date: "2024.09",
    fullDate: "2024.09.22",
    title: "Zero-to-One Infrastructure in Frontier Markets",
    tag: "THESIS",
    time: "15 MIN READ",
    sections: [
      { type: "heading", content: "// 01. THE BLANK CANVAS" },
      {
        type: "paragraph",
        content:
          "Frontier markets don\u2019t have legacy infrastructure to replace. They have nothing. And nothing is the greatest competitive advantage in technology \u2014 because you can build correctly from day one.",
      },
      {
        type: "paragraph",
        content:
          "While developed markets spend billions maintaining and patching systems built in the 1990s, frontier markets can leapfrog directly to modern architecture. Mobile-first banking in Africa. Digital identity in South Asia. Cloud-native logistics in the Middle East.",
      },
      {
        type: "paragraph",
        content:
          "The pattern is consistent: markets with the least legacy infrastructure produce the most innovative solutions. Constraint breeds architecture.",
      },
      {
        type: "blockquote",
        content:
          "The absence of infrastructure is not a disadvantage. It\u2019s an invitation to build something permanent.",
      },
      { type: "heading", content: "// 02. THE FRONTIER THESIS" },
      {
        type: "paragraph",
        content:
          "My thesis on frontier markets is simple: the next trillion-dollar companies will not emerge from Silicon Valley. They will emerge from markets where the gap between current infrastructure and human potential is widest.",
      },
      {
        type: "callout",
        content:
          "Pakistan alone has 220 million people, a median age of 22, and smartphone penetration growing at 15% annually. The infrastructure to serve this population doesn\u2019t exist yet. Someone will build it. The question is whether it will be built permanently or temporarily.",
      },
      { type: "heading", content: "// 03. BUILDING FOR BILLIONS" },
      {
        type: "paragraph",
        content:
          "Building for frontier markets requires a fundamentally different approach. You cannot assume reliable connectivity, consistent power, or uniform device capabilities. Every architectural decision must account for the worst case, not the best.",
      },
      {
        type: "paragraph",
        content:
          "This constraint produces better architecture. Systems designed for unreliable environments are inherently more resilient than those designed for ideal conditions. The frontier doesn\u2019t just need infrastructure \u2014 it needs permanent infrastructure.",
      },
    ],
  },
  {
    slug: "why-i-dont-invest-in-ai-wrappers",
    date: "2024.07",
    fullDate: "2024.07.14",
    title: "Why I Don\u2019t Invest in \u2018AI Wrappers\u2019",
    tag: "INVESTING",
    time: "10 MIN READ",
    sections: [
      { type: "heading", content: "// 01. THE WRAPPER EPIDEMIC" },
      {
        type: "paragraph",
        content:
          "Every week, my inbox fills with pitches for the same product wearing different clothes: a thin user interface wrapped around someone else\u2019s AI model. Different logos, same dependency. Different slides, same vulnerability.",
      },
      {
        type: "paragraph",
        content:
          "AI wrappers are the middleware paradox on steroids. At least traditional middleware connected your own systems. AI wrappers outsource your entire value proposition to a model you don\u2019t control, can\u2019t modify, and might lose access to at any moment.",
      },
      {
        type: "blockquote",
        content:
          "If your entire business can be replicated by changing one API key, you don\u2019t have a business. You have a demo.",
      },
      { type: "heading", content: "// 02. THE REAL AI OPPORTUNITY" },
      {
        type: "paragraph",
        content:
          "The real opportunity in AI isn\u2019t wrapping models \u2014 it\u2019s building the infrastructure that makes models useful. Data pipelines, domain-specific training systems, deployment architectures that work at scale in constrained environments.",
      },
      {
        type: "paragraph",
        content:
          "This is what BearPlex builds. Not AI features \u2014 AI infrastructure. The plumbing that makes intelligence permanent rather than borrowed. The companies that own their AI stack will own the next decade.",
      },
      {
        type: "callout",
        content:
          "Every AI wrapper company is one API price change away from extinction. Every AI infrastructure company is one step closer to permanence. Choose which side of that equation you want to be on.",
      },
    ],
  },
  {
    slug: "the-case-against-venture-scale-thinking",
    date: "2024.04",
    fullDate: "2024.04.03",
    title: "The Case Against Venture-Scale Thinking in Pakistan",
    tag: "ANALYSIS",
    time: "14 MIN READ",
    sections: [
      { type: "heading", content: "// 01. THE SILICON VALLEY IMPORT" },
      {
        type: "paragraph",
        content:
          "Pakistan\u2019s startup ecosystem has spent the last decade importing Silicon Valley\u2019s playbook wholesale: raise fast, burn faster, worry about unit economics never. The results have been predictably catastrophic.",
      },
      {
        type: "paragraph",
        content:
          "The venture-scale model assumes abundant capital, deep talent pools, and markets that reward speed over sustainability. None of these conditions exist in Pakistan. Applying a framework designed for San Francisco to Lahore is not ambition \u2014 it\u2019s architectural malpractice.",
      },
      {
        type: "blockquote",
        content:
          "Stop importing playbooks from markets that don\u2019t look like yours. Start building frameworks that work where you actually are.",
      },
      { type: "heading", content: "// 02. THE ALTERNATIVE MODEL" },
      {
        type: "paragraph",
        content:
          "The alternative is not thinking small \u2014 it\u2019s thinking permanent. Revenue-first businesses that grow at the pace their market can sustain. Architecture that\u2019s designed for the infrastructure that actually exists, not the infrastructure you wish existed.",
      },
      {
        type: "paragraph",
        content:
          "The most successful companies I\u2019ve built and invested in across Pakistan share a common trait: they were profitable before they were famous. They built revenue engines before they built pitch decks. They chose permanence over performance.",
      },
      {
        type: "callout",
        content:
          "The next wave of Pakistani tech won\u2019t be measured by funding rounds. It will be measured by profitability, employment, and infrastructure that actually works. The era of imported metrics is over.",
      },
      { type: "heading", content: "// 03. BUILDING FOR PAKISTAN" },
      {
        type: "paragraph",
        content:
          "Pakistan doesn\u2019t need more startups. It needs more permanent businesses. Companies that create jobs, generate revenue, and build infrastructure that serves the next generation \u2014 not the next funding cycle.",
      },
      {
        type: "paragraph",
        content:
          "This is not a pessimistic take. This is the most optimistic take possible \u2014 because permanent businesses create permanent value. And permanent value is what this country actually needs.",
      },
    ],
  },
];

export function getMemoBySlug(slug: string): Memo | undefined {
  return memos.find((m) => m.slug === slug);
}
