import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  disabled,
  className = '',
  type = 'button',
  ...rest
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    loading ? styles.loading : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.text}>{children}</span>
      {!loading && iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;