import React from 'react';  

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8"
      // Based on hero.jpg, it's a subtle gradient rather than a direct image background.
      // If the image itself is a gradient, this is better.
      // If it's a more complex graphic, consider it as an actual background image.
      // For now, I'll use a gradient that mimics the provided image.
    >
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="text-[#78dbc4]">Bitqar:</span> <span className="text-bitqar-text-dark">future of</span> <br className="hidden md:block"/> <span className="text-bitqar-text-dark">quantum blockchain</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;