import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { Project } from '../data/projects.ts';

type Props = { project: Project | null; onClose: () => void };

/** Full-screen overlay that runs a project's live build in an iframe. */
export default function DemoModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project) {
      setLoaded(false);
      if (!dialog.open) dialog.showModal();
      document.documentElement.classList.add('is-locked');
    } else if (dialog.open) {
      dialog.close();
    }
    return () => document.documentElement.classList.remove('is-locked');
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="demo"
      aria-label={project ? `${project.title} demo` : undefined}
      onClose={onClose}
      onClick={(e) => {
        // Clicking the backdrop (the dialog itself, outside the frame) closes it.
        if (e.target === e.currentTarget) onClose();
      }}
      style={project ? ({ '--tint': project.tint } as CSSProperties) : undefined}
    >
      {project && (
        <div className="demo__frame">
          <header className="demo__bar">
            <span className="demo__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <p className="demo__title">
              {project.title}
              <span className="muted"> · live demo</span>
            </p>
            <a className="demo__action" href={project.demoUrl} target="_blank" rel="noreferrer">
              Open in new tab ↗
            </a>
            <button className="demo__close" type="button" onClick={onClose} aria-label="Close demo">
              ✕
            </button>
          </header>
          <div className="demo__stage">
            {!loaded && (
              <div className="demo__loading" role="status">
                <span className="demo__spinner" aria-hidden="true" />
                Loading {project.title}…
              </div>
            )}
            <iframe
              key={project.slug}
              src={project.demoUrl}
              title={`${project.title}, interactive demo`}
              allow="clipboard-write; fullscreen"
              onLoad={(e) => {
                setLoaded(true);
                // Keypresses inside the demo don't reach the dialog, so listen for Esc
                // there too. The demos are same-origin; guard in case that ever changes.
                try {
                  e.currentTarget.contentWindow?.addEventListener('keydown', (ev) => {
                    if (ev.key === 'Escape') onClose();
                  });
                } catch {
                  /* cross-origin: the close button still works */
                }
              }}
            />
          </div>
        </div>
      )}
    </dialog>
  );
}
