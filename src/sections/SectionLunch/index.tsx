/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */

import { useFetchLunchData } from '../../CustomHooks/useFetchLunchData.tsx';
import styles from './Lunch.module.css';

function Figure({ figure }: { figure?: { url: string; altText?: string } }) {
  if (!figure?.url) return null; // Se não houver `url`, retorna `null`

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
  const { lunchData, isLoading, error } = useFetchLunchData(id);

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

  console.log(header);

  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        {header && <Header header={header} />}
        {content && <Content content={content} />}
      </div>
    </section>
  );
}
