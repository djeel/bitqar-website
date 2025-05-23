import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'transition font-skmodernist rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-pq-accent text-pq-text-primary hover:bg-pq-accent-dark',
    secondary: 'bg-pq-secondary text-pq-accent hover:bg-pq-accent-dark',
    outline: 'border border-pq-accent text-pq-accent bg-transparent hover:bg-pq-accent hover:text-pq-text-primary',
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={classNames(
        baseStyles,
        variants[variant],
        sizeStyles[size],
        className
      )}
      style={{ boxShadow: variant === 'primary' ? '0 2px 8px rgba(29, 233, 182, 0.15)' : undefined }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
