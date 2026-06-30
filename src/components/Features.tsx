import Reveal from './fx/Reveal';
import TiltCard from './fx/TiltCard';
import AmbientGlow from './fx/AmbientGlow';
import card5 from '../assets/card5.svg';
import styles from './Features.module.css';

const Features: React.FC = () => {
  return (
    <section id="technology" className={styles.section}>
      <AmbientGlow strength={0.04}>
        <span className={styles.glow} />
      </AmbientGlow>

      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className="label reveal-up">/ 01 — Technology</span>
          <h2 className={`${styles.h2} reveal-line`}>
            <span>The L1 quantum chain with <em>endless</em> potential</span>
          </h2>
        </Reveal>

        <Reveal className={styles.grid} stagger={0.08}>
          {/* Tall hero feature */}
          <div className={`${styles.tall} reveal-up`}>
            <TiltCard className={styles.card} max={6}>
              <span className={styles.cardIndex}>001</span>
              <div className={styles.orbit} aria-hidden="true">
                <span className={styles.orbitRing} />
                <span className={styles.orbitRing} />
                <span className={styles.orbitRing} />
                <span className={styles.orbitCore} />
              </div>
              <h3 className={styles.cardTitle}>Hybrid Quantum-Resistant Consensus</h3>
              <p className={styles.cardBody}>
                A novel consensus mechanism replacing traditional PoS — engineered for
                security and efficiency in the post-quantum era.
              </p>
            </TiltCard>
          </div>

          {/* Wide feature */}
          <div className={`${styles.wide} reveal-up`}>
            <TiltCard className={styles.card}>
              <span className={styles.cardIndex}>002</span>
              <h3 className={styles.cardTitle}>Post-Quantum Security</h3>
              <p className={styles.cardBody}>
                Built from the ground up with NIST-certified post-quantum cryptographic
                algorithms — future-proof by design.
              </p>
            </TiltCard>
          </div>

          {/* 0.5s metric */}
          <div className={`${styles.feature} reveal-up`}>
            <TiltCard className={`${styles.card} ${styles.metric}`}>
              <span className={styles.metricNum}>0.5s</span>
              <span className={styles.metricLabel}>Second block times</span>
            </TiltCard>
          </div>

          {/* Finality image tile */}
          <div className={`${styles.feature} reveal-up`}>
            <TiltCard className={`${styles.card} ${styles.imageCard}`}>
              <img src={card5} alt="" aria-hidden="true" />
              <div className={styles.imageCardOverlay}>
                <span className={styles.imageCardSub}>Instant</span>
                <span className={styles.imageCardTitle}>1s single-slot finality</span>
              </div>
            </TiltCard>
          </div>

          {/* P2P feature */}
          <div className={`${styles.wide} reveal-up`}>
            <TiltCard className={styles.card}>
              <span className={styles.cardIndex}>003</span>
              <h3 className={styles.cardTitle}>Secure P2P Communication</h3>
              <p className={styles.cardBody}>
                Node communication over libp2p is fortified with post-quantum encryption —
                integrity and confidentiality across the entire network.
              </p>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
