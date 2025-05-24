import React from 'react';  

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8"
      // Based on hero.jpg, it's a subtle gradient rather than a direct image background.
      // If the image itself is a gradient, this is better.
      // If it's a more complex graphic, consider it as an actual background image.
      // For now, I'll use a gradient that mimics the provided image.
    >
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-[#78dbc4]">Bitqar:</span> <span className="text-bitqar-text-dark">future of</span> <br className="hidden md:block"/> <RotatingDecodeText texts={["quantum blockchain", "post-quantum security", "decentralized future", "AI-powered ledger"]} className="text-bitqar-text-dark" />
        </h1>
      </div>
    </section>
  );
};

// DecodeText : effet de reconstitution "hacker"
import { useEffect, useState, useRef } from 'react';

interface DecodeTextProps {
  text: string;
  className?: string;
  speed?: number; // ms entre chaque lettre révélée
  randomization?: number; // nombre de cycles de random avant de fixer une lettre
}

const randomChar = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?';
  return chars[Math.floor(Math.random() * chars.length)];
};

const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  className = '',
  speed = 40, // vitesse du scramble (ms)
  randomization = 6, // inutilisé ici mais laissé pour compatibilité
}) => {
  const [display, setDisplay] = useState<string[]>(() => text.split('').map(c => (c === ' ' ? ' ' : randomChar())));
  const [revealIndex, setRevealIndex] = useState(0);

  // Réinitialise display à chaque changement de texte
  useEffect(() => {
    setDisplay(text.split('').map(c => (c === ' ' ? ' ' : randomChar())));
    setRevealIndex(0);
  }, [text]);
  const scrambleInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const revealTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const displayRef = useRef<string[]>(display);

  // Toujours garder displayRef à jour
  useEffect(() => {
    displayRef.current = display;
  }, [display]);

  // Scramble les lettres non révélées en continu
  useEffect(() => {
    if (revealIndex < text.length) {
      scrambleInterval.current = setInterval(() => {
        setDisplay(d => d.map((c, i) => (i < revealIndex || text[i] === ' ' ? text[i] : randomChar())));
      }, speed);
    }
    return () => {
      if (scrambleInterval.current) clearInterval(scrambleInterval.current);
    };
  }, [revealIndex, text, speed]);

  // Révèle les lettres de gauche à droite, timing aléatoire
  useEffect(() => {
    if (revealIndex < text.length) {
      const nextDelay = 60 + Math.random() * 110; // entre 60ms et 170ms
      revealTimeout.current = setTimeout(() => {
        // Skip les espaces
        let next = revealIndex + 1;
        while (next < text.length && text[next] === ' ') next++;
        // Fixe la lettre révélée
        const fixed = [...displayRef.current];
        if (revealIndex < text.length && text[revealIndex] !== ' ') fixed[revealIndex] = text[revealIndex];
        setDisplay(fixed);
        setRevealIndex(next);
      }, nextDelay);
    } else {
      // Quand tout est révélé, relance après 4s
      loopTimeout.current = setTimeout(() => {
        setRevealIndex(0);
        setDisplay(text.split('').map(c => (c === ' ' ? ' ' : randomChar())));
      }, 4000);
    }
    return () => {
      if (revealTimeout.current) clearTimeout(revealTimeout.current);
      if (loopTimeout.current) clearTimeout(loopTimeout.current);
    };
  }, [revealIndex, text]);

  return <span className={className}>{display.join('')}</span>;
};

// RotatingDecodeText : alterne entre plusieurs textes avec l'effet DecodeText

interface RotatingDecodeTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  randomization?: number;
  duration?: number; // durée d'affichage de chaque texte (ms)
}

const RotatingDecodeText: React.FC<RotatingDecodeTextProps> = ({
  texts,
  className = '',
  speed = 40,
  randomization = 6,
  duration = 4000,
}) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx(i => (i + 1) % texts.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [idx, texts.length, duration]);
  return <DecodeText text={texts[idx]} className={className} speed={speed} randomization={randomization} />;
};

export default Hero;