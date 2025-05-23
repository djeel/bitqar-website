
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { APP_NAME } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-skmodernist font-bold mb-6">
          <span className="text-pq-accent">{APP_NAME}:</span> Future of quantum blockchain
        </h1>
        <p className="text-xl md:text-2xl text-pq-text-secondary max-w-3xl mx-auto mb-10">
          Experience unparalleled security with {APP_NAME}, the blockchain architected for the post-quantum era. Protect your assets against tomorrow's threats, today.
        </p>
        <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center">
          <Link to="/about">
            <Button variant="primary" size="lg">Learn More</Button>
          </Link>
          <Link to="/docs">
            <Button variant="secondary" size="lg">Read Whitepaper</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
