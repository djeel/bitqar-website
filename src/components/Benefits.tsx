import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-bitqar-text-dark mb-12 md:mb-16 leading-tight">
          Reinventing the Layer 1 Blockchain
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Bitqar ushers in a new paradigm of blockchain technology. Rebuilt from the ground up to be <br className="hidden md:block"/> the most efficient chain in the world— all while being 100% EVM compatible.
        </p>

        <div className="relative w-full aspect-video bg-gradient-to-br from-bitqar-green/30 to-bitqar-bg-light rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
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
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-700 text-sm italic">
            (Video sound must be muted. Here and gone! unit explore message. Solutionize.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;