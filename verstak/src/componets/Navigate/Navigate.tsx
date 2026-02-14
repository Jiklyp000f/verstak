import React, { useState } from 'react';
import styles from './Navigation.module.css';

type LogoType = 
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt: string; height?: number | string };

interface LinkItem {
  label: string;
  url: string;
}

interface NavigationProps {
  logo: LogoType;
  links: LinkItem[];
  logoHref?: string;          
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  logo, 
  links, 
  logoHref = "/", 
  className 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const renderLogo = () => {
    if (logo.type === 'text') {
      return <span className={styles.logoText}>{logo.text}</span>;
    } else {
      return (
        <img
          src={logo.src}
          alt={logo.alt}
          className={styles.logoImage}
          style={{ height: logo.height }}
        />
      );
    }
  };

  return (
    <header className={`${styles.header} ${className || ''}`}>
      <div className={styles.container}>
        <a href={logoHref} className={styles.logoLink}>
          {renderLogo()}
        </a>

        <div className={styles.navWrapper}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              {links.map((link, index) => (
                <li key={index} className={styles.navItem}>
                  <a href={link.url} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;