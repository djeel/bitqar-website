// src/components/Features.tsx
import React from "react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  className?: string; // Pour des styles additionnels spécifiques à une carte
  isSpecialCard?: '0.5' | 'finality';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className, isSpecialCard }) => {
  const baseStyles = `backdrop-blur-md bg-white/60 border border-[#78dbc4] rounded-[30px] shadow-lg transition-all duration-300 ease-in-out`;
  // Padding intérieur responsive par défaut (utilisé si non surchargé par className)
  const defaultPaddingStyles = `p-6 md:p-8 lg:p-10`;

  if (isSpecialCard === '0.5') {
    return (
      <div
        // On s'assure que className peut aussi surcharger le padding ici si besoin, même si on utilise defaultPaddingStyles pour les cartes spéciales
        className={`${baseStyles} ${defaultPaddingStyles} flex flex-col items-center justify-center text-center aspect-square w-full ${className || ''}`}
      >
        <span className="text-7xl sm:text-8xl md:text-9xl leading-none font-bold text-bitqar-dark">0.5</span>
        <span className="text-xl sm:text-2xl text-gray-700 font-semibold mt-3 sm:mt-4">Second block times</span>
      </div>
    );
  }

  if (isSpecialCard === 'finality') {
    return (
      <div
        className={`${baseStyles} relative overflow-hidden flex flex-col items-end justify-end aspect-square w-full p-0 ${className || ''}`}
        style={{
          borderRadius: '30px',
          backgroundImage: `url('/card5.svg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0 rounded-[30px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%), rgba(108,255,220,0.3)',
          }}
        />
        <div
          className="relative z-10 w-full h-[70px] sm:h-[80px] flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-b-[30px] border-t border-[#78dbc4]/50"
        >
          <span className="text-white text-lg sm:text-xl font-bold px-4 text-center">1s Single-slot finality</span>
        </div>
      </div>
    );
  }

  // Carte standard
  // Note : ${defaultPaddingStyles} est appliqué, mais sera surchargé par les classes de padding dans ${className} si elles existent
  return (
    <div
      className={`${baseStyles} ${defaultPaddingStyles} flex flex-col justify-center text-left w-full ${className || ''}`}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-bitqar-text-dark mb-3 sm:mb-4">{title}</h3>
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  // Définissons les classes de padding plus grandes pour les deux premières cartes
  // Par exemple, augmentons le padding par rapport au défaut (p-6 md:p-8 lg:p-10)
  // à quelque chose comme : p-8 md:p-12 lg:p-16
  const largerPaddingForFirstTwoCards = "p-8 sm:p-10 md:p-12 lg:p-16"; // Ajustez ces valeurs selon vos préférences

  return (
    <section id="features" className="py-16 md:py-24 bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-bitqar-text-dark mb-12 md:mb-16 leading-tight text-center">
          The L1 Quantum Blockchain with <br className="hidden md:block" /> Endless Potential
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full mb-8 md:mb-10 lg:mb-12">
          <FeatureCard
            title="Hybrid Quantum-Resistant Consensus"
            description="A novel consensus mechanism replacing traditional PoS, designed for enhanced security and efficiency in the post-quantum era."
            className={largerPaddingForFirstTwoCards} // Application du padding augmenté
          />
          <FeatureCard
            title="Post-Quantum Security"
            description="Built from the ground up with NIST-certified post-quantum cryptographic algorithms"
            className={largerPaddingForFirstTwoCards} // Application du padding augmenté
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full">
          <FeatureCard
            title="Secure P2P Communication"
            description="Node communication via libp2p is fortified with post-quantum encryption, ensuring data integrity and confidentiality across the network."
            // Cette carte utilisera le padding par défaut de FeatureCard
          />
          <FeatureCard
            isSpecialCard="0.5"
            // Cette carte spéciale a son propre padding défini ou peut aussi utiliser defaultPaddingStyles,
            // que vous pourriez également surcharger avec className si nécessaire.
            // Pour l'instant, elle utilise le defaultPaddingStyles appliqué dans la condition isSpecialCard === '0.5'
          />
          <FeatureCard
            isSpecialCard="finality"
            // Cette carte spéciale gère son padding via p-0 et le contenu interne.
          />
        </div>
      </div>
    </section>
  );
};

export default Features;