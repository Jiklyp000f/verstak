import React from 'react';
import Button from '../Button/Button';
import styles from './ContentSection.module.css';

interface CardData {
  big: string;
  small: string;
  bigColor?: string;
}

interface ButtonData {
  label: string;
  selected?: boolean;
}

interface ContentSectionProps {
  leftTopText: React.ReactNode;
  leftButton: React.ReactNode;
  leftEmail: React.ReactNode;
  leftLogos: string[];
  backgroundImage: string;
  cards: CardData[];
  buttons: ButtonData[];
  onButtonClick?: (index: number) => void;
  bottomBigText: string;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  leftTopText,
  leftButton,
  leftEmail,
  leftLogos,
  backgroundImage,
  cards,
  buttons,
  onButtonClick,
  bottomBigText,
  className,
}) => {
  return (
    <section className={`${styles.section} ${className || ''}`}>
      <div className={styles.container}>
        {/* Левая колонка */}
        <div className={styles.leftColumn}>
          <div className={styles.leftTop}>
            <div className={styles.topText}>{leftTopText}</div>
            <div className={styles.topButton}>{leftButton}</div>
          </div>
          <div className={styles.leftBottom}>
            <div className={styles.email}>{leftEmail}</div>
            <div className={styles.logos}>
              {leftLogos.map((src, index) => (
                <img key={index} src={src} alt={`Логотип ${index + 1}`} className={styles.logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Вертикальная пунктирная линия */}
        <div className={styles.verticalDash}></div>

        {/* Правая колонка с фоном */}
        <div
          className={styles.rightColumn}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.rightContent}>
            {/* Блок 1: карточки 2x2 */}
            <div className={styles.cardsGrid}>
              {cards.map((card, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardBig} style={{ color: card.bigColor || '#000' }}>
                    {card.big}
                  </div>
                  <div className={styles.cardSmall}>{card.small}</div>
                </div>
              ))}
            </div>

            {/* Блок 2: кнопки (используем Button) */}
            <div className={styles.buttonsGroup}>
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.selected ? 'primary' : 'outline'}
                  onClick={() => onButtonClick?.(idx)}
                  disabled={!onButtonClick}
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            {/* Блок 3: большая надпись */}
            <div className={styles.bottomBigText}>{bottomBigText}</div>
          </div>
        </div>
      </div>

      {/* Горизонтальная пунктирная линия снизу */}
      <div className={styles.horizontalDash}></div>
    </section>
  );
};

export default ContentSection;