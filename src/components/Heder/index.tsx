/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useCallback } from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './Heder.module.css';

export default function Header() {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);

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
          {/* <li><a href="#hero" onClick={(e) => handleClick(e, 'hero')}>Início</a></li> */}
          <li><a className={styles.menu_item} href="#lunch" onClick={(e) => handleClick(e, 'lunch')}>Almoço</a></li>
          <li><a className={styles.menu_item} href="#breads" onClick={(e) => handleClick(e, 'breads')}>Fornadas</a></li>
          <li><a className={styles.menu_item} href="#address" onClick={(e) => handleClick(e, 'address')}>Localização</a></li>
          <li><a className={styles.menu_item} href="#opening-hours" onClick={(e) => handleClick(e, 'opening-hours')}>Horários</a></li>
          <li><a className={styles.menu_item} href="#history" onClick={(e) => handleClick(e, 'history')}>História</a></li>
          <li><a className={styles.menu_item} href="#events" onClick={(e) => handleClick(e, 'events')}>Eventos</a></li>
        </ul>
      </div>
    </nav>
  );
}
