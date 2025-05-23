import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="relative py-16 md:py-24 bg-bitqar-bg-light px-4 overflow-hidden">
      {/* Gradient background Figma */}
      <div
        className="absolute left-0 right-0 -top-[30vh] -bottom-[30vh] z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #78dbc4 100%)',
          opacity: 0.4,
        }}
      ></div>
      <div className="relative z-10 mx-auto max-w-[1365px] md:text-left pl-0">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 leading-tight" style={{ color: '#40757b' }}>
          Join the global community behind Bitqar
        </h2>
        <p className="text-black text-lg md:text-xl mb-6">
          With a thriving community of members worldwide, Bitqar is backed by passionate <br className="hidden md:block"/> supporters driving the future of blockchain technology. Connect, collaborate, and grow <br className="hidden md:block"/> with us as we shape the next generation of decentralized solutions.
        </p>
        <p className="text-black text-xl md:text-2xl font-semibold mb-6">
          Join the Bitqar community today.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 items-center md:items-start mb-10 md:mb-12 justify-center md:justify-start">
          <a href="#" aria-label="Discord" className="hover:text-[#78dbc4]">
            <img src="/discord.svg" alt="Discord" className="w-12 h-12 transition-colors duration-300" style={{ filter: 'invert(0)' }} />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-[#78dbc4]">
            <img src="/github.svg" alt="GitHub" className="w-12 h-12 transition-colors duration-300" style={{ filter: 'invert(0)' }} />
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-[#78dbc4]">
            <img src="/telegram.svg" alt="Telegram" className="w-12 h-12 transition-colors duration-300" style={{ filter: 'invert(0)' }} />
          </a>
          <a href="#" aria-label="NPM" className="hover:text-[#78dbc4]">
            <img src="/npm.svg" alt="NPM" className="w-12 h-12 transition-colors duration-300" style={{ filter: 'invert(0)' }} />
          </a>
        </div>
        {/* Grille de photos façon Features */}
        <div className="pl-0 w-full">
          {/* Ligne du haut : 2 "photos" (705px et 620px) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[55px] w-full mb-[30px] justify-center">
            <div className="bg-white rounded-[30px] shadow-lg border border-[#78dbc4] backdrop-blur-[10px] overflow-hidden max-w-[705px] w-full h-[340px]"></div>
            <div className="bg-white rounded-[30px] shadow-lg border border-[#78dbc4] backdrop-blur-[10px] overflow-hidden max-w-[620px] w-full h-[340px]"></div>
          </div>
          {/* Ligne du bas : 3 "photos" (603px, 343px, 344px) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[55px] w-full justify-center">
            <div className="bg-white rounded-[30px] shadow-lg border border-[#78dbc4] backdrop-blur-[10px] overflow-hidden max-w-[603px] w-full h-[340px]"></div>
            <div className="bg-white rounded-[30px] shadow-lg border border-[#78dbc4] backdrop-blur-[10px] overflow-hidden max-w-[343px] w-full h-[340px]"></div>
            <div className="bg-white rounded-[30px] shadow-lg border border-[#78dbc4] backdrop-blur-[10px] overflow-hidden max-w-[344px] w-full h-[340px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;