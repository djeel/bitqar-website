// src/components/Features.tsx
import React from "react";
import card5 from '../assets/card5.svg';

interface FeatureCardProps {
  title?: string;
  description?: string;
  className?: string; // Pour des styles additionnels spécifiques à une carte
  isSpecialCard?: '0.5' | 'finality';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, className, isSpecialCard }) => {
  // Styles de base communs
  const baseStyles = `backdrop-blur-md bg-white/60 border border-[#78dbc4] rounded-[30px] shadow-lg transition-shadow duration-600 ease-in-out`;
  // Padding intérieur responsive
  const paddingStyles = `p-6 md:p-8 lg:p-10`; // Ajusté pour être plus flexible

  // Ref pour la carte
  const cardRef = React.useRef<HTMLDivElement>(null);
  // Ref pour savoir si la souris a déjà bougé (pour transition d'entrée)
  const hasMovedRef = React.useRef(false);

  // Gestion du mouvement 3D suiveur de souris
  // Plus de transition à l'entrée : effet instantané dès le hover
  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 220ms cubic-bezier(.23,1.04,.34,1), box-shadow 0.8s cubic-bezier(.23,1.04,.34,1)';
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1.04)';
    hasMovedRef.current = false;
  };






  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    // Retire la transition dès le premier mouvement pour la réactivité
    if (!hasMovedRef.current) {
      card.style.transition = 'none';
      hasMovedRef.current = true;
    }
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Limite l'angle max
    const maxRotate = 12;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    const rotateX = -((y - centerY) / centerY) * maxRotate;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    card.style.boxShadow = '0 16px 40px 0 rgba(64, 117, 105, 0.18), 0 1.5px 8px 0 rgba(108,255,221,0.12)';
    card.style.zIndex = '2';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Ajoute une transition fluide pour le retour
    card.style.transition = 'transform 220ms cubic-bezier(.23,1.04,.34,1), box-shadow 0.8s cubic-bezier(.23,1.04,.34,1)';
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.zIndex = '';
    hasMovedRef.current = false;
    // Retire la transition après le retour
    setTimeout(() => {
      if (card) card.style.transition = 'none';
    }, 350);
  };


  // Carte spéciale "0.5"
  if (isSpecialCard === '0.5') {
    return (
      <div
        ref={cardRef}
        className={`${baseStyles} ${paddingStyles} flex flex-col items-center justify-center text-center aspect-square w-full ${className || ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ willChange: 'transform, box-shadow' }}
      >
        <span className="text-7xl sm:text-8xl md:text-9xl leading-none font-bold text-bitqar-dark">0.5</span> {/* Tailles de police responsives */}
        <span className="text-xl sm:text-2xl text-gray-700 font-semibold mt-3 sm:mt-4">Second block times</span>
      </div>
    );
  }

  // Carte spéciale "finality"
  if (isSpecialCard === 'finality') {
    return (
      <div
        ref={cardRef}
        className={`${baseStyles} relative overflow-hidden flex flex-col items-end justify-end aspect-square w-full p-0 ${className || ''}`}
        style={{
          borderRadius: '30px', // Tailwind `rounded-[30px]` est prioritaire si appliqué au même élément
          backgroundImage: `url(${card5})`, // Utilise l'import JS/TS
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          willChange: 'transform, box-shadow',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Overlays: Combinés pour la simplicité si possible, ou s'assurer que les styles sont bien appliqués */}
        <div
          className="absolute inset-0 rounded-[30px] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%), rgba(108,255,220,0.3)', // Combinaison des gradients avec ajustement
          }}
        />
        <div
          className="relative z-10 w-full h-[70px] sm:h-[80px] flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-b-[30px] border-t border-[#78dbc4]/50" // Légère transparence pour le fond noir
          // La police `Sk-Modernist` doit être configurée dans votre `tailwind.config.js` ou importée globalement
          // style={{ fontFamily: 'Sk-Modernist', fontWeight: 700 }} // Préférez une classe Tailwind: `font-sk-modernist font-bold`
        >
          <span className="text-white text-lg sm:text-xl font-bold px-4 text-center">1s Single-slot finality</span> {/* Ajout de padding horizontal et text-center pour le texte du bas */}
        </div>
      </div>
    );
  }

  // Carte standard
  return (
    <div
      ref={cardRef}
      className={`${baseStyles} ${paddingStyles} flex flex-col justify-center text-left w-full ${className || ''}`} // `w-full` pour le responsive
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: 'transform, box-shadow' }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-bitqar-text-dark mb-3 sm:mb-4">{title}</h3> {/* Utilisation de h3 pour les titres de carte */}
      <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">{description}</p> {/* `p` pour la description, couleur de texte ajustée */}
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-transparent px-4 sm:px-6 lg:px-8">
  {/* Overlay flou et semi-transparent pour un effet uniforme sous le header */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(1px)',
      WebkitBackdropFilter: 'blur(1px)',
    }}
  />
      <div className="relative z-10 mx-auto max-w-screen-xl flex flex-col items-center"> {/* `max-w-screen-xl` est une bonne pratique */}
        <h2 className="text-4xl md:text-5xl font-bold text-bitqar-text-dark mb-12 md:mb-16 leading-tight text-center">
          The L1 Quantum Blockchain with <br className="hidden md:block" /> Endless Potential
        </h2>

        {/* Grille responsive pour les cartes.
            Sur petits écrans (mobile): 1 colonne
            Sur écrans moyens (tablette): 2 colonnes
            Sur grands écrans (desktop): jusqu'à 3 ou plus, selon le design voulu.
            Ici, nous allons essayer un layout qui s'adapte bien pour 2 puis 3 cartes.
        */}

        {/* Ligne du haut : 2 cartes */}
        {/* Utilisation de `grid` pour un meilleur contrôle du responsive.
            `grid-cols-1` par défaut (mobile)
            `md:grid-cols-2` pour les écrans moyens et plus
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full mb-8 md:mb-10 lg:mb-12">
          {/* Les `className` passées aux FeatureCard peuvent servir à des ajustements spécifiques si besoin,
              mais ici, la grille gère la largeur (via les colonnes).
              Si vous aviez des cartes de tailles différentes (ex: une carte prend 2 colonnes),
              vous utiliseriez `md:col-span-2`.
              Pour des cartes de taille égale dans la grille, pas besoin de `max-w` ici.
          */}
          <FeatureCard
            title="Hybrid Quantum-Resistant Consensus"
            description="A novel consensus mechanism replacing traditional PoS, designed for enhanced security and efficiency in the post-quantum era."
            // className="max-w-[705px] w-full" // Géré par la grille
          />
          <FeatureCard
            title="Post-Quantum Security"
            description="Built from the ground up with NIST-certified post-quantum cryptographic algorithms"
            // className="max-w-[620px] w-full" // Géré par la grille
          />
        </div>

        {/* Ligne du bas : 3 cartes */}
        {/* `lg:grid-cols-3` pour 3 colonnes sur les grands écrans.
            Sur mobile (par défaut) -> 1 colonne
            Sur tablette (`md`) -> pourrait rester à 2 colonnes, ou passer à 3 si le design le permet.
                                     Ici on fait 1 -> 2 -> 3.
            `gap-[55px]` est assez grand, peut-être réduire pour des écrans plus petits.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 w-full">
          <FeatureCard
            title="Secure P2P Communication"
            description="Node communication via libp2p is fortified with post-quantum encryption, ensuring data integrity and confidentiality across the network."
            // className="max-w-[603px] w-full" // Géré par la grille
          />
          <FeatureCard
            isSpecialCard="0.5"
            // className="max-w-[343px] w-full" // Géré par la grille
          />
          <FeatureCard
            isSpecialCard="finality"
            // className="max-w-[344px] w-full" // Géré par la grille
          />
        </div>
      </div>
    </section>
  );
};

export default Features;