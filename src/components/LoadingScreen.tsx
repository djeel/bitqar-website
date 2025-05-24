import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAnimationEnd = () => {
    if (onFinish) onFinish();
  };

  return (
    <div className={`loading-screen${animate ? ' animate' : ''}`}>
      <div
        className={`logo-mask${animate ? ' animate' : ''}`}
        aria-label="Bitqar Logo"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
};

export default LoadingScreen;
