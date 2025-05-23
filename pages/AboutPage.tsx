
import React from 'react';
import Section from '../components/Section';
import { ABOUT_BITQAR, APP_NAME } from '../constants';
import { CubeIcon } from '../components/icons/CubeIcon';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Section 
        title={`About ${APP_NAME}`}
        subtitle="Pioneering the next generation of blockchain security."
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <CubeIcon className="w-20 h-20 text-pq-accent mx-auto mb-6" />
          <p className="text-lg text-pq-text-secondary leading-relaxed">
            {ABOUT_BITQAR.introduction}
          </p>
        </div>

        <div className="bg-pq-secondary p-8 md:p-12 rounded-xl shadow-2xl border border-pq-border mb-12">
          <h3 className="text-3xl font-skmodernist font-semibold text-pq-accent mb-6 text-center">Our Vision</h3>
          <p className="text-lg text-pq-text-secondary leading-relaxed text-center">
            {ABOUT_BITQAR.vision}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-skmodernist font-semibold text-pq-accent mb-8 text-center">Core Pillars</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {ABOUT_BITQAR.corePillars.map((pillar, index) => (
              <div key={index} className="bg-pq-secondary p-6 rounded-lg shadow-xl border border-pq-border/50">
                <h4 className="text-2xl font-skmodernist text-pq-accent mb-3">{pillar.title}</h4>
                <p className="text-pq-text-secondary">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
