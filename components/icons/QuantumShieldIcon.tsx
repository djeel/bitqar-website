
import React from 'react';
import { IconProps } from '../../types';

export const QuantumShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
    <path d="M12 12v0a4 4 0 00-4 4h8a4 4 0 00-4-4z"></path>
    <path d="M8.5 13.5l2 2"></path>
    <path d="M13.5 13.5l-2 2"></path>
  </svg>
);
