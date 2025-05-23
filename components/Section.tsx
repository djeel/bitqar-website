
import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', id, titleClassName='', subtitleClassName='' }) => {
  return (
    <section className="mb-12">
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-skmodernist text-pq-accent mb-4 text-center ${titleClassName}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-lg text-pq-text-secondary mb-8 text-center ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
