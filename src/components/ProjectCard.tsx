import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import type { Project } from '../data/projects.ts';
import { usePrefersReducedMotion } from '../hooks.ts';
import ProjectArt from './ProjectArt.tsx';

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  // Tilt toward the pointer and move the spotlight with it.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    if (!reduced) {
      el.style.setProperty('--rx', `${(0.5 - y) * 6}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
    }
  };

  const onLeave = () => {
    setActive(false);
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  const primaryHref = project.liveUrl ?? project.repoUrl;

  return (
    <article
      ref={ref}
      className={`card card--${project.size} card--${project.art} reveal`}
      style={{ '--tint': project.tint, '--delay': `${index * 70}ms` } as CSSProperties}
      onPointerMove={onMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={onLeave}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setActive(false);
      }}
    >
      <div className="card__art" aria-hidden="true">
        <ProjectArt kind={project.art} active={active} />
      </div>

      <div className="card__body">
        <p className="card__tagline">{project.tagline}</p>
        <h3 className="card__title">
          {primaryHref ? (
            <a className="card__link" href={primaryHref} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="card__desc">{project.description}</p>
        <ul className="tags" aria-label="Built with">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="card__actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
