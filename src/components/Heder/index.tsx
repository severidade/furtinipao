/* eslint-disable react/react-in-jsx-scope */
import styles from './Heder.module.css';

export default function Heder() {
  return (
    <div
      className={styles.container_header}
    >
      <h1
        className={`${styles.logo_frutini}`}
      >
        Frutini padaria e confeitaria
      </h1>
      <nav className={styles.nav_frutini}>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#highlights">Destaques</a></li>
          <li><a href="#lunch">Almoço</a></li>
          <li><a href="#breads">Pães</a></li>
          <li><a href="#address">Endereço</a></li>
          <li><a href="#opening-hours">Horários</a></li>
          <li><a href="#history">História</a></li>
        </ul>
      </nav>
    </div>
  );
}
