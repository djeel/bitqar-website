// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white/50 backdrop-blur-[10px] border-b border-white border-b-[0.5px] z-50">
      {/* Ajoutez un conteneur pour limiter la largeur et centrer */}
      <div className="mx-auto w-full max-w-[calc(100vw-860px)] px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          <img src="/bitqar-logo.png" alt="Bitqar Logo" className="max-h-[40px] w-auto max-w-[180px]" />
        </div>
        <nav className="hidden md:flex space-x-12">
          <a href="#home" className="text-black hover:text-bitqar-dark font-medium text-lg">Home</a>
          <a href="#about" className="text-black hover:text-bitqar-dark font-medium text-lg">About</a>
          <a href="#developers" className="text-black hover:text-bitqar-dark font-medium text-lg">Developers</a>
          <a href="#wallet" className="text-black hover:text-bitqar-dark font-medium text-lg">Wallet</a>
        </nav>
        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
};

export default Header;