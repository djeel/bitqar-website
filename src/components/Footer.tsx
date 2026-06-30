import Reveal from './fx/Reveal';
import Magnetic from './fx/Magnetic';
import bitqarLogo from '../assets/bitqar-logo.svg';
import styles from './Footer.module.css';

const columns = [
  { title: 'Protocol', links: ['Home', 'Technology', 'Network', 'Whitepaper'] },
  { title: 'Developers', links: ['Documentation', 'GitHub', 'SDK', 'Status'] },
  { title: 'Company', links: ['About', 'Blog', 'Privacy', 'Terms'] },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Reveal className={styles.cta}>
          <h2 className={`${styles.ctaTitle} reveal-line`}>
            <span>Ready to build the <em>post-quantum</em> future?</span>
          </h2>
          <div className={`${styles.ctaActions} reveal-up`}>
            <Magnetic>
              <a href="#community" className="btn-pill">Launch App <span aria-hidden="true">→</span></a>
            </Magnetic>
            <a href="#network" className="btn-ghost">Read the docs</a>
          </div>
        </Reveal>

        <div className={styles.cols}>
          <div className={styles.brand}>
            <img src={bitqarLogo} alt="Bitqar" className={styles.logoWord} />
            <p className={styles.brandText}>
              The Layer 1 quantum-resistant blockchain. Post-quantum security with the
              performance the next era demands.
            </p>
            <span className={styles.status}><i aria-hidden="true" /> Testnet live</span>
          </div>

          {columns.map((c) => (
            <nav className={styles.col} key={c.title}>
              <span className={styles.colTitle}>{c.title}</span>
              {c.links.map((l) => (
                <a key={l} href="#" className="link-underline">{l}</a>
              ))}
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Bitqar Foundation. All rights reserved.</span>
          <span className={styles.copy}>Built for the post-quantum era.</span>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">bitqar</div>
    </footer>
  );
};

export default Footer;
