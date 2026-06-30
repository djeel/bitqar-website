import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789#$%&<>/\\{}[]=+*';
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

interface DecodeTextProps {
  /** Phrases cycled through, each scrambled then resolved */
  phrases: string[];
  className?: string;
  /** Hold time on a fully-revealed phrase (ms) */
  hold?: number;
}

/**
 * Cycles through phrases with a left-to-right "decode" reveal — a quiet,
 * on-brand crypto signature. Reserves width for the longest phrase so the
 * layout never shifts. Resolves to plain text under reduced motion.
 */
export default function DecodeText({ phrases, className = '', hold = 2600 }: DecodeTextProps) {
  const maxLen = Math.max(...phrases.map((p) => p.length));
  const [idx, setIdx] = useState(0);
  const text = phrases[idx];
  const [display, setDisplay] = useState<string[]>(() => text.split(''));
  const [revealed, setRevealed] = useState(text.length);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Drive the scramble + reveal for the current phrase
  useEffect(() => {
    if (reduced.current) {
      setDisplay(text.split(''));
      setRevealed(text.length);
      const next = window.setTimeout(() => setIdx((i) => (i + 1) % phrases.length), hold + 400);
      return () => window.clearTimeout(next);
    }

    setRevealed(0);
    let r = 0;
    const scramble = window.setInterval(() => {
      setDisplay(text.split('').map((c, i) => (i < r || c === ' ' ? c : randomChar())));
    }, 45);
    const reveal = window.setInterval(() => {
      r += 1;
      setRevealed(r);
      if (r >= text.length) {
        window.clearInterval(reveal);
        window.clearInterval(scramble);
        setDisplay(text.split(''));
      }
    }, 60);
    const next = window.setTimeout(() => setIdx((i) => (i + 1) % phrases.length), text.length * 60 + hold);

    return () => {
      window.clearInterval(scramble);
      window.clearInterval(reveal);
      window.clearTimeout(next);
    };
  }, [idx, text, hold, phrases.length]);

  return (
    <span className={className} style={{ display: 'inline-block', minWidth: `${maxLen}ch` }}>
      {display.map((c, i) => (
        <span key={i} className={`decode-char ${i < revealed ? 'decode-revealed' : 'decode-scramble'}`}>
          {c === ' ' ? ' ' : c}
        </span>
      ))}
    </span>
  );
}
