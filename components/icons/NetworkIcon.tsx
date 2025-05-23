
import React from 'react';
import { IconProps } from '../../types';

export const NetworkIcon: React.FC<IconProps> = ({ className }) => (
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
    <circle cx="12" cy="12" r="2.5"></circle>
    <circle cx="5" cy="12" r="2.5"></circle>
    <circle cx="19" cy="12" r="2.5"></circle>
    <circle cx="12" cy="5" r="2.5"></circle>
    <circle cx="12" cy="19" r="2.5"></circle>
    <path d="M12 14.5v2M12 7.5v2M14.5 12h2M7.5 12h2"></path>
    <path d="M8.5 8.5l-1-1"></path>
    <path d="M16.5 16.5l-1-1"></path>
    <path d="M8.5 15.5l-1 1"></path>
    <path d="M16.5 7.5l-1 1"></path>
  </svg>
);
