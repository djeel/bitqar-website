
import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { DocsIcon } from '../components/icons/DocsIcon';
import { APP_NAME } from '../constants';

const DocumentationPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
    <Section 
      title={`${APP_NAME} Documentation`}
      subtitle="Dive deep into the technical architecture and post-quantum innovations of Bitqar."
    >
      <div className="text-center max-w-2xl mx-auto">
        <DocsIcon className="w-24 h-24 text-pq-accent mx-auto mb-8" />
        <p className="text-xl text-pq-text-secondary mb-6">
          Our comprehensive technical documentation, including the whitepaper, development guides, and API references, is currently under meticulous preparation. We are committed to providing clear, accessible, and thorough resources for developers, researchers, and enthusiasts.
        </p>
        <p className="text-lg text-pq-text-secondary mb-8">
          Stay tuned for its release!
        </p>
        <Button variant="primary" size="lg" disabled className="opacity-50 cursor-not-allowed">
          Whitepaper (Coming Soon)
        </Button>
        <div className="mt-10 border-t border-pq-border pt-8">
            <h3 className="text-2xl font-skmodernist text-pq-accent mb-4">Anticipated Content</h3>
            <ul className="list-disc list-inside text-pq-text-secondary text-left space-y-2 inline-block">
                <li>Detailed Whitepaper on Bitqar Protocol</li>
                <li>Post-Quantum Cryptography Implementation Guide</li>
                <li>Consensus Mechanism Explained</li>
                <li>Node Setup and Network Participation</li>
                <li>Smart Contract Development (Post-Quantum Secure)</li>
                <li>API Reference and SDKs</li>
            </ul>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default DocumentationPage;
