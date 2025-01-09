/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import VideoBg from '../VideoBg/index.tsx';
import styles from './OpeningHours.module.css';

export default function OpeningHours() {
  return (
    <div className={styles.container_opening_hours}>
      <VideoBg />
      <div className={styles.opening_hours_card}>
        <h2 className={styles.opening_hours_title}>Horário de funcionamento</h2>
        <p> horario de funcionamento aqui </p>
      </div>
    </div>
  );
}
