import React from 'react';
import { Feature } from '../types';

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/60 backdrop-blur-lg border-2 border-pq-accent rounded-3xl p-8 shadow-xl flex flex-col items-center text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/80 hover:border-pq-accent-dark">
      <div className="flex justify-center md:justify-start items-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-skmodernist font-semibold mb-3 text-turquoise">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
