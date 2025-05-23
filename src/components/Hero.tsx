import React from 'react';  

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-bitqar-dark-light to-white overflow-hidden"
      // Based on hero.jpg, it's a subtle gradient rather than a direct image background.
      // If the image itself is a gradient, this is better.
      // If it's a more complex graphic, consider it as an actual background image.
      // For now, I'll use a gradient that mimics the provided image.
    >
      {/* Visual background as per hero.jpg (subtle gradient) */}
      <div className="absolute inset-0 z-0 opacity-50"></div>
      {/* Overlay gradient Figma */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #78dbc4 0%, rgba(0,0,0,0) 100%)',
          opacity: 0.4,
        }}
      ></div>

      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#78dbc4]">Bitqar:</span> <span className="text-bitqar-text-dark">future of</span> <br className="hidden md:block"/> <span className="text-bitqar-text-dark">quantum blockchain</span>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-[30px] justify-center items-center">
          <a href="#features" aria-label="Learn more">
            <div className="border border-white border-[0.5px] rounded-[30px] overflow-hidden flex items-center justify-center bg-white/30 backdrop-blur-[10px] w-[300px] h-[60px]">
              <span className="text-[#78dbc4] font-bold text-xl" style={{fontFamily:'Sk-Modernist'}}>Learn more</span>
            </div>
          </a>
          <a href="#wallet" aria-label="Connect Wallet">
            <div className="border border-white border-[0.5px] rounded-[30px] overflow-hidden flex items-center justify-center w-[320px] h-[60px]" style={{background:'rgba(64,128,110,0.3)',backdropFilter:'blur(10px)'}}>
              <span className="text-white font-bold text-xl" style={{fontFamily:'Sk-Modernist'}}>Connect Wallet</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;