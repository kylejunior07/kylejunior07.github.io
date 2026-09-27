import { profile } from '../data/profile.ts';

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <p className="eyebrow reveal">04 · Contact</p>
      <h2 className="contact__title reveal">
        Let's build
        <br />
        something <span className="accent">fun.</span>
      </h2>
      <a className="contact__email reveal" href={`mailto:${profile.email}`}>
        {profile.email} <span aria-hidden="true">↗</span>
      </a>
      <ul className="contact__links reveal">
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <p className="contact__small muted">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and too much ☕.
      </p>
    </footer>
  );
}
