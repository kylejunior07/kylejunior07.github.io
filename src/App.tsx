import Nav from './components/Nav.tsx';
import Hero from './components/Hero.tsx';
import BentoGrid from './components/BentoGrid.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import CursorGlow from './components/CursorGlow.tsx';
import { useReveal } from './hooks.ts';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <About />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
