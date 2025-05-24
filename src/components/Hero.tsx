import React from 'react';  

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-transparent overflow-hidden px-4 sm:px-6 lg:px-8"
      // Based on hero.jpg, it's a subtle gradient rather than a direct image background.
      // If the image itself is a gradient, this is better.
      // If it's a more complex graphic, consider it as an actual background image.
      // For now, I'll use a gradient that mimics the provided image.
    >


      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="text-[#78dbc4]">Bitqar:</span> <span className="text-bitqar-text-dark">future of</span> <br className="hidden md:block"/> <span className="text-bitqar-text-dark">quantum blockchain</span>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-[30px] justify-center items-center">
          <a href="#features" aria-label="Learn more">
            <div
              className="border border-white border-[0.5px] rounded-[30px] overflow-hidden flex items-center justify-center bg-white/30 backdrop-blur-[10px] w-[300px] h-[60px] transition-colors duration-350 ease-[cubic-bezier(.22,1,.36,1)] group hover:bg-white"
              style={{ cursor: 'pointer', transition: 'background 0.35s cubic-bezier(.22,1,.36,1)' }}
            >
              <span className="text-[#78dbc4] font-bold text-xl transition-colors duration-350 group-hover:text-[#407569]" style={{fontFamily:'Sk-Modernist'}}>Learn more</span>
            </div>
          </a>
          <a href="#wallet" aria-label="Connect Wallet">
            <div
              className="border border-white border-[0.5px] rounded-[30px] overflow-hidden flex items-center justify-center w-[320px] h-[60px] transition-colors duration-350 ease-[cubic-bezier(.22,1,.36,1)] group"
              style={{ background: 'rgba(64,128,110,0.3)', backdropFilter: 'blur(10px)', cursor: 'pointer', position: 'relative', transition: 'background 0.35s cubic-bezier(.22,1,.36,1)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(120,219,196,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(64,128,110,0.3)'; }}
              onClick={e => {
                // Effet ripple simple
                const target = e.currentTarget;
                const circle = document.createElement('span');
                const diameter = Math.max(target.clientWidth, target.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${e.nativeEvent.offsetX - radius}px`;
                circle.style.top = `${e.nativeEvent.offsetY - radius}px`;
                circle.style.position = 'absolute';
                circle.style.background = 'rgba(120,219,196,0.35)';
                circle.style.borderRadius = '50%';
                circle.style.transform = 'scale(0)';
                circle.style.opacity = '0.65';
                circle.style.pointerEvents = 'none';
                circle.style.transition = 'transform 0.45s cubic-bezier(.22,1,.36,1), opacity 0.6s';
                circle.className = 'ripple-effect';
                target.appendChild(circle);
                setTimeout(() => {
                  circle.style.transform = 'scale(1)';
                  circle.style.opacity = '0';
                }, 10);
                setTimeout(() => {
                  if (target.contains(circle)) target.removeChild(circle);
                }, 600);
              }}
            >
              <span className="text-white font-bold text-xl transition-colors duration-350 group-hover:text-[#407569]" style={{fontFamily:'Sk-Modernist', zIndex: 1, position: 'relative'}}>Connect Wallet</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;