// src/components/Features.tsx
import React from "react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  className?: string;
  isSpecialCard?: '0.5' | 'finality';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className, isSpecialCard }) => {
  // Styles communs Figma : blanc semi-transparent, bordure verte, radius 30px, flou, ombre
  const base = `backdrop-blur-[10px] bg-white/50 border border-[#78dbc4] rounded-[30px] shadow-[0_4px_32px_rgba(120,219,196,0.14)] transition-all duration-300 ease-in-out`;
  // Espacement intérieur généreux
  const padding = `px-8 py-12 md:px-12 md:py-16`;
  // Pour la carte verte
  const greenCard = `bg-gradient-to-br from-[#6df7ce] via-[#bafff1] to-[#eafffa] bg-bitqar-green text-white border-none relative overflow-hidden`;

  if (isSpecialCard === '0.5') {
    return (
      <div className={`${base} ${padding} flex flex-col items-center justify-center text-center h-[340px] w-full max-w-[343px]`}>
        <span className="text-[96px] leading-none font-bold text-bitqar-dark">0.5</span>
        <span className="text-gray-700 text-2xl font-semibold mt-4">Second block times</span>
      </div>
    );
  }
  if (isSpecialCard === 'finality') {
    return (
      <div
        className={`${base} relative overflow-hidden flex flex-col items-end justify-end h-[340px] w-full max-w-[344px] p-0`}
        style={{
          borderRadius: 30,
          backgroundImage: `url('/card5.svg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient blanc -> transparent */}
        <div className="absolute inset-0 rounded-[30px] pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          opacity: 1,
        }} />
        {/* Overlay vert semi-transparent */}
        <div className="absolute inset-0 rounded-[30px] pointer-events-none" style={{
          background: 'rgba(108,255,220,0.5)',
        }} />
        {/* Bloc texte noir en bas, police identique à la card 0.5 */}
        <div className="relative z-10 w-full h-[80px] flex items-center justify-center bg-black rounded-b-[30px] border-t border-[#78dbc4]" style={{fontFamily:'Sk-Modernist', fontWeight:700}}>
          <span className="text-white text-xl font-bold">1s Single-slot finality</span>
        </div>
      </div>
    );
  }
  // Cartes normales (haut et bas)
  return (
    <div className={`${base} ${padding} flex flex-col justify-center h-[340px] text-left ${className || ''}`}>
      <span className="text-2xl md:text-3xl font-bold text-bitqar-text-dark mb-4">{title}</span>
      <span className="text-gray-800 text-lg md:text-xl leading-relaxed">{description}</span>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-transparent px-4">
      <div className="mx-auto max-w-[1365px] flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-bitqar-text-dark mb-12 md:mb-16 leading-tight text-center">
          The L1 Quantum Blockchain with <br className="hidden md:block"/> Endless Potential
        </h2>
        {/* Ligne du haut : 2 cartes (705px et 620px) */}
        <div className="flex flex-row gap-[55px] w-full mb-[30px] justify-center">
          <FeatureCard
            title="Hybrid Quantum-Resistant Consensus"
            description="A novel consensus mechanism replacing traditional PoS, designed for enhanced security and efficiency in the post-quantum era."
            className="max-w-[705px] w-full"
          />
          <FeatureCard
            title="Post-Quantum Security"
            description="Built from the ground up with NIST-certified post-quantum cryptographic algorithms"
            className="max-w-[620px] w-full"
          />
        </div>
        {/* Ligne du bas : 3 cartes (603px, 343px, 344px) */}
        <div className="flex flex-row gap-[55px] w-full justify-center">
          <FeatureCard
            title="Secure P2P Communication"
            description="Node communication via libp2p is fortified with post-quantum encryption, ensuring data integrity and confidentiality across the network."
            className="max-w-[603px] w-full"
          />
          <FeatureCard
            isSpecialCard="0.5"
            className="max-w-[343px] w-full"
          />
          <FeatureCard
            isSpecialCard="finality"
            className="max-w-[344px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;