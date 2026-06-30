import { useState } from 'react';
import LenisProvider from './components/fx/LenisProvider';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LenisProvider>
      <div className="grain" aria-hidden="true" />
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Community />
      </main>
      <Footer />
    </LenisProvider>
  );
}

export default App;
