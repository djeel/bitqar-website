
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, APP_NAME } from '../constants';
import { WalletIcon } from './icons/WalletIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-lg border-b border-pq-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-2">
          <WalletIcon className="w-8 h-8 text-pq-accent" />
          <span className="font-skmodernist text-2xl text-pq-accent">{APP_NAME}</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive ? 'text-pq-accent' : 'text-pq-text-secondary hover:text-pq-accent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-pq-text-secondary hover:text-pq-accent focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      {/* Mobile Menu*/}
      {isOpen && (
        <div className="md:hidden bg-pq-secondary pb-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-3 px-4 text-base font-medium transition-colors duration-300 ${
                  isActive ? 'text-pq-accent bg-pq-primary' : 'text-pq-text-secondary hover:text-pq-accent hover:bg-pq-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};


export default Navbar;
