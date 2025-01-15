/* eslint-disable react/react-in-jsx-scope */
import styles from './Heder.module.css';

export default function Header() {
  // Função para lidar com o clique nos links e aplicar o scroll
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 75, // Desloca 75px do topo por conta do nav ser fixo
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.container_header}>
      <div className={styles.nav_header}>
        <a className={styles.logo} href="#hero" onClick={(e) => handleClick(e, 'hero')}>Frutini padaria e confeitaria</a>
        <button type="button">menu hamburger</button>
      </div>
      <div className={styles.container_sidebar}>
        <ul>
          <li><a href="#hero" onClick={(e) => handleClick(e, 'hero')}>Início</a></li>
          <li><a href="#lunch" onClick={(e) => handleClick(e, 'lunch')}>Almoço</a></li>
          <li><a href="#breads" onClick={(e) => handleClick(e, 'breads')}>Fornadas</a></li>
          <li><a href="#address" onClick={(e) => handleClick(e, 'address')}>Localização</a></li>
          <li><a href="#opening-hours" onClick={(e) => handleClick(e, 'opening-hours')}>Horários</a></li>
          <li><a href="#history" onClick={(e) => handleClick(e, 'history')}>História</a></li>
        </ul>
      </div>
    </nav>
  );
}
