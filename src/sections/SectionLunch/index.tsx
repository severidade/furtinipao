/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Lunch.module.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';

type LunchProps = {
  id: string;
  dataSection: SectionTemplateType[];
};

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
      <p className={styles.header_lunch_hours}>{header.subtitle}</p>
    </section>
  );
}

function Content({ content }: { content: string }) {
  return (
    <section className={styles.lunch_footer}>
      <div className={styles.lunch_hours}>
        {content}
      </div>
    </section>
  );
}

export default function Lunch({ id, dataSection }: LunchProps) {
  if (!dataSection.length) return null;

  const { header, content } = dataSection[0];

  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        {header && <Header header={header} />}
        {content && <Content content={content} />}
      </div>
    </section>
  );
}
