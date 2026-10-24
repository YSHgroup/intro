// Single place for site + personal info.
export const site = {
  name: 'Healthspan Network',
  fullName: 'Human Healthspan, AI & Scientific Innovation Network',
  tagline: 'Better People. Better Science. A Healthier Future.',
  positioning: 'A global network for better human health, capability and longevity.',
  description:
    'An AI-powered social and scientific collaboration platform connecting people, knowledge, data and researchers to accelerate responsible innovation in human healthspan, medicine, biotechnology and the science of longevity.',
  status: 'Preview · Research & infrastructure stage',
  updated: 'October 2026',
  url: 'https://portfolio.davidpro.workers.dev',
};

export type LinkItem = {
  key: 'email' | 'website' | 'github' | 'huggingface' | 'reddit';
  label: string;
  handle: string;
  href: string;
  scope: 'personal' | 'project';
};

export const owner = {
  name: 'David Chan',
  role: 'Founder & Product Builder',
  location: 'Singapore',
  headline: 'Software Developer | Entrepreneur | Researching AI, Healthcare & Social Network',
  bio: [
    'I’m a software developer, project manager, and aspiring entrepreneur passionate about turning ambitious ideas into meaningful products. I enjoy building efficient, user-focused solutions, tackling complex challenges, and identifying opportunities where technology can create lasting value.',
    'Beyond writing code, I focus on the bigger picture: why a product should exist, who it serves, and how it can grow into a sustainable business. I combine technical craftsmanship with strategic thinking and leadership to build products, empower teams, and turn ideas into measurable impact.',
    'My ambition is to build businesses at the intersection of technology, innovation, and human potential, creating solutions that challenge the status quo and make a meaningful difference.',
  ],
  motto: 'Technology is my edge. Entrepreneurship is my path. Impact is my legacy.',
  whyThisProject:
    'Right now I’m researching this idea and building the project’s infrastructure. It comes from a dream I’ve carried since childhood, and from this moment in AI, when tools that help people learn, collaborate and discover are finally within reach.',
  skillGroups: [
    { title: 'Engineering', items: ['TypeScript & React', 'Python & FastAPI', 'Astro / Next.js', 'PostgreSQL & Redis', 'Cloud & DevOps'] },
    { title: 'AI & Data', items: ['LLM APIs & RAG', 'AI agent orchestration', 'Vector search', 'Knowledge graphs', 'Data pipelines'] },
    { title: 'Product & Leadership', items: ['Product strategy', 'Project management', 'UX thinking', 'Team leadership', 'Business modeling'] },
    { title: 'Trust & Domain', items: ['Health-data privacy', 'Security by design', 'Fintech, healthcare & e-commerce experience', 'Responsible AI'] },
  ],
};

export const links: LinkItem[] = [
  { key: 'email', label: 'Email', handle: 'david.dev100@outlook.com', href: 'mailto:david.dev100@outlook.com', scope: 'personal' },
  { key: 'website', label: 'Portfolio', handle: 'portfolio.davidpro.workers.dev', href: 'https://portfolio.davidpro.workers.dev/', scope: 'personal' },
  { key: 'github', label: 'GitHub', handle: 'yshgroup', href: 'https://github.com/yshgroup', scope: 'personal' },
  { key: 'huggingface', label: 'Hugging Face', handle: 'ysh-david', href: 'https://huggingface.co/ysh-david', scope: 'personal' },
  { key: 'reddit', label: 'Reddit', handle: 'u/David-dev100', href: 'https://www.reddit.com/user/David-dev100', scope: 'personal' },
  { key: 'github', label: 'GitHub (project)', handle: 'ysh-group', href: 'https://github.com/ysh-group', scope: 'project' },
  { key: 'huggingface', label: 'Hugging Face (project)', handle: 'YSHgroup', href: 'https://huggingface.co/YSHgroup', scope: 'project' },
];

export const personalLinks = links.filter((l) => l.scope === 'personal');
export const projectLinks = links.filter((l) => l.scope === 'project');

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'The Idea', href: '/#idea' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'About Me', href: '/about' },
];
