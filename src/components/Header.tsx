// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    // Conserver la position fixe, le fond avec flou et la bordure.
    // Ajout d'un léger box-shadow pour un meilleur effet de profondeur, similaire à ce qu'on voit souvent.
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      {/* Le conteneur principal pour centrer le contenu.
          Votre `max-w-[calc(100vw-860px)]` est une approche intéressante mais peut être complexe.
          Une approche plus courante est d'utiliser des breakpoints standards ou une largeur maximale fixe.
          Exemple : `max-w-7xl` (qui correspond à 1280px, souvent utilisé).
          Simplifions pour l'exemple, mais adaptez `max-w-screen-xl` ou autre selon votre design global.
      */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          {/* S'assurer que le chemin vers le logo est correct et dans le dossier `public` ou géré par votre bundler. */}
          <img
            src="/bitqar-logo.png" // Assurez-vous que ce chemin est correct. Par exemple, si dans public/images, ce serait /images/bitqar-logo.png
            alt="Bitqar Logo"
            className="h-10 w-auto" // Simplifié : `h-10` (40px) et `w-auto` est suffisant. Le navigateur maintiendra les proportions.
                                  // `max-h-[40px]` est redondant si `h-10` est déjà défini.
                                  // `max-w-[180px]` peut être utile si le logo est très large.
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {/* Les liens de navigation.
              Utilisez des `button` si ce sont des actions qui ne changent pas l'URL
              ou des composants de lien de votre librairie de routing (ex: <Link> de Next.js ou React Router).
              Pour des ancres simples, `a` est correct.
              Ajout de `transition-colors` pour un effet de survol plus doux.
          */}
          <a
            href="#home"
            className="text-gray-700 hover:text-bitqar-dark font-medium text-lg transition-colors duration-150"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-bitqar-dark font-medium text-lg transition-colors duration-150"
          >
            About
          </a>
          <a
            href="#developers"
            className="text-gray-700 hover:text-bitqar-dark font-medium text-lg transition-colors duration-150"
          >
            Developers
          </a>
          <a
            href="#wallet"
            className="text-gray-700 hover:text-bitqar-dark font-medium text-lg transition-colors duration-150"
          >
            Wallet
          </a>
        </nav>
        {/* Placeholder pour le bouton du menu mobile.
            Vous aurez besoin d'un état pour gérer l'ouverture/fermeture et d'un composant de menu mobile.
        */}
        <div className="md:hidden">
          {/* Exemple de bouton de menu burger simple (icône à ajouter) */}
          <button
            aria-label="Ouvrir le menu principal"
            className="text-gray-700 hover:text-bitqar-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bitqar-dark"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;