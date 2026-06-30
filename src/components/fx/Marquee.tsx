import type { CSSProperties, ReactNode } from 'react';

interface MarqueeProps {
  items: ReactNode[];
  /** Full loop duration */
  duration?: string;
  /** Reverse direction */
  reverse?: boolean;
  className?: string;
}

/** Seamless, pause-on-hover marquee. Items are duplicated for the loop. */
export default function Marquee({ items, duration = '40s', reverse = false, className = '' }: MarqueeProps) {
  const style = {
    '--marquee-dur': duration,
    animationDirection: reverse ? 'reverse' : 'normal',
  } as CSSProperties;

  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={style}>
        {[...items, ...items].map((item, i) => (
          <span key={i} aria-hidden={i >= items.length}>{item}</span>
        ))}
      </div>
    </div>
  );
}
