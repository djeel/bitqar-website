import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-bitqar-bg-light px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-bitqar-text-dark mb-8 md:mb-10 leading-tight">
          Join the global community behind Bitqar
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          With a thriving community of members worldwide, Bitqar is backed by passionate <br className="hidden md:block"/> supporters driving the future of blockchain technology. Connect, collaborate, and grow <br className="hidden md:block"/> with us as we shape the next generation of decentralized solutions.
        </p>
        <p className="text-bitqar-text-dark text-xl md:text-2xl font-semibold mb-8">
          Join the Bitqar community today.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          {/* Placeholder icons for Discord, Twitter, GitHub, etc. */}
          {/* In a real scenario, these would be SVG icons */}
          <a href="#" className="text-bitqar-dark-green hover:text-bitqar-green transition-colors duration-300">
            <img src="https://via.placeholder.com/48/4F46E5/FFFFFF?text=D" alt="Discord" className="w-12 h-12 rounded-lg" />
          </a>
          <a href="#" className="text-bitqar-dark-green hover:text-bitqar-green transition-colors duration-300">
            <img src="https://via.placeholder.com/48/1DA1F2/FFFFFF?text=X" alt="Twitter" className="w-12 h-12 rounded-lg" />
          </a>
          <a href="#" className="text-bitqar-dark-green hover:text-bitqar-green transition-colors duration-300">
            <img src="https://via.placeholder.com/48/24292E/FFFFFF?text=G" alt="GitHub" className="w-12 h-12 rounded-lg" />
          </a>
          {/* Add more social icons as needed */}
        </div>

        {/* Gradient image placeholders, mimicking the design */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg shadow-lg"></div>
          <div className="aspect-square bg-gradient-to-br from-pink-400 to-red-600 rounded-lg shadow-lg"></div>
          <div className="aspect-square bg-gradient-to-br from-teal-300 to-green-500 rounded-lg shadow-lg"></div>
          <div className="aspect-square bg-gradient-to-br from-yellow-300 to-orange-500 rounded-lg shadow-lg"></div>
          <div className="aspect-square bg-gray-800 rounded-lg shadow-lg"></div> {/* Darker placeholder */}
          <div className="aspect-square bg-gradient-to-br from-purple-500 to-indigo-700 rounded-lg shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Community;