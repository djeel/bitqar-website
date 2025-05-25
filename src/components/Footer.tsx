import React from 'react';
import bitqarLogoPng from '../assets/bitqar-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={bitqarLogoPng} alt="Bitqar Logo" className="h-8 md:h-10 invert brightness-0" /> {/* invert for white logo */}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © Bitqar Foundation. All right reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-4 text-sm md:text-base">
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="fade-link">Home</a>
            <a href="#about" className="fade-link">About</a>
            <a href="#developers" className="fade-link">Developers</a>
            <a href="#wallet" className="fade-link">Wallet</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#status" className="fade-link">Status</a>
            <a href="#blockchain" className="fade-link">Blockchain</a>
            <a href="#contact" className="fade-link">Contact</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#terms" className="fade-link">Terms of service</a>
            <a href="#privacy" className="fade-link">Privacy Policy</a>
            <a href="#cookie" className="fade-link">Cookie Preferences</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#announcements" className="fade-link">Announcements</a>
            <a href="#blog" className="fade-link">Blog</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;