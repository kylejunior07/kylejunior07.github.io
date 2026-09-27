export type ProjectArt = 'poster' | 'palette' | 'coal' | 'pitch' | 'penalty';

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  art: ProjectArt;
  /** Bento cell size on desktop. */
  size: 'xl' | 'md' | 'sm';
  /** Card tint, used for the glow and gradient. */
  tint: string;
  /** Set to null while the repo is private, so the card doesn't link to a 404. */
  repoUrl: string | null;
  /** Set to null until GitHub Pages is live for the project. */
  liveUrl: string | null;
};

const gh = (repo: string) => `https://github.com/kylejunior07/${repo}`;
const pages = (repo: string) => `https://kylejunior07.github.io/${repo}/`;

export const projects: Project[] = [
  {
    slug: 'generative-poster-maker',
    title: 'Generative Poster Maker',
    tagline: 'A seed, some sliders, a poster.',
    description:
      'Four generative styles (Swiss grid, flow field, gradient blobs, concentric). Everything is deterministic, so you can share any poster as a link and export it as SVG or print-size PNG.',
    tags: ['React', 'TypeScript', 'SVG', 'Tailwind'],
    art: 'poster',
    size: 'xl',
    tint: '#ff5c39',
    repoUrl: gh('generative-poster-maker'),
    liveUrl: pages('generative-poster-maker'),
  },
  {
    slug: 'formation-builders',
    title: 'Formation Builder',
    tagline: 'Drag your XI into shape.',
    description:
      'Build, customise and share football lineups on an SVG pitch. Includes presets, custom kits, undo/redo, keyboard control, and a lineup that lives entirely in the URL.',
    tags: ['React', 'SVG', 'Drag & drop', 'a11y'],
    art: 'pitch',
    size: 'md',
    tint: '#3ddc84',
    repoUrl: gh('formation-builders'),
    liveUrl: pages('formation-builders'),
  },
  {
    slug: 'interactive-data-story',
    title: 'The Last Lump of Coal',
    tagline: '69.5% → 0.1%, told by scrolling.',
    description:
      "A scroll-driven story of the UK's exit from coal power. Lines morph into stacked areas, then into ranked bars, and it ends in an explorer covering 84 countries.",
    tags: ['D3', 'React', 'Scrollytelling', 'Data'],
    art: 'coal',
    size: 'md',
    tint: '#ffb020',
    repoUrl: gh('interactive-data-story'),
    liveUrl: pages('interactive-data-story'),
  },
  {
    slug: 'moodboard-palette-extractor',
    title: 'Moodboard Palette',
    tagline: 'Images in, design tokens out.',
    description:
      "Drop in up to 12 images and get an accessible palette. It includes OKLCH scales, a WCAG contrast matrix, and Tailwind/CSS/DTCG export. Images never leave your browser.",
    tags: ['Color science', 'Web Workers', 'WCAG'],
    art: 'palette',
    size: 'sm',
    tint: '#b18cff',
    repoUrl: gh('moodboard-palette-extractor'),
    liveUrl: pages('moodboard-palette-extractor'),
  },
  {
    slug: 'penalty-shootout',
    title: 'Penalty Shootout',
    tagline: 'Aim. Charge. Top bins.',
    description:
      'A best-of-five shootout on HTML Canvas. It has pseudo-3D ball flight, a keeper that learns your favourite corner, and crowd noise synthesised with Web Audio.',
    tags: ['Canvas', 'Web Audio', 'Game'],
    art: 'penalty',
    size: 'sm',
    tint: '#3db8ff',
    repoUrl: gh('penalty-shootout'),
    liveUrl: pages('penalty-shootout'),
  },
];
