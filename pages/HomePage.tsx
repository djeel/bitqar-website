
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Section from '../components/Section';
import { FEATURES_DATA, APP_NAME } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      
      <Section 
        id="features" 
        title="Core Features"
        subtitle={`Discover the foundational pillars that make ${APP_NAME} a leader in post-quantum blockchain technology.`}
        className="bg-pq-secondary"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </Section>

      <Section 
        title="Join the Revolution"
        subtitle={`Become part of the ${APP_NAME} ecosystem and help build a quantum-resistant future for decentralized technologies.`}
      >
        <div className="text-center">
          <Link to="/docs">
            <Button variant="primary" size="lg" className="animate-pulse-glow">
              Explore Documentation
            </Button>
          </Link>
          <p className="mt-6 text-pq-text-secondary">
            Or, connect with our community and team to learn more.
          </p>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
