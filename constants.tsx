
import React from 'react';
import { NavLinkItem, Feature } from './types';
import { QuantumShieldIcon } from './components/icons/QuantumShieldIcon';
import { BlockchainIcon } from './components/icons/BlockchainIcon';
import { NetworkIcon } from './components/icons/NetworkIcon';
import { SmartContractIcon }  from './components/icons/SmartContractIcon';

export const APP_NAME = "Bitqar";
export const TOKEN_SYMBOL = "BTQ";

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Documentation", path: "/docs" },
  { name: "Wallet", path: "/wallet" },
  // { name: "Explorer", path: "/#explorer" }, // Example for section link
];

export const FEATURES_DATA: Feature[] = [
  {
    icon: <QuantumShieldIcon className="w-12 h-12 text-pq-accent" />,
    title: "Post-Quantum Security",
    description: "Built from the ground up with NIST-certified post-quantum cryptographic algorithms (e.g., Falcon, Dilithium) to protect against future quantum threats.",
  },
  {
    icon: <BlockchainIcon className="w-12 h-12 text-pq-accent" />,
    title: "Hybrid Quantum-Resistant Consensus",
    description: "A novel consensus mechanism replacing traditional PoS, designed for enhanced security and efficiency in the post-quantum era.",
  },
  {
    icon: <NetworkIcon className="w-12 h-12 text-pq-accent" />,
    title: "Secure P2P Communication",
    description: "Node communication via libp2p is fortified with post-quantum encryption, ensuring data integrity and confidentiality across the network.",
  },
  {
    icon: <SmartContractIcon className="w-12 h-12 text-pq-accent" />,
    title: "Future-Proof Smart Contracts",
    description: "Optional module for post-quantum secure smart contracts (EVM or ink! pallet), enabling decentralized applications resilient to quantum attacks.",
  },
];

export const ABOUT_BITQAR = {
  introduction: `Bitqar is a pioneering blockchain project engineered to address the emergent threat of quantum computing. By integrating state-of-the-art post-quantum cryptography and a novel consensus mechanism, Bitqar aims to provide a secure, scalable, and future-proof platform for decentralized applications and digital assets.`,
  vision: `Our vision is to establish a new standard for blockchain security, ensuring long-term viability and trustworthiness in an era of advancing computational power. Bitqar is designed for enterprises, developers, and users who prioritize an unwavering commitment to data integrity and asset protection.`,
  corePillars: [
    { title: "Quantum Resistance", description: "Proactive defense against quantum attacks through certified cryptographic standards." },
    { title: "Scalability & Performance", description: "Designed for high throughput and low latency without compromising security." },
    { title: "Decentralization", description: "A robust and distributed network architecture ensuring resilience and censorship resistance." },
    { title: "Interoperability", description: "Secure cross-chain communication via post-quantum bridges or IBC integration." }
  ]
};

