import { projects } from '../data/projects.ts';
import { profile } from '../data/profile.ts';
import ProjectCard from './ProjectCard.tsx';

export default function BentoGrid() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <header className="section__head reveal">
        <p className="eyebrow">01 · Selected work</p>
        <h2 id="work-title" className="section__title">
          Things I've built <span className="muted">(and can't stop fiddling with)</span>
        </h2>
      </header>

      <div className="bento">
        {projects.map((p, idx) => (
          <ProjectCard key={p.slug} project={p} index={idx} />
        ))}

        <a className="card card--more reveal" href={profile.github} target="_blank" rel="noreferrer">
          <span className="card--more__count">+ more</span>
          <span>Poke around the rest on GitHub</span>
          <span className="card--more__arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
