
import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { WalletIcon } from '../components/icons/WalletIcon';
import { TOKEN_SYMBOL, APP_NAME } from '../constants';

const WalletPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
    <Section 
      title={`${APP_NAME} Wallet`}
      subtitle={`Securely manage your ${TOKEN_SYMBOL} assets with our post-quantum wallet.`}
    >
      <div className="text-center max-w-xl mx-auto bg-pq-secondary p-8 md:p-12 rounded-xl shadow-2xl border border-pq-border">
        <WalletIcon className="w-20 h-20 text-pq-accent mx-auto mb-6" />
        
        <h3 className="text-2xl font-skmodernist text-pq-accent mb-4">Access Your Secure Assets</h3>
        <p className="text-pq-text-secondary mb-8">
          The {APP_NAME} wallet interface is currently in development. It will provide a seamless and ultra-secure experience for managing your post-quantum protected tokens.
        </p>

        <Button variant="primary" size="lg" className="mb-6 w-full md:w-auto animate-pulse-glow">
          Connect Wallet (Coming Soon)
        </Button>

        <div className="border-t border-pq-border pt-6 mt-6">
          <p className="text-lg text-pq-text-secondary">
            Your Balance: <span className="font-skmodernist text-pq-accent">-- {TOKEN_SYMBOL}</span>
          </p>
          <p className="text-sm text-pq-text-secondary mt-2">
            Full wallet functionality, including sending, receiving, and staking ${TOKEN_SYMBOL}, will be available upon launch.
          </p>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default WalletPage;
