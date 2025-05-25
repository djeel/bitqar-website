import React from 'react';

interface HeaderMenuMobileProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#developers', label: 'Developers' },
  { href: '#wallet', label: 'Wallet' },
];

const HeaderMenuMobile: React.FC<HeaderMenuMobileProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-white/90 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!open}
      onClick={onClose}
    >
      <nav
        className="absolute top-0 right-0 h-full w-72 max-w-[90vw] bg-white rounded-l-2xl shadow-xl border-l border-gray-200 flex flex-col items-start p-8 gap-6 text-left"
        style={{ boxShadow: '0 6px 32px rgba(120,219,196,0.08)' }}
        onClick={e => e.stopPropagation()}
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-bitqar-text-dark text-2xl font-semibold py-2 rounded hover:text-[#407569] transition-colors duration-200 w-full"
            onClick={onClose}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMenuMobile;
