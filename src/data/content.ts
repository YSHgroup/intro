// Content distilled from the project blueprint (Sept 2026).

export const pillars = [
  { title: 'Connect', text: 'Find people, communities, experts and teams.' },
  { title: 'Learn', text: 'Understand health and science at the right level.' },
  { title: 'Improve', text: 'Build evidence-informed healthy routines and capabilities.' },
  { title: 'Share', text: 'Publish experiences, ideas, questions and knowledge.' },
  { title: 'Research', text: 'Create and collaborate on structured research projects.' },
  { title: 'Discover', text: 'Find evidence, gaps, datasets and opportunities.' },
  { title: 'Create', text: 'Turn ideas into projects and collaborations.' },
  { title: 'Accelerate', text: 'Use AI to organize, analyze and connect knowledge.' },
];

export const worlds = [
  {
    title: 'Health & Social Network',
    items: [
      'Profiles, follows, posts and blogs',
      'Questions, answers and discussions',
      'Topic communities and groups',
      'Challenges and progress sharing',
      'Events and expert content',
    ],
  },
  {
    title: 'Scientific & Research Network',
    items: [
      'Researcher and expert profiles',
      'Private, team and public workspaces',
      'Literature, datasets and hypotheses',
      'Knowledge graph and AI research assistants',
      'Researcher matching and research challenges',
    ],
  },
];

export const scope = [
  'Longevity & healthspan',
  'Fitness & strength',
  'Nutrition & routines',
  'Skin & appearance',
  'Brain & cognition',
  'Medicine & healthcare',
  'Biotechnology',
  'Genome engineering',
  'AI for science',
];

export const loop = [
  'Question',
  'Discussion',
  'Evidence',
  'Knowledge',
  'Hypothesis',
  'Collaboration',
  'Research',
  'Result',
  'New Knowledge',
];

export const evidenceLevels = [
  'Peer-reviewed research',
  'Clinical evidence',
  'Human observational',
  'Animal / cell evidence',
  'Computational prediction',
  'Expert opinion',
  'Community hypothesis',
  'AI-generated hypothesis',
];

export const principles = [
  {
    title: 'Experience is not evidence',
    text: 'What people experience, what science supports, and what researchers hypothesize are always kept visibly separate.',
  },
  {
    title: 'Trust and privacy first',
    text: 'Consent, permissions, provenance and auditability are core product features, not afterthoughts.',
  },
  {
    title: 'AI that explains',
    text: 'AI is grounded in citations, clearly labeled and honest about uncertainty. Humans stay responsible for scientific judgment.',
  },
  {
    title: 'Not a doctor',
    text: 'Not a medical replacement, not an autonomous doctor, and not an "immortality" service.',
  },
];

export const phases = [
  { phase: '0', name: 'Validation', focus: 'Interviews, positioning, prototype', outcome: 'Confirm the strongest user problems' },
  { phase: '1', name: 'MVP', focus: 'Social, profiles, communities, research workspace, AI Q&A', outcome: 'Prove engagement and utility' },
  { phase: '2', name: 'Knowledge', focus: 'Scientific search, evidence layer, knowledge graph', outcome: 'Improve research discovery' },
  { phase: '3', name: 'Collaboration', focus: 'Research matching, teams, events, challenges', outcome: 'Create network effects' },
  { phase: '4', name: 'Data & AI', focus: 'Advanced datasets, agents, analysis tools', outcome: 'Increase scientific value' },
  { phase: '5', name: 'Institutions', focus: 'Enterprise and private research environments', outcome: 'Monetization and defensibility' },
  { phase: '6', name: 'Global ecosystem', focus: 'Funding, labs, APIs, research marketplace', outcome: 'Become infrastructure' },
];

export const mvp = [
  'User profiles, follows, posts, comments, questions and topic communities',
  'Researcher and expert profiles',
  'Private, team and public research workspaces',
  'Document and literature storage with semantic search',
  'AI assistant using curated sources and user-authorized data',
  'Basic researcher and project discovery',
  'Starter communities: healthy aging, strength, nutrition, skin health, brain health, biomedical research',
  'First expert event or research challenge',
];

export const stack = [
  ['Frontend', 'Next.js, React, TypeScript'],
  ['Backend', 'Python / FastAPI'],
  ['Data', 'PostgreSQL, Redis, object storage'],
  ['Search & graph', 'OpenSearch, vector retrieval, Neo4j'],
  ['AI', 'Frontier LLM APIs, RAG, tool calling, agents'],
];
