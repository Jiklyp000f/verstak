import React from 'react';
import styles from './UnderlineTitle.module.css';
import underlineImg from '../../assets/underline.png';

interface UnderlineTitleProps {
  children: React.ReactNode;
  className?: string;
}

const UnderlineTitle: React.FC<UnderlineTitleProps> = ({
  children,
  className = '',
}) => {
  return (
    <span className={`${styles.title} ${className}`}>
      {children}
      <span
        className={styles.underline}
        style={{ backgroundImage: `url(${underlineImg})` }}
      />
    </span>
  );
};

export default UnderlineTitle;