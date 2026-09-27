import type { CSSProperties } from 'react';
import type { ProjectArt as Kind } from '../data/projects.ts';

type Props = { kind: Kind; active: boolean };

export default function ProjectArt({ kind, active }: Props) {
  switch (kind) {
    case 'poster':
      return <PosterArt />;
    case 'pitch':
      return <PitchArt active={active} />;
    case 'coal':
      return <CoalArt />;
    case 'palette':
      return <PaletteArt />;
    case 'penalty':
      return <PenaltyArt active={active} />;
  }
}

/* ---------- Generative Poster Maker: two real posters rendered by the app ---------- */

function PosterArt() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="art-poster">
      <img className="art-poster__back" src={`${base}projects/poster-orbit.svg`} alt="" loading="lazy" />
      <img className="art-poster__front" src={`${base}projects/poster-kunsthalle.svg`} alt="" loading="lazy" />
    </div>
  );
}

/* ---------- Formation Builder: 4-3-3 that reshuffles into 3-5-2 on hover ---------- */

type Pt = [number, number];
const F433: Pt[] = [
  [7, 34], [22, 10], [20, 26], [20, 42], [22, 58],
  [40, 18], [37, 34], [40, 50], [62, 12], [66, 34], [62, 56],
];
const F352: Pt[] = [
  [7, 34], [21, 18], [19, 34], [21, 50],
  [40, 6], [36, 22], [33, 34], [36, 46], [40, 62], [60, 25], [60, 43],
];

function PitchArt({ active }: { active: boolean }) {
  const shape = active ? F352 : F433;
  return (
    <div className="art-pitch">
      <svg viewBox="0 0 105 68" preserveAspectRatio="xMidYMid meet">
        <g className="art-pitch__lines" fill="none">
          <rect x="1" y="1" width="103" height="66" />
          <line x1="52.5" y1="1" x2="52.5" y2="67" />
          <circle cx="52.5" cy="34" r="9.15" />
          <rect x="1" y="13.85" width="16.5" height="40.3" />
          <rect x="87.5" y="13.85" width="16.5" height="40.3" />
          <rect x="1" y="24.85" width="5.5" height="18.3" />
          <rect x="98.5" y="24.85" width="5.5" height="18.3" />
        </g>
        {shape.map(([x, y], i) => (
          <circle
            key={i}
            className={i === 0 ? 'art-pitch__gk' : 'art-pitch__player'}
            r="2.6"
            style={{ transform: `translate(${x}px, ${y}px)`, transitionDelay: `${i * 25}ms` }}
          />
        ))}
      </svg>
      <span className="art-pitch__label">{active ? '3-5-2' : '4-3-3'}</span>
    </div>
  );
}

/* ---------- The Last Lump of Coal: the headline decline, drawn on reveal ---------- */

// UK coal share of electricity, rounded; decorative only.
const COAL: Pt[] = [
  [1987, 69.5], [1990, 65], [1993, 52], [1996, 41], [1999, 29], [2002, 33],
  [2006, 38], [2009, 28], [2012, 39], [2014, 30], [2015, 22], [2016, 9],
  [2018, 5], [2020, 1.8], [2022, 1.5], [2024, 0.6], [2025, 0.1],
];

function CoalArt() {
  const w = 300;
  const h = 120;
  const x = (yr: number) => ((yr - 1987) / (2025 - 1987)) * (w - 12) + 6;
  const y = (v: number) => h - 8 - (v / 72) * (h - 20);
  const d = COAL.map(([yr, v], i) => `${i ? 'L' : 'M'}${x(yr).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `${d} L${x(2025)},${h} L${x(1987)},${h} Z`;
  return (
    <div className="art-coal">
      <div className="art-coal__stats">
        <span className="art-coal__big">69.5%</span>
        <span className="art-coal__arrow">→</span>
        <span className="art-coal__big art-coal__big--end">0.1%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="coal-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--tint)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--tint)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#coal-fill)" />
        <path className="art-coal__line" d={d} pathLength={1} />
        <circle cx={x(2025)} cy={y(0.1)} r="4" className="art-coal__dot" />
      </svg>
    </div>
  );
}

/* ---------- Moodboard Palette: swatches that open up on hover ---------- */

const SWATCHES = [
  { hex: '#1f2a44', name: 'ink' },
  { hex: '#3f6f8f', name: 'slate' },
  { hex: '#8fc1b5', name: 'sage' },
  { hex: '#e9d8a6', name: 'sand' },
  { hex: '#ee9b00', name: 'amber' },
  { hex: '#ca6702', name: 'rust' },
];

function PaletteArt() {
  return (
    <div className="art-palette">
      {SWATCHES.map((s) => (
        <div key={s.hex} className="art-palette__swatch" style={{ '--c': s.hex } as CSSProperties}>
          <span>{s.name}</span>
          <code>{s.hex}</code>
        </div>
      ))}
    </div>
  );
}

/* ---------- Penalty Shootout: hover to shoot ---------- */

function PenaltyArt({ active }: { active: boolean }) {
  return (
    <div className={`art-penalty${active ? ' is-shot' : ''}`}>
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMax meet">
        <defs>
          <pattern id="net" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M8 0 L0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
          </pattern>
        </defs>
        <rect x="30" y="18" width="140" height="62" fill="url(#net)" />
        <path d="M30 80 V18 H170 V80" fill="none" stroke="#f4f4f5" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" opacity="0.3" />
        <g className="art-penalty__keeper">
          <rect x="-5" y="-22" width="10" height="16" rx="3" fill="var(--tint)" />
          <circle cx="0" cy="-27" r="4.5" fill="#f4f4f5" />
          <line x1="-5" y1="-19" x2="-13" y2="-28" stroke="var(--tint)" strokeWidth="3" strokeLinecap="round" />
          <line x1="5" y1="-19" x2="13" y2="-28" stroke="var(--tint)" strokeWidth="3" strokeLinecap="round" />
          <line x1="-2" y1="-6" x2="-4" y2="0" stroke="#f4f4f5" strokeWidth="3" strokeLinecap="round" />
          <line x1="2" y1="-6" x2="4" y2="0" stroke="#f4f4f5" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className="art-penalty__ball">
          <circle r="6" fill="#f4f4f5" />
          <path d="M-2 -2 L2 -2 L3 1.5 L0 3.5 L-3 1.5 Z" fill="#0b0b0f" />
        </g>
      </svg>
      <span className="art-penalty__score">{active ? 'GOAL!' : 'hover to shoot'}</span>
    </div>
  );
}
