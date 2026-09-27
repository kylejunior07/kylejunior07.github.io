// All personal copy lives here — edit this file to update the site.

export const profile = {
  name: 'Osmond Ezekwe',
  firstName: 'Osmond',
  location: 'London, UK',
  email: 'ezekwejunior@gmail.com',
  linkedin: 'https://www.linkedin.com/in/osmond-ezekwe-b539b72b0/',
  github: 'https://github.com/kylejunior07',
  status: 'Open to product engineering roles',
  roles: [
    'product engineer',
    'football tactician',
    'aviation nerd',
    'home chef',
    'weekend cyclist',
  ],
  intro:
    "I build small, sharp products for the browser, the kind you open, play with, and share with a friend. I care about how things feel as much as how they work.",
};

export const education = [
  {
    school: 'University of Westminster',
    detail: 'BSc Computer Science',
    grade: 'First Class Hons',
  },
  {
    school: 'Kaplan International College',
    detail: 'Computer Science',
    grade: 'Distinction',
  },
];

export const stack = [
  'TypeScript',
  'React',
  'Vite',
  'Tailwind',
  'D3',
  'Canvas',
  'Python',
  'Java',
  'Spring Boot',
  'C++',
  'SQL',
];

export const interests = [
  { emoji: '✈️', label: 'Aviation' },
  { emoji: '⚽', label: 'Football' },
  { emoji: '🚴', label: 'Cycling' },
  { emoji: '🍳', label: 'Cooking' },
  { emoji: '🏃', label: 'Running' },
  { emoji: '🦁', label: 'Nat Geo Wild' },
];

export type Job = {
  company: string;
  role: string;
  when: string;
  summary: string;
};

export const experience: Job[] = [
  {
    company: 'Arm',
    role: 'Software Engineering Work Experience',
    when: 'Jun – Aug 2025',
    summary:
      'Worked with the engineering team to debug, refine and optimise application and website features for smoother performance and a better user experience.',
  },
  {
    company: 'Loveworld UK',
    role: 'Systems Summer Analyst',
    when: 'Jun – Aug 2024',
    summary:
      'Analysed system workflows, found the bottlenecks and shipped fixes that improved operational performance. Kept the system documentation honest.',
  },
  {
    company: 'American Express',
    role: 'Software Engineer Spring Intern',
    when: 'Apr 2024',
    summary:
      'Shadowed engineers across the London and Burgess Hill offices and supported IT work behind the scenes.',
  },
];

export const virtualInternships = [
  {
    company: 'Goldman Sachs',
    summary: 'Cracked a leaked password database and recommended stronger security practices.',
  },
  {
    company: 'JP Morgan',
    summary: 'Improved an existing system, unit-tested it, and iterated on dashboards with stakeholders.',
  },
];
