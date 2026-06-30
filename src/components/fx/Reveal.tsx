import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Delay before the sequence starts (seconds) */
  delay?: number;
  /** Stagger between elements (seconds) */
  stagger?: number;
}

/**
 * Reveals descendant `.reveal-line > *` (clip-mask slide-up) and `.reveal-up`
 * (fade + translate) elements when the container scrolls into view. Pure CSS
 * transitions are driven by an `.in-view` class — no animation library, so it
 * always resolves even if a chunk fails to load. Honors reduced-motion.
 */
export default function Reveal({
  as: Tag = 'div',
  className,
  children,
  delay = 0,
  stagger = 0.09,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Per-element stagger via a CSS custom property
    const items = el.querySelectorAll<HTMLElement>('.reveal-line > *, .reveal-up');
    items.forEach((n, i) => n.style.setProperty('--d', `${delay + i * stagger}s`));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in-view');
      return;
    }

    const io = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          obs.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);

    // Failsafe: never leave content hidden
    const failsafe = window.setTimeout(() => el.classList.add('in-view'), 2500);

    return () => { io.disconnect(); window.clearTimeout(failsafe); };
  }, [delay, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
