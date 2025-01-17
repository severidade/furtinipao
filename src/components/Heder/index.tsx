/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useCallback } from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './Heder.module.css';

export default function Header() {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Function to determine which section is currently in view
  const determineActiveSection = useCallback(() => {
    const sections = [
      'hero',
      'lunch',
      'breads',
      'address',
      'opening-hours',
      'history',
      'events',
    ];

    const sectionElements = sections.map((id) => ({
      id,
      element: document.getElementById(id),
    }));

    const scrollPosition = window.scrollY + 100;

    let currentSection = sections[0];

    sectionElements.forEach(({ id, element }) => {
      if (element) {
        const sectionTop = element.offsetTop - 76;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(determineActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    determineActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [determineActiveSection]);

  // Função para lidar com o clique nos links e aplicar o scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (menuOpen) {
      setMenuOpen(false);
    }

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75, // Desloca 75px do topo por conta do nav ser fixo
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  const handleMenuClick = useCallback(() => {
    toggleMenu();
  }, [toggleMenu]);

  useEffect(() => {
    // Fecha o menu quando a visualização muda para desktop
    if (!isMobile) {
      setMenuOpen(false);
    }

    // Atualiza o overflow do body com base no estado do menu
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    // Cleanup para evitar interferências ao desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, menuOpen]);

  return (
    <nav className={styles.container_header}>
      <div className={styles.nav_header}>
        <a className={styles.logo} href="#hero" onClick={(e) => handleClick(e, 'hero')}>Frutini padaria e confeitaria</a>
        {isMobile && (
          <button
            className={styles.hamburger}
            type="button"
            onClick={handleMenuClick}
          >
            Menu
          </button>
        )}
      </div>

      <div className={`${isMobile ? styles.container_sidebar_mobile : styles.container_sidebar_desktop}`}>
        <ul className={` ${menuOpen ? styles.open : ' '}`}>

          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'lunch' ? styles.active : ''}`}
              href="#lunch"
              onClick={(e) => handleClick(e, 'lunch')}
            >
              Almoço
            </a>
          </li>
          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'breads' ? styles.active : ''}`}
              href="#breads"
              onClick={(e) => handleClick(e, 'breads')}
            >
              Fornadas
            </a>
          </li>
          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'address' ? styles.active : ''}`}
              href="#address"
              onClick={(e) => handleClick(e, 'address')}
            >
              Localização
            </a>
          </li>
          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'opening-hours' ? styles.active : ''}`}
              href="#opening-hours"
              onClick={(e) => handleClick(e, 'opening-hours')}
            >
              Horários
            </a>
          </li>
          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'history' ? styles.active : ''}`}
              href="#history"
              onClick={(e) => handleClick(e, 'history')}
            >
              História
            </a>
          </li>
          <li>
            <a
              className={`${styles.menu_item} ${activeSection === 'events' ? styles.active : ''}`}
              href="#events"
              onClick={(e) => handleClick(e, 'events')}
            >
              Eventos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
