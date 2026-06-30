import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // Safety net: always finish even if the animationend event never fires
    // (e.g. reduced-motion disables the logo animation).
    const t = window.setTimeout(() => onFinish?.(), 2100);
    return () => window.clearTimeout(t);
  }, [onFinish]);

  return (
    <div className={`loading-screen${animate ? ' animate' : ''}`} aria-hidden="true">
      <div
        className={`logo-mask${animate ? ' animate' : ''}`}
        onAnimationEnd={() => onFinish?.()}
      />
    </div>
  );
};

export default LoadingScreen;
