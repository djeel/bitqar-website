// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 z-50 shadow-sm py-4">
      {/* Ajoutez un conteneur pour limiter la largeur et centrer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center"> {/* max-w-7xl est un exemple, ajustez selon 600px de marge */}
        <div className="flex items-center">
          <img src="/bitqar-logo.png" alt="Bitqar Logo" className="h-8 md:h-10" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-bitqar-text-dark hover:text-bitqar-dark-green font-medium">Home</a>
          <a href="#about" className="text-bitqar-text-dark hover:text-bitqar-dark-green font-medium">About</a>
          <a href="#developers" className="text-bitqar-text-dark hover:text-bitqar-dark-green font-medium">Developers</a>
          <a href="#wallet" className="text-bitqar-text-dark hover:text-bitqar-dark-green font-medium">Wallet</a>
        </nav>
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
};

export default Header;