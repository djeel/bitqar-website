
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-pq-secondary border-t border-pq-border py-6 text-center text-pq-text-secondary">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} {APP_NAME}. All rights reserved.
        </p>
        <p className="text-pq-text-secondary text-xs mt-1">
          Pioneering Post-Quantum Blockchain Technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
