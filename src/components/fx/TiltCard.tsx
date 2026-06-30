import { useRef, type ReactNode, type CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max tilt angle in degrees */
  max?: number;
}

/**
 * Glass card with a cursor-driven 3D tilt and a sheen that tracks the
 * pointer. Pointer-only — touch devices just get the static glass surface.
 */
export default function TiltCard({ children, className = '', style, max = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  const isFine = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isFine()) return;
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const ry = (px - 0.5) * 2 * max;
      const rx = -(py - 0.5) * 2 * max;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
      card.style.setProperty('--cx', `${px * 100}%`);
      card.style.setProperty('--cy', `${py * 100}%`);
    });
  };

  const onLeave = () => {
    const card = ref.current;
    if (!card) return;
    cancelAnimationFrame(raf.current);
    card.style.transform = '';
  };

  return (
    <div
      ref={ref}
      className={`glass-card tilt-card ${className}`}
      style={style}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <span className="card-sheen" aria-hidden="true" />
      {children}
    </div>
  );
}
