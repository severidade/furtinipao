/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Lunch.module.css';

export default function Lunch() {
  return (
    <div className={styles.container_lunch}>
      <section className={styles.header_lunch}>
        <h2 className={styles.header_lunch_title}>Almoço executivo</h2>
        <figure className={styles.header_lunch_dish_photo}>
          <img src="/path/to/photo.jpg" alt="Foto do prato executivo" />
          {/* <figcaption>Prato do dia: descrição breve do prato</figcaption> */}
        </figure>
        <p className={styles.header_lunch_hours}>Terça a Sexta de 10 às 14h30</p>
      </section>
      <section className={styles.payment_info}>
        <p>Aceitamos todos os cartões de refeição das bandeiras Visa e Mastercard além de Alelo, Pluxee (Sodexo) e VR.</p>
      </section>
    </div>
  );
}
