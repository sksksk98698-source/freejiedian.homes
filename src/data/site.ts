/**
 * Site content and configuration.
 *
 * 100% independent and self-contained.
 */

export const siteConfig = {
  name: 'Alex Morgan',
  title: 'Alex Morgan — AI Product & Systems Engineer',
  description: 'Evidence-first engineering portfolio for AI, ML, and production systems.',
  url: 'https://freejiedian.homes',
  locale: 'en_US',
};

export const profile = {
  name: 'Alex Morgan',
  shortName: 'Alex',
  initials: 'AM',
  role: 'AI Product Engineer',
  location: 'Berlin, Germany',
  availability: 'Open to remote AI engineering roles',
  email: 'alex@freejiedian.homes',
  bio: 'AI engineer building evaluated LLM applications, retrieval systems, and dependable ML products.',
  resume: '/resume-placeholder.pdf',
  portrait: '/avatar-placeholder.svg',
};

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Medium', href: 'https://medium.com', icon: 'medium' },
];

export const pageCopy = {
  seoTitle: `${profile.name} — AI Product Engineer`,
  seoDescription: `${profile.role} building evaluated LLM, RAG, agentic AI, and production ML systems. Explore selected case studies and engineering outcomes.`,
  heroEyebrow: profile.role,
  heroLocation: `${profile.location} · ${profile.availability}`,
  heroLead: 'I build intelligence',
  heroMiddle: 'people can actually',
  heroAccent: 'use.',
  heroSummary: 'I turn promising models into evaluated, observable, and useful products—from retrieval and agents to the interfaces people rely on.',
  workIntro: 'A focused set of systems explained through the problem, engineering decisions, evaluation method, and measurable result.',
  labIntro: 'Explore three system modes. Each visualization shows how evidence, controls, and feedback move through a production AI workflow.',
  expertiseIntro: 'I work where model behavior, backend reliability, product experience, and responsible delivery meet.',
  journeyTitle: 'From learning models to leading systems.',
  journeyIntro: 'A clear engineering trajectory connecting deep technical ownership with measurable business outcomes.',
  writingKicker: '04 / Field notes',
  writingTitle: 'Ideas, experiments, and lessons from shipping AI.',
  writingIntro: 'Technical writing, architecture notes, and production post-mortems on shipping reliable AI.',
  contactKicker: 'Have an ambitious AI problem?',
  contactTitle: 'Let’s build something worth shipping.',
  contactBody: `I’m ${profile.availability.toLowerCase()} and interested in teams where AI has to earn trust through evidence.`,
};

export const proofPoints = [
  { value: '27%', label: 'higher answer accuracy', detail: 'Evaluation-led retrieval' },
  { value: '38%', label: 'lower inference cost', detail: 'Caching and model routing' },
  { value: '2.1×', label: 'faster review cycles', detail: 'Human-in-the-loop tooling' },
  { value: '99.9%', label: 'service availability', detail: 'Observable ML delivery' },
];

export type CaseStudy = {
  slug: string;
  index: string;
  label: string;
  title: string;
  seoTitle: string;
  summary: string;
  outcome: string;
  challenge: string;
  approach: string[];
  result: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  visual: 'rag' | 'voice' | 'commerce';
  accent: 'violet' | 'orange' | 'teal';
  external?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'support-copilot',
    index: '01',
    label: 'Retrieval · Evaluation',
    title: 'A support copilot that knows when evidence is not enough.',
    seoTitle: `Evaluated RAG Support Copilot Case Study — ${profile.name}`,
    summary: 'A production system demonstrating hybrid retrieval, answer evaluation, abstention, and human escalation as one cohesive workflow.',
    outcome: '27% higher answer accuracy · 38% lower cost',
    challenge: 'Support teams face accurate knowledge spread across long, overlapping documents. Basic vector search returns plausible passages but cannot reliably recognize weak evidence or conflicting policies.',
    approach: [
      'Combined semantic retrieval with exact-term search, then reranked candidates against the user’s intent.',
      'Added offline evaluation sets for retrieval quality, groundedness, citation accuracy, and safe abstention.',
      'Introduced caching, model routing, and human escalation when evidence confidence dropped below a defined threshold.',
    ],
    result: 'The evaluated workflow improved answer accuracy by 27% and reduced inference cost by 38% while making unsupported answers immediately visible to reviewers.',
    metrics: [
      { value: '+27%', label: 'answer accuracy' },
      { value: '−38%', label: 'inference cost' },
      { value: '4', label: 'evaluation dimensions' },
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'OpenTelemetry', 'AWS'],
    visual: 'rag',
    accent: 'violet',
  },
  {
    slug: 'quality-vision',
    index: '02',
    label: 'Computer vision · MLOps',
    title: 'Visual inspection that makes model uncertainty actionable.',
    seoTitle: `Computer Vision Quality System Case Study — ${profile.name}`,
    summary: 'A computer-vision system centered on calibration, drift monitoring, edge inference, and a review queue for uncertain predictions.',
    outcome: '18% fewer false rejects · 120 ms inference',
    challenge: 'High-throughput inspection lines need low-latency classification, but changes in lighting and materials make raw confidence scores unreliable and false rejects costly.',
    approach: [
      'Calibrated confidence against production-like validation data and routed uncertain items to a compact review queue.',
      'Tracked data slices, drift, and false-reject cost rather than reporting a single aggregate accuracy score.',
      'Optimized the model for edge inference and added traceable model-version metadata to each decision.',
    ],
    result: 'The system reduced false rejects by 18%, met a 120 ms inference budget, and gave operators a clear path for reviewing ambiguous cases.',
    metrics: [
      { value: '−18%', label: 'false rejects' },
      { value: '120 ms', label: 'edge inference' },
      { value: '7', label: 'monitored data slices' },
    ],
    stack: ['PyTorch', 'ONNX', 'OpenCV', 'MLflow', 'Docker', 'Azure'],
    visual: 'voice',
    accent: 'orange',
  },
  {
    slug: 'document-agents',
    index: '03',
    label: 'Agents · Document operations',
    title: 'Document agents designed around approvals, not autonomy theater.',
    seoTitle: `Human-in-the-Loop Agent Workflow Case Study — ${profile.name}`,
    summary: 'An agent workflow demonstrating granular tool permissions, review checkpoints, structured outputs, and observable failure recovery.',
    outcome: '2.1× faster review · 100% approval traceability',
    challenge: 'Operations teams repeat extraction, comparison, and drafting steps across complex documents, where uncontrolled automation risks unacceptable compliance errors.',
    approach: [
      'Split the workflow into narrow tools with explicit permissions, schemas, timeouts, and retry limits.',
      'Placed approval checkpoints before irreversible actions and stored the evidence behind every generated field.',
      'Evaluated completion quality and reviewer correction rate across representative document families.',
    ],
    result: 'Reviewers completed work 2.1× faster while retaining a complete approval and evidence trail for every output.',
    metrics: [
      { value: '2.1×', label: 'review throughput' },
      { value: '100%', label: 'approval traceability' },
      { value: '0', label: 'unreviewed actions' },
    ],
    stack: ['TypeScript', 'Python', 'LangGraph', 'PostgreSQL', 'Temporal', 'GCP'],
    visual: 'commerce',
    accent: 'teal',
  },
];

export const experience = [
  {
    company: 'Neural Platform Systems',
    location: 'Remote',
    marker: 'NP',
    roles: [
      { title: 'Senior AI Systems Engineer', dates: '2024 — Present' },
      { title: 'Machine Learning Engineer', dates: '2022 — 2024' },
    ],
    note: 'Architected distributed evaluation pipelines, real-time RAG services, and observability infrastructure for high-scale LLM deployments.',
  },
  {
    company: 'Applied ML Research Lab',
    location: 'Berlin, Germany',
    marker: 'ML',
    roles: [{ title: 'Research Engineer', dates: '2021 — 2022' }],
    note: 'Focused on model calibration, uncertainty quantification, and reproducible benchmarks for computer vision systems.',
  },
  {
    company: 'Open Source Intelligence Core',
    location: 'Distributed',
    marker: 'OS',
    roles: [{ title: 'Core Contributor', dates: '2020 — Present' }],
    note: 'Authored tools for synthetic data generation, retrieval evaluation, and schema validation.',
  },
];

export const expertise = [
  {
    number: '01',
    title: 'LLM applications',
    description: 'Evaluated RAG, agent workflows, structured outputs, guardrails, and model orchestration grounded in product constraints.',
    tools: ['LangGraph', 'LlamaIndex', 'OpenAI', 'Anthropic', 'Gemini', 'Mistral'],
  },
  {
    number: '02',
    title: 'Machine learning systems',
    description: 'Experiment tracking, data quality, serving, observability, and feedback loops that connect model behavior to real outcomes.',
    tools: ['PyTorch', 'MLflow', 'Weights & Biases', 'Ray', 'Docker', 'Kubernetes'],
  },
  {
    number: '03',
    title: 'Product engineering',
    description: 'APIs, interfaces, and cloud delivery treated as one system—from the first interaction to production telemetry.',
    tools: ['FastAPI', 'React', 'TypeScript', 'AWS', 'Azure', 'GCP'],
  },
];

export const articles = [
  {
    title: 'How I evaluate retrieval before changing the model',
    description: 'A deep dive into evaluation sets, failure categorizations, and engineering decisions that drive search quality.',
    date: 'Oct 2025',
    source: 'Engineering Blog',
    category: 'RAG evaluation',
    visual: 'ads' as const,
    href: '#writing',
  },
  {
    title: 'What production feedback taught me about AI interfaces',
    description: 'Lessons on latency budgets, confidence thresholds, and human-in-the-loop UX patterns.',
    date: 'Jan 2026',
    source: 'System Architecture',
    category: 'AI product',
    visual: 'inquiry' as const,
    href: '#writing',
  },
];

export const writingArchiveUrl = '#writing';

export const education = {
  degree: 'M.S., Computer Science',
  institution: 'Technical University',
  dates: '2019 — 2021',
  score: 'Focus in Machine Learning & Distributed Systems',
  certifications: [
    'AWS Certified Machine Learning - Specialty',
    'Deep Learning Specialization - DeepLearning.AI',
  ],
};

export const spotlight = {
  label: 'Featured Open Source / Evaluation Kit',
  title: 'Turned repeated evaluation work into a reusable toolkit.',
  href: '#work',
  body: 'A standalone evaluation suite providing metrics for groundedness, context relevance, and safe abstention in production LLMs.',
};
