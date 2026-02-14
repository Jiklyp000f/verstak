import React from 'react';
import UnderlineTitle from '../UnderlineTitle/UnderlineTitle';
import styles from './GallerySection.module.css';

interface ImageCard {
  type: 'image';
  src: string;
  alt: string;
}

interface SpecialCard {
  type: 'special';
  label: string;      // например "10+"
  button: React.ReactNode;
}

type Card = ImageCard | SpecialCard;

interface GallerySectionProps {
  title: React.ReactNode;
  text: React.ReactNode;
  cards: Card[];               
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title,
  text,
  cards,
  className = '',
}) => {
  if (cards.length !== 6) {
    console.warn('GallerySection ожидает ровно 6 карточек');
  }

  return (
    <section className={`${styles.section} ${className}`}>
      <UnderlineTitle className={styles.title}>{title}</UnderlineTitle>
      <div className={styles.text}>{text}</div>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card.type === 'image' ? (
              <img src={card.src} alt={card.alt} className={styles.image} />
            ) : (
              <div className={styles.specialCard}>
                <div className={styles.specialLabel}>{card.label}</div>
                <div className={styles.specialButton}>{card.button}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;