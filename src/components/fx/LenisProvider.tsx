import { useEffect } from 'react';

/**
 * Smooth, inertial scrolling (Lenis) driven by GSAP's ticker so every
 * ScrollTrigger animation stays perfectly synced. Disabled under
 * reduced-motion. Lazy-loaded to keep the initial bundle light.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let lenis: import('lenis').default | null = null;
    let cleanup: (() => void) | null = null;
    let cancelled = false;

    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on('scroll', ScrollTrigger.update);
      const onTick = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(onTick);
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
