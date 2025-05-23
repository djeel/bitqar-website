
import React from 'react';
import { IconProps } from '../../types';

export const WalletIcon: React.FC<IconProps> = ({ className }) => (
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
    <path d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4"></path>
    <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-4H4z"></path>
    <path d="M18 12a2 2 0 00-2-2h-4a2 2 0 000 4h4a2 2 0 002-2z"></path>
  </svg>
);
