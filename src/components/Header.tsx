import { useEffect, useState } from 'react';
import bitqarLogo from '../assets/bitqar-logo.svg';
import bitqarLogoForm from '../assets/bitqar-logo-form.svg';
import Magnetic from './fx/Magnetic';
import ThemeToggle from './fx/ThemeToggle';
import styles from './Header.module.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#technology', label: 'Technology' },
  { href: '#network', label: 'Network' },
  { href: '#community', label: 'Community' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 320 && !open);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
        <div className={styles.bar}>
          <a href="#home" className={styles.logo} aria-label="Bitqar — home">
            <span
              className={styles.logoMark}
              style={{ WebkitMaskImage: `url("${bitqarLogoForm}")`, maskImage: `url("${bitqarLogoForm}")` }}
              aria-hidden="true"
            />
            <img src={bitqarLogo} alt="Bitqar" className={styles.logoWord} />
          </a>

          <span className={styles.status}>
            <i className={styles.pulse} aria-hidden="true" />
            Testnet live
          </span>

          <div className={styles.right}>
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline">{l.label}</a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <div className={styles.cta}>
              <Magnetic strength={0.4}>
                <a href="#community" className="btn-pill">
                  Launch App <span aria-hidden="true">→</span>
                </a>
              </Magnetic>
            </div>
            <button
              className={styles.burger}
              data-open={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav className={styles.sheet} data-open={open} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <div className={styles.sheetFoot}>
          <a href="#community" className="btn-pill" onClick={() => setOpen(false)}>Launch App →</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
