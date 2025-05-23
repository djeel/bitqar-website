import React from 'react';
import { Feature } from '../types';

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg flex flex-col items-center text-center h-full">
      <div className="flex justify-center md:justify-start items-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-skmodernist font-semibold mb-3 text-turquoise">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
