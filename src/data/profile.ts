// All personal copy lives here — edit this file to update the site.

export const profile = {
  name: 'Osmond Ezekwe',
  firstName: 'Osmond',
  location: 'London, UK',
  email: 'ezekwejunior@gmail.com',
  linkedin: 'https://uk.linkedin.com/in/osmond-ezekwe-b539b72b0',
  github: 'https://github.com/kylejunior07',
  status: 'Co-founder @ Intellisport · IT Consultant @ JP Morgan',
  roles: [
    'head of product',
    'startup co-founder',
    'product engineer',
    'football tactician',
    'aviation nerd',
  ],
  intro:
    "I co-founded Intellisport, where I lead product on a tactical search tool that lets football academies find match footage by describing it in plain English. By day I'm an IT Consultant at JP Morgan, supporting trading desk systems. On the side, I build playful things for the browser.",
};

export const education = [
  {
    school: 'University of Westminster',
    detail: 'BSc Computer Science',
    grade: 'First Class Honours',
    when: '2024 – 2026',
    note: 'Focus on HCI & UX and AI',
  },
  {
    school: 'Kaplan International College',
    detail: 'Computer Science',
    grade: 'Distinction',
    when: '2023 – 2024',
  },
];

export const productSkills = [
  'Customer discovery',
  'User research',
  'Product demos',
  'Roadmapping',
  'UX & HCI',
  'Stakeholder mgmt',
  'Agile',
];

export const techSkills = [
  'TypeScript',
  'React',
  'Python',
  'Java',
  'Spring Boot',
  'C++',
  'SQL',
  'Systems design',
  'Servers',
];

export const interests = [
  { emoji: '⚽', label: 'Football' },
  { emoji: '✈️', label: 'Aviation' },
  { emoji: '🚴', label: 'Cycling' },
  { emoji: '🏃', label: 'Running' },
  { emoji: '🍳', label: 'Cooking' },
];

export type Job = {
  company: string;
  role: string;
  when: string;
  summary: string;
  /** Shows a "Now" badge. */
  current?: boolean;
  highlights?: string[];
};

export const experience: Job[] = [
  {
    company: 'Intellisport',
    role: 'Co-founder & Head of Product',
    when: 'Jul 2026 – Present',
    current: true,
    summary:
      'Leading product for a tactical semantic search platform: football academies and youth clubs describe the moment they need in plain language and get the match footage. The long-term roadmap runs towards professional leagues and match simulation.',
    highlights: [
      'Discovery survey (60 responses): analysts lose almost 8 hours a week hunting for footage before a match',
      'Outreach to 500+ people and 20 clubs',
      '1 design partner and 10 interested academies',
      'Club demos feed straight into MVP priorities ahead of launch',
    ],
  },
  {
    company: 'JP Morgan',
    role: 'IT Consultant',
    when: 'Sep 2026 – Present',
    current: true,
    summary:
      'Helping design the systems behind the trading desk, balancing reliability, performance and scale. I support traders directly in a time-critical environment, keep business-critical servers healthy, and turn requirements from trading and tech teams into practical solutions.',
  },
  {
    company: 'Arm',
    role: 'Software Engineering Work Experience',
    when: 'Jun – Aug 2025',
    summary:
      'Worked with the engineering team to debug, refine and optimise application and website features, improving performance and user experience. Documented system configurations, processes and workflows.',
  },
  {
    company: 'Loveworld UK',
    role: 'Systems Summer Analyst',
    when: 'Jun – Aug 2024',
    summary:
      'Analysed system workflows to find critical inefficiencies, then implemented improvements to operational performance.',
  },
  {
    company: 'American Express',
    role: 'Software Engineer Spring Intern',
    when: 'Apr 2024',
    summary:
      'Shadowed software engineers across the London and Burgess Hill offices, and helped troubleshoot IT issues along the way.',
  },
];
