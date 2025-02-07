/* eslint-disable react/react-in-jsx-scope */
import HeroImage from '../../components/HeroImage/index.tsx';
import styles from './SectionHero.module.css';

export default function SectionHeroWelcome({ id }: { id: string }) {
  return (
    <section id={id} className={styles.container_hero}>
      <HeroImage />
      <div className={styles.hero_welcome}>
        <h1 className={styles.hero_welcome_title}>O pão é de verdade e o café de coração</h1>
        <p className={styles.hero_welcome_subtitle}>
          Arte, gastronomia e conforto esperam por você aqui.
        </p>
      </div>
    </section>
  );
}
