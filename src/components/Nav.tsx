import { profile } from '../data/profile.ts';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
];

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo" href="#top" aria-label={`${profile.name}, back to top`}>
        <span className="nav__mark" aria-hidden="true" />
        osmond<span className="accent">.</span>
      </a>
      <nav aria-label="Sections">
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="btn btn--small" href="#contact">
        Say hi
      </a>
    </header>
  );
}
