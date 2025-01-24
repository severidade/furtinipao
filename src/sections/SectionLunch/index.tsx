/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
// import { useEffect, useState } from 'react';
// import { client } from '../../sanityClient.tsx'; // Ajuste o caminho conforme sua configuração
import { useFetchLunchData } from '../../CustomHooks/useFetchLunchData.tsx';
import styles from './Lunch.module.css';
// import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';

function Figure({ figure = undefined }: { figure?: { url: string; altText?: string } }) {
  if (!figure) return null;

  return (
    <figure className={styles.header_lunch_dish_photo}>
      <img
        src={figure.url}
        alt={figure.altText || 'Imagem ilustrativa'}
        loading="lazy"
      />
    </figure>
  );
}

function Header({ header }: { header: { title: string; subtitle?: string; figure?: { url: string; altText?: string } } }) {
  return (
    <section className={styles.header_lunch}>
      <h2 className={styles.header_lunch_title}>{header.title}</h2>
      {header.figure && <Figure figure={header.figure} />}
      <h3 className={styles.header_lunch_hours}>{header.subtitle}</h3>
    </section>
  );
}

function Content({ content }: { content: string }) {
  return (
    <section className={styles.lunch_footer}>
      <p>{content}</p>
    </section>
  );
}

export default function Lunch({ id }: { id: string }) {
  // const [lunchData, setLunchData] = useState<SectionTemplateType[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  const { lunchData, isLoading, error } = useFetchLunchData();

  if (isLoading) return <div>Carregando...</div>;
  if (error) {
    return (
      <div>
        Erro ao carregar:
        {error.message}
      </div>
    );
  }
  if (!lunchData.length) return null;

  const { header, content } = lunchData[0];

  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        {header && <Header header={header} />}
        {content && <Content content={content} />}
      </div>
    </section>
  );
}
