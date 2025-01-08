/* eslint-disable react/react-in-jsx-scope */
import styles from './HeroWelcome.module.css';

export default function HeroWelcome() {
  return (
    <div className={styles.hero_welcome}>
      <h1 className={styles.hero_welcome_title}>O pão é de verdade e o café de coração</h1>
      <p className={styles.hero_welcome_subtitle}>
        Arte, alta gastronomia e conforto esperam por você aqui.
      </p>
    </div>
  );
}
