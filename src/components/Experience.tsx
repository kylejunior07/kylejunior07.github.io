import { experience } from '../data/profile.ts';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-title">
      <header className="section__head reveal">
        <p className="eyebrow">03 · Experience</p>
        <h2 id="exp-title" className="section__title">
          What I'm building <span className="muted">and where I've been</span>
        </h2>
      </header>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__item reveal">
            <span className="timeline__when">
              {job.current && <span className="badge-now">Now</span>}
              {job.when}
            </span>
            <div>
              <h3 className="timeline__company">{job.company}</h3>
              <p className="timeline__role">{job.role}</p>
              <p className="muted">{job.summary}</p>
              {job.highlights && (
                <ul className="timeline__highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
