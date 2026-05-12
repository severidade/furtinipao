/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './Heder.module.css';

export default function Header() {
  const { isMobile } = useDeviceInfo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Para atualizar menu basta alterar esse Array
  const sections = useMemo(
    () => [
      { id: 'sectionHeroWelcome', label: 'Home' },
      { id: 'lunch', label: 'Cafeteria' },
      { id: 'breads', label: 'Fornadas' },
      { id: 'sectionAddress', label: 'Nossa Casa' },
      { id: 'openingHours', label: 'Funcionamento' },
      { id: 'history', label: 'História' },
      { id: 'events', label: 'Oficinas' },
    ],
    [],
  );

  const determineActiveSection = useCallback(() => {
    const sectionElements = sections.map(({ id }) => ({
      id,
      element: document.getElementById(id),
    }));

    const scrollPosition = window.scrollY + 100;
    let currentSection = sections[0].id;

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
  }, [sections]);

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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ): void => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (menuOpen) {
      setMenuOpen(false);
    }

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }

    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, menuOpen]);

  return (
    <nav className={styles.container_header}>
      <div className={styles.nav_header}>
        <a
          className={styles.logo}
          href="#sectionHeroWelcome"
          onClick={(e) => handleClick(e, 'sectionHeroWelcome')}
        >
          Frutini padaria e confeitaria
        </a>
        {isMobile && (
          <button
            className={styles.hamburger}
            type="button"
            onClick={toggleMenu}
          >
            Menu
          </button>
        )}
      </div>

      <div
        className={`${isMobile ? styles.container_sidebar_mobile : styles.container_sidebar_desktop}`}
      >
        <div className={`${menuOpen ? styles.open : ''}`}>
          {isMobile && (
            <button
              className={styles.close_menu}
              type="button"
              onClick={toggleMenu}
            >
              Fechar
            </button>
          )}
          <ul className={styles.container_menu_itens}>
            {sections.slice(1).map(({ id, label }) => (
              <li key={id}>
                <a
                  className={`${styles.menu_item} ${activeSection === id ? styles.active : ''}`}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
