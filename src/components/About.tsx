import { education, interests, profile, stack } from '../data/profile.ts';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <header className="section__head reveal">
        <p className="eyebrow">02 · About</p>
        <h2 id="about-title" className="section__title">
          Engineer brain, product heart <span className="muted">(and a football obsession)</span>
        </h2>
      </header>

      <div className="about">
        <div className="tile tile--bio reveal">
          <p className="tile__label">Hello</p>
          <p className="tile__lead">
            I'm a Computer Science graduate from London. I like turning a fuzzy idea into
            something you can click, drag and share. Most of my side projects start as
            "wouldn't it be fun if…" and end up with tests, accessibility passes and a README.
          </p>
          <p className="muted">
            I've worked with engineering teams at Arm and American Express. Before that, I
            spent a summer untangling system workflows at Loveworld UK.
          </p>
        </div>

        <div className="tile tile--edu reveal">
          <p className="tile__label">Education</p>
          <ul className="edu">
            {education.map((e) => (
              <li key={e.school}>
                <span className="edu__grade">{e.grade}</span>
                <strong>{e.detail}</strong>
                <span className="muted">{e.school}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tile tile--stack reveal">
          <p className="tile__label">Toolbox</p>
          <ul className="tags tags--big">
            {stack.map((s) => (
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
          <p className="muted">GMT / BST · happy to work remote</p>
          <span className="radar" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
