import React from 'react';
import heroBg from '../assets/hero.jpg'; // Assuming hero.jpg is in src/assets

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-bitqar-bg-light to-white overflow-hidden"
      // Based on hero.jpg, it's a subtle gradient rather than a direct image background.
      // If the image itself is a gradient, this is better.
      // If it's a more complex graphic, consider it as an actual background image.
      // For now, I'll use a gradient that mimics the provided image.
    >
      {/* Visual background as per hero.jpg (subtle gradient) */}
      <div className="absolute inset-0 z-0 opacity-50"></div>

      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-bitqar-dark-green">
          Bitqar: <span className="text-bitqar-green">future of</span> <br className="hidden md:block"/> quantum blockchain
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="bg-white text-bitqar-green border border-bitqar-green py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-bitqar-green hover:text-white transition-colors duration-300">
            Learn more
          </button>
          <button className="bg-bitqar-dark-green text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-bitqar-green transition-colors duration-300">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;