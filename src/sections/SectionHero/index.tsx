/* eslint-disable react/react-in-jsx-scope */
import HeroImage from '../../components/HeroImage/index.tsx';
import styles from './SectionHero.module.css';
import useFetchSectionHeroWelcome from '../../CustomHooks/useFetchHeroWelcome.tsx';

export default function SectionHeroWelcome({ id }: { id: string }) {
  const { heroWelcomeData, isLoading, error } = useFetchSectionHeroWelcome(id);

  if (isLoading) return <div>Carregando...</div>;

  if (error) {
    return (
      <div>
        Erro ao carregar:
        {error.message}
      </div>
    );
  }

  const {
    title,
    subtitle,
    backgroundImage,
  } = heroWelcomeData[0];

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
