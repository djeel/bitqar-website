import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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