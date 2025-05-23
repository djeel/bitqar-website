
import React from 'react';
import { IconProps } from '../../types';

export const BlockchainIcon: React.FC<IconProps> = ({ className }) => (
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
    <rect x="8" y="8" width="8" height="8" rx="1"></rect>
    <path d="M3.5 15.5L8 12l4.5 3.5"></path>
    <path d="M3.5 8.5L8 12l4.5-3.5"></path>
    <path d="M16 8v8"></path>
    <path d="M8 16H5a1 1 0 01-1-1V9a1 1 0 011-1h3"></path>
    <path d="M16 16h3a1 1 0 001-1V9a1 1 0 00-1-1h-3"></path>
  </svg>
);
