import { useState } from 'react';
import { projects, type Project } from '../data/projects.ts';
import { profile } from '../data/profile.ts';
import ProjectCard from './ProjectCard.tsx';
import DemoModal from './DemoModal.tsx';

export default function BentoGrid() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <header className="section__head reveal">
        <p className="eyebrow">01 · Selected work</p>
        <h2 id="work-title" className="section__title">
          Things I've built <span className="muted">(go on, have a play)</span>
        </h2>
      </header>

      <div className="bento">
        {projects.map((p, idx) => (
          <ProjectCard key={p.slug} project={p} index={idx} onOpen={setOpen} />
        ))}

        <a className="card card--more reveal" href={profile.github} target="_blank" rel="noreferrer">
          <span className="card--more__count">+ more</span>
          <span>Poke around the rest on GitHub</span>
          <span className="card--more__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <DemoModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
