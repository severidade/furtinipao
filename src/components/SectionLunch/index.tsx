/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Lunch.module.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';

type LunchProps = {
  id: string;
  dataSection: SectionTemplateType[]
};

export default function Lunch({ id, dataSection } : LunchProps) {
  if (!dataSection.length) return null;

  const { header, content } = dataSection[0];

  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        <section className={styles.header_lunch}>
          <h2 className={styles.header_lunch_title}>{header.title}</h2>
          <figure className={styles.header_lunch_dish_photo}>
            <img src={header.figure?.url} alt={header.figure?.altText} />
          </figure>
          <p className={styles.header_lunch_hours}>{ header.subtitle}</p>
        </section>
        <section className={styles.lunch_footer}>
          <div className={styles.lunch_hours}>
            { content}
          </div>
        </section>
      </div>
    </section>
  );
}
