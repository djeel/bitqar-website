import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient de fond global */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{
        background: 'linear-gradient(135deg, #78dbc4 0%, #eafffa 50%, #fff 100%)',
        opacity: 0.7,
      }} />
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