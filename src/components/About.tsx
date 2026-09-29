import { education, interests, productSkills, profile, techSkills } from '../data/profile.ts';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <header className="section__head reveal">
        <p className="eyebrow">02 · About</p>
        <h2 id="about-title" className="section__title">
          Product brain, football heart{' '}
          <span className="muted">(and a CS degree to back it up)</span>
        </h2>
      </header>

      <div className="about">
        <div className="tile tile--bio reveal">
          <p className="tile__label">Hello</p>
          <p className="tile__lead">
            I went to a sports sixth form and I've followed the game my whole life. Then I did a
            Computer Science degree focused on HCI, UX and AI. Intellisport is where those meet:
            I talk to coaches and analysts, find the problem that eats their week, and build
            the tool they actually use.
          </p>
          <p className="muted">
            Alongside that, I'm an IT Consultant at JP Morgan. Before that, I worked with
            engineering teams at Arm and American Express, and spent a summer untangling system
            workflows at Loveworld UK.
          </p>
        </div>

        <div className="tile tile--edu reveal">
          <p className="tile__label">Education</p>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.school}>
                <span className="edu__grade">{e.grade}</span>
                <strong>{e.detail}</strong>
                <span className="muted">
                  {e.school} · <span className="nowrap">{e.when}</span>
                </span>
                {e.note && <span className="edu__note">{e.note}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="tile tile--stack reveal">
          <p className="tile__label">Toolbox</p>
          <p className="skills__group">Product</p>
          <ul className="tags tags--big">
            {productSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="skills__group">Technical</p>
          <ul className="tags tags--big">
            {techSkills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="tile tile--interests reveal">
          <p className="tile__label">Off the clock</p>
          <ul className="stickers">
            {interests.map((it, i) => (
              <li key={it.label} style={{ rotate: `${(i % 2 ? 1 : -1) * (2 + (i % 3))}deg` }}>
                <span aria-hidden="true">{it.emoji}</span> {it.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="tile tile--location reveal">
          <p className="tile__label">Based in</p>
          <p className="tile__big">{profile.location.split(',')[0]}</p>
          <p className="muted">GMT / BST</p>
          <span className="radar" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
