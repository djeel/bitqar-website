import { useEffect, useRef } from 'react';
import InteractiveDots from './fx/InteractiveDots';
import AmbientGlow from './fx/AmbientGlow';
import SpotlightText from './fx/SpotlightText';
import DecodeText from './fx/DecodeText';
import Magnetic from './fx/Magnetic';

import styles from './Hero.module.css';

const stats = [
  { num: '0.5s', label: 'Block time' },
  { num: '1s', label: 'Single-slot finality' },
  { num: '100%', label: 'EVM compatible' },
];

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  // CSS-driven entrance: stagger the lines + fades, then flip `.mounted`
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lines = el.querySelectorAll<HTMLElement>('[data-hero-line] > span');
    const fades = el.querySelectorAll<HTMLElement>('[data-hero-fade]');
    lines.forEach((n, i) => n.style.setProperty('--d', `${0.15 + i * 0.1}s`));
    fades.forEach((n, i) => n.style.setProperty('--d', `${0.45 + i * 0.09}s`));

    const id = window.requestAnimationFrame(() =>
      window.requestAnimationFrame(() => el.classList.add(styles.mounted))
    );
    return () => window.cancelAnimationFrame(id);
  }, []);

  // Gentle scroll parallax: content drifts up and fades as the hero leaves
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = ref.current;
    const inner = section?.querySelector<HTMLElement>('[data-hero-inner]');
    if (!section || !inner) return;

    let cancelled = false;
    let ctx: { revert: () => void } | null = null;

    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.to(inner, {
          y: -110,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: 0.6 },
        });
      }, section);
    });

    return () => { cancelled = true; ctx?.revert(); };
  }, []);

  return (
    <section id="home" className={styles.hero} ref={ref}>
      <InteractiveDots className={styles.dots} />
      <div className="texture-grid" aria-hidden="true" />
      <AmbientGlow>
        <span className={styles.glow} />
        <span className={styles.glow2} />
      </AmbientGlow>

      <div className={`${styles.inner} above`} data-hero-inner>
        <span className={`label ${styles.label}`} data-hero-fade>
          <span className={styles.labelDot} aria-hidden="true" />
          Layer 1 · Post-Quantum Blockchain
        </span>

        <h1 className={styles.h1} data-hero-h1>
          <span className={styles.line} data-hero-line><span>The future of</span></span>
          <span className={styles.line} data-hero-line>
            <span>
              <SpotlightText as="em" className={styles.mark} base="var(--color-accent)" spot="var(--color-spot)">
                quantum
              </SpotlightText>{' '}
              blockchain
            </span>
          </span>
        </h1>

        <p className={styles.decode} data-hero-fade>
          <span className={styles.decodeKey}>// secured by </span>
          <DecodeText phrases={['NIST post-quantum cryptography', 'hash-based signatures', 'lattice-based key exchange']} />
        </p>

        <div className={styles.bottom}>
          <p className={styles.sub} data-hero-fade>
            Bitqar is a Layer 1 rebuilt from the ground up for the post-quantum era —
            quantum-resistant consensus, sub-second finality, and full EVM compatibility.
          </p>
          <div className={styles.ctas} data-hero-fade>
            <Magnetic>
              <a href="#technology" className="btn-pill">
                Explore the tech <span aria-hidden="true">↓</span>
              </a>
            </Magnetic>
            <a href="#network" className="btn-ghost">Read the docs</a>
          </div>
        </div>

        <div className={styles.stats} data-hero-fade>
          {stats.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cue} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.cueLine} />
      </div>
    </section>
  );
};

export default Hero;
