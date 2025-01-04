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
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </nav>
    </div>
  );
}
