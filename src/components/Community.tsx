// src/components/Community.tsx
import React from 'react';
import './Community.css';
import discordIcon from '../assets/discord.svg';
import githubIcon from '../assets/github.svg';
import telegramIcon from '../assets/telegram.svg';
import npmIcon from '../assets/npm.svg';
import community1 from '../assets/community1.jpg';
import community2 from '../assets/community2.jpg';
import community3 from '../assets/community3.jpg';
import community4 from '../assets/community4.jpg';
import community5 from '../assets/community5.jpg';
import community6 from '../assets/community6.jpg';
const communityImages = [community1, community2, community3, community4, community5, community6];

// Il serait bien d'avoir un composant Icône si vous en utilisez beaucoup et voulez gérer le hover de façon centralisée.
// Pour l'instant, nous allons garder les <img>.
// interface SocialIconProps {
//   href: string;
//   label: string;
//   iconSrc: string;
//   iconAlt: string;
// }

// const SocialLink: React.FC<SocialIconProps> = ({ href, label, iconSrc, iconAlt }) => (
//   <a
//     href={href}
//     aria-label={label}
//     target="_blank" // Ouvre les liens sociaux dans un nouvel onglet
//     rel="noopener noreferrer" // Pour la sécurité avec target="_blank"
//     className="text-gray-700 hover:opacity-75 transition-opacity duration-200" // Changement d'opacité au survol comme effet simple
//   >
//     <img src={iconSrc} alt={iconAlt} className="w-10 h-10 md:w-12 md:h-12" /> {/* Taille ajustée, pas besoin de filter: invert(0) */}
//   </a>
// );

const Community: React.FC = () => {
  return (
    <section id="community" className="relative py-16 md:py-24 bg-bitqar-bg-light px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Overlay flou et semi-transparent pour un effet uniforme sous le header */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: 'rgba(255,255,255,0.5)',
      backdropFilter: 'blur(1px)',
      WebkitBackdropFilter: 'blur(1px)',
    }}
  />
      {/* Fond avec gradient */}
      <div
        className="absolute inset-x-0 -top-[30vh] -bottom-[30vh] z-0 pointer-events-none"
        // Si #78dbc4 est une couleur de votre thème (ex: 'bitqar-primary'), vous pourriez la référencer ici.
        // L'opacité peut aussi être gérée via la couleur RGBA dans le gradient si supporté, ou via une classe d'opacité Tailwind sur cet élément.
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #78dbc4 100%)', // Couleur directement
          opacity: 0.3, // Légère réduction de l'opacité pour être plus subtil
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto max-w-screen-xl"> {/* max-w-screen-xl pour la cohérence */}
        <div className="md:text-left mb-12 md:mb-16"> {/* Ajout d'un conteneur pour le texte pour un meilleur contrôle de la largeur si besoin */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bitqar-text-dark mb-6 md:mb-8 leading-tight"> {/* Utilisation de text-bitqar-text-dark ou une autre couleur définie dans Tailwind */}
            Join the global community behind Bitqar
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"> {/* Couleur de texte adoucie, leading-relaxed pour l'interligne */}
            With a thriving community of members worldwide, Bitqar is backed by passionate
            <br className="hidden md:block" /> supporters driving the future of blockchain technology. Connect, collaborate, and grow
            <br className="hidden md:block" /> with us as we shape the next generation of decentralized solutions.
          </p>
          <p className="text-gray-800 text-xl md:text-2xl font-semibold mb-8 md:mb-10"> {/* Couleur et marge ajustées */}
            Join the Bitqar community today.
          </p>
        </div>

        {/* Icônes des réseaux sociaux */}
        {/* `justify-center` sur mobile, `md:justify-start` sur desktop */}
        <div className="flex flex-wrap gap-5 md:gap-6 items-center justify-center md:justify-start mb-12 md:mb-16">
          {/* Note sur les icônes :
              - `filter: invert(0)` ne fait rien. Si vos icônes SVG sont noires et que vous voulez les colorer avec du texte (via currentColor),
                elles doivent être intégrées comme des composants React (SVG inline) et leur `fill` ou `stroke` mis à `currentColor`.
              - Le `hover:text-[#78dbc4]` sur le <a> n'affectera pas la couleur de <img>.
              - Pour un effet de survol simple sur l'icône <img>, on peut jouer sur l'opacité du <a> ou un scale.
          */}
          <a href="#" aria-label="Discord" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <img src={discordIcon} alt="Discord" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <img src={githubIcon} alt="GitHub" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="#" aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <img src={telegramIcon} alt="Telegram" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
          <a href="#" aria-label="NPM" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            {/* Assurez-vous que npm.svg est pertinent pour une "communauté" ou si c'est pour les développeurs */}
            <img src={npmIcon} alt="NPM" className="w-10 h-10 md:w-12 md:h-12" />
          </a>
        </div>

        {/* Bande défilante du haut (scroll lent) */}
        <div className="slideshow mb-0">
          <div className="images" style={{animationDuration: '42s'}}>
            {[1,2,3,4,5,6,1,2,3,4,5,6].map((i,idx) => (
              <img
                src={communityImages[(i-1)%6]}
                alt={``}
                className="photo"
                key={"row1-"+idx}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        {/* Bande défilante du bas (scroll rapide) */}
        <div className="slideshow">
          <div className="images" style={{animationDuration: '60s'}}>
            {[6,5,4,3,2,1,6,5,4,3,2,1].map((i,idx) => (
              <img
                src={communityImages[(i-1)%6]}
                alt={``}
                className="photo"
                key={"row2-"+idx}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;