import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative py-16 md:py-24 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background Figma */}
      <div
        className="absolute left-0 right-0 -top-[30vh] -bottom-[30vh] z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #78dbc4 100%)',
          opacity: 0.4,
        }}
      ></div>
      {/* Overlay Figma background */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'rgba(255,255,255,0.5)',
          border: '0.5px solid #78dbc4',
          borderRadius: 0,
          backdropFilter: 'blur(4px)',
        }}
      ></div>
      <div className="relative z-20 container mx-auto text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ color: '#40757b' }}>
          Reinventing the Layer 1 Blockchain
        </h2>
        <p className="text-black text-lg md:text-xl mb-12">
          Bitqar ushers in a new paradigm of blockchain technology. Rebuilt from the ground up to be <br className="hidden md:block"/> the most efficient chain in the world— all while being 100% EVM compatible.
        </p>

        <div className="relative w-full aspect-video shadow-xl flex items-center justify-center overflow-hidden border rounded-[30px]" style={{ background: '#6debcf', opacity: 0.5, border: '0.5px solid #78dbc4', backdropFilter: 'blur(10px)', borderRadius: 30 }}>
          {/* Placeholder for video. In a real app, this would be an actual video player */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-500 bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer">
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;