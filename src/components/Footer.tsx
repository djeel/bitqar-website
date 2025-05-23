import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <img src="/bitqar-logo.png" alt="Bitqar Logo" className="h-8 md:h-10 invert brightness-0" /> {/* invert for white logo */}
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © Bitqar Foundation. All right reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-4 text-sm md:text-base">
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="hover:text-bitqar-green transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-bitqar-green transition-colors duration-200">About</a>
            <a href="#developers" className="hover:text-bitqar-green transition-colors duration-200">Developers</a>
            <a href="#wallet" className="hover:text-bitqar-green transition-colors duration-200">Wallet</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#status" className="hover:text-bitqar-green transition-colors duration-200">Status</a>
            <a href="#blockchain" className="hover:text-bitqar-green transition-colors duration-200">Blockchain</a>
            <a href="#contact" className="hover:text-bitqar-green transition-colors duration-200">Contact</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#terms" className="hover:text-bitqar-green transition-colors duration-200">Terms of service</a>
            <a href="#privacy" className="hover:text-bitqar-green transition-colors duration-200">Privacy Policy</a>
            <a href="#cookie" className="hover:text-bitqar-green transition-colors duration-200">Cookie Preferences</a>
          </nav>
          <nav className="flex flex-col space-y-2">
            <a href="#announcements" className="hover:text-bitqar-green transition-colors duration-200">Announcements</a>
            <a href="#blog" className="hover:text-bitqar-green transition-colors duration-200">Blog</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;