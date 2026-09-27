import { experience, virtualInternships } from '../data/profile.ts';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <header className="section__head reveal">
        <p className="eyebrow">03 · Experience</p>
        <h2 id="exp-title" className="section__title">
          Where I've been <span className="muted">learning out loud</span>
        </h2>
      </header>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__item reveal">
            <span className="timeline__when">{job.when}</span>
            <div>
              <h3 className="timeline__company">{job.company}</h3>
              <p className="timeline__role">{job.role}</p>
              <p className="muted">{job.summary}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="virtual reveal">
        <p className="tile__label">Virtual internships</p>
        <ul>
          {virtualInternships.map((v) => (
            <li key={v.company}>
              <strong>{v.company}</strong>
              <span className="muted">{v.summary}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
