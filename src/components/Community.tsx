import type { CSSProperties } from 'react';
import Reveal from './fx/Reveal';
import AmbientGlow from './fx/AmbientGlow';
import Marquee from './fx/Marquee';
import discordIcon from '../assets/discord.svg';
import githubIcon from '../assets/github.svg';
import telegramIcon from '../assets/telegram.svg';
import npmIcon from '../assets/npm.svg';
import styles from './Community.module.css';

const socials = [
  { name: 'Discord', meta: 'Chat & support', icon: discordIcon, href: '#' },
  { name: 'GitHub', meta: 'Open source', icon: githubIcon, href: '#' },
  { name: 'Telegram', meta: 'Announcements', icon: telegramIcon, href: '#' },
  { name: 'NPM', meta: 'SDK & tooling', icon: npmIcon, href: '#' },
];

const keywords = [
  'Post-quantum', 'NIST-certified', 'libp2p', 'EVM compatible', 'Single-slot finality',
  '0.5s blocks', 'Lattice cryptography', 'Hash-based signatures', 'Quantum-resistant',
];

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Community: React.FC = () => {
  const pills = keywords.map((k) => <span className={styles.pill} key={k}>{k}</span>);

  return (
    <section id="community" className={styles.section}>
      <AmbientGlow strength={0.04}>
        <span className={styles.glow} />
      </AmbientGlow>

      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className="label reveal-up">/ 03 — Community</span>
          <h2 className={`${styles.h2} reveal-line`}>
            <span>Join the global community behind <em>Bitqar</em></span>
          </h2>
          <p className={`${styles.lead} reveal-up`}>
            A thriving community of builders worldwide is driving the future of blockchain.
            Connect, collaborate, and grow with us as we shape the next generation of
            decentralized infrastructure.
          </p>
        </Reveal>

        <Reveal className={styles.socials} stagger={0.07}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.social} reveal-up`}
              aria-label={s.name}
            >
              <div className={styles.socialTop}>
                <span
                  className={styles.icon}
                  style={{ WebkitMaskImage: `url("${s.icon}")`, maskImage: `url("${s.icon}")` } as CSSProperties}
                  aria-hidden="true"
                />
                <span className={styles.arrow}><ArrowIcon /></span>
              </div>
              <div>
                <div className={styles.socialName}>{s.name}</div>
                <div className={styles.socialMeta}>{s.meta}</div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>

      <div className={styles.marquees}>
        <Marquee items={pills} duration="50s" />
        <Marquee items={pills} duration="42s" reverse />
      </div>
    </section>
  );
};

export default Community;
