import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Community from './components/Community';
import Footer from './components/Footer';

// --- Blur qui suit la souris sur tout le site ---
const MouseSpotlight: React.FC = () => {
  const spotRef = React.useRef<HTMLDivElement>(null);
  const isTouch = React.useRef(false);
  React.useEffect(() => {
    const handleTouch = () => { isTouch.current = true; if (spotRef.current) spotRef.current.style.opacity = '0'; };
    const handleMouse = () => { isTouch.current = false; if (spotRef.current) spotRef.current.style.opacity = '0.26'; };
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);
  React.useEffect(() => {
    let animationId: number;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    const update = () => {
      if (spotRef.current) {
        spotRef.current.style.left = `${pos.x - 130}px`;
        spotRef.current.style.top = `${pos.y - 130}px`;
      }
      animationId = requestAnimationFrame(update);
    };
    animationId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <div
      ref={spotRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 260,
        height: 260,
        borderRadius: '50%',
        zIndex: 10,
        pointerEvents: 'none',
        background: '#fff',
        opacity: 0.26,
        backdropFilter: 'brightness(1.7) blur(12px)',
        WebkitBackdropFilter: 'brightness(1.7) blur(12px)',
        mixBlendMode: 'soft-light',
        transition: 'opacity 0.28s cubic-bezier(.4,0,.2,1)',
        willChange: 'left, top',
      }}
      aria-hidden="true"
    />
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient de fond global */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{
        background: 'linear-gradient(135deg, #78dbc4 0%, #eafffa 50%, #fff 100%)',
        opacity: 0.7,
      }} />
      <MouseSpotlight />
      <Header />
      <main className="flex-grow mt-[72px] md:mt-[80px]"> {/* Adjust margin-top for fixed header height */}
        <Hero />
        <Features />
        <Benefits />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;