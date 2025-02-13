/* eslint-disable react/react-in-jsx-scope */
import HeroImage from '../../components/HeroImage/index.tsx';
import styles from './SectionHero.module.css';
import { SectionHeroWelcomeType } from '../../types/PageDataType.tsx';
// import useFetchSectionHeroWelcome from '../../CustomHooks/useFetchHeroWelcome.tsx';

interface SectionHeroWelcomeProps {
  id: string;
  data: SectionHeroWelcomeType[];
}

export default function SectionHeroWelcome({ id, data }: SectionHeroWelcomeProps) {
  const {
    title,
    subtitle,
    backgroundImage,
  } = data[0];

  return (
    <section id={id} className={styles.container_hero}>
      <HeroImage backgroundImage={backgroundImage} />
      <div className={styles.hero_welcome}>
        <h1 className={styles.hero_welcome_title}>
          {title}
        </h1>
        <p className={styles.hero_welcome_subtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
