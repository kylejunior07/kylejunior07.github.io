import { useEffect, useState } from 'react';
import { profile } from '../data/profile.ts';
import { usePrefersReducedMotion } from '../hooks.ts';

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section className="hero" id="top">
      <p className="pill reveal">
        <span className="pill__dot" aria-hidden="true" />
        {profile.status}
      </p>

      <h1 className="hero__title reveal">
        Hey, I'm{' '}
        <span className="nowrap">
          {profile.firstName}
          <span className="wave" aria-hidden="true">
            👋
          </span>
        </span>
        <br />
        <span className="hero__sub">
          {/^[aeiou]/i.test(profile.roles[i]) ? 'an' : 'a'}{' '}
          <span className="hero__role" aria-live="polite">
            <span key={i} className="hero__role-word">
              {profile.roles[i]}
            </span>
          </span>
        </span>
      </h1>

      <p className="hero__intro reveal">{profile.intro}</p>

      <div className="hero__ctas reveal">
        <a className="btn" href="#work">
          See my work <span aria-hidden="true">↓</span>
        </a>
        <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>

      <ul className="hero__meta reveal" aria-label="Quick facts">
        <li>📍 {profile.location}</li>
        <li>⚽ Building Intellisport</li>
        <li>🎓 First Class, CS</li>
      </ul>
    </section>
  );
}
