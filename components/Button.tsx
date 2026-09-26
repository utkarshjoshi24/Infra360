import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'subtle' | 'cobalt-outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  let baseStyles = "font-display uppercase tracking-wider text-xs font-semibold px-7 py-3.5 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer select-none rounded-none";

  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-cobalt hover:bg-cobalt-light text-white shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_32px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 border border-cobalt";
      break;
    case 'outline':
      variantStyles = "bg-transparent text-on-surface border border-outline-variant hover:border-on-surface hover:bg-on-surface hover:text-void hover:-translate-y-0.5";
      break;
    case 'cobalt-outline':
      variantStyles = "bg-transparent text-ice border border-cobalt/50 hover:border-cobalt hover:bg-cobalt/10 hover:-translate-y-0.5";
      break;
    case 'subtle':
      variantStyles = "bg-surface hover:bg-surface-high text-on-surface border border-outline hover:border-outline-variant";
      break;
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={combinedStyles} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
    </button>
  );
};
