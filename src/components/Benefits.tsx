import Reveal from './fx/Reveal';
import Magnetic from './fx/Magnetic';
import AmbientGlow from './fx/AmbientGlow';
import Counter from './fx/Counter';
import styles from './Benefits.module.css';

const stats = [
  { node: <Counter to={0.5} decimals={1} suffix="s" />, label: 'Block time' },
  { node: <Counter to={1} decimals={0} suffix="s" />, label: 'Finality' },
  { node: <Counter to={100} decimals={0} suffix="%" />, label: 'EVM compatible' },
  { node: <Counter to={256} decimals={0} suffix="-bit" />, label: 'PQ security' },
];

const Benefits: React.FC = () => {
  return (
    <section id="network" className={styles.section}>
      <AmbientGlow strength={0.04}>
        <span className={styles.glow} />
      </AmbientGlow>

      <div className={styles.inner}>
        <Reveal className={styles.head}>
          <span className="label reveal-up">/ 02 — Network</span>
          <h2 className={`${styles.h2} reveal-line`}>
            <span>Reinventing the <em>Layer 1</em> blockchain</span>
          </h2>
          <p className={`${styles.lead} reveal-up`}>
            Bitqar ushers in a new paradigm of blockchain technology — rebuilt from the
            ground up to be the most efficient chain in the world, all while remaining
            100% EVM compatible.
          </p>
        </Reveal>

        <Reveal>
          <div className={`${styles.frame} reveal-up`}>
            <div className={styles.frameGrid} aria-hidden="true" />
            <span className={styles.frameTag}><i aria-hidden="true" /> Watch the protocol overview</span>
            <Magnetic strength={0.5}>
              <button className={styles.play} aria-label="Play protocol overview">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              </button>
            </Magnetic>
          </div>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={`${styles.statCell} reveal-up`} key={s.label}>
                <span className={styles.statNum}>{s.node}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Benefits;
