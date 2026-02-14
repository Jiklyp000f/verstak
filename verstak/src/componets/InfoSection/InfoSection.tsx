import React from 'react';
import UnderlineTitle from '../UnderlineTitle/UnderlineTitle';
import styles from './InfoSection.module.css';

interface InfoSectionProps {
  title: React.ReactNode;          
  text: React.ReactNode;           
  button: React.ReactNode;         
  smallText: React.ReactNode;       
  className?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  text,
  button,
  smallText,
  className = '',
}) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <UnderlineTitle className={styles.title}>{title}</UnderlineTitle>
      <div className={styles.text}>{text}</div>
      <div className={styles.action}>
        <div className={styles.buttonWrapper}>{button}</div>
        <div className={styles.smallText}>{smallText}</div>
      </div>
    </section>
  );
};

export default InfoSection;