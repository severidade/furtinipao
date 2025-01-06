/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Lunch.module.css';
import { LunchDataType } from '../../types/LunchDataType.tsx';

export default function Lunch({ lunchData } : {lunchData: LunchDataType[]}) {
  return (
    <div className={styles.container_lunch}>
      <section className={styles.header_lunch}>
        <h2 className={styles.header_lunch_title}>{lunchData[0].headerLunch.lunchTitle}</h2>
        <figure className={styles.header_lunch_dish_photo}>
          <img src={lunchData[0].headerLunch.figure.image} alt={lunchData[0].headerLunch.figure.altText} />
        </figure>
        <p className={styles.header_lunch_hours}>{ lunchData[0].headerLunch.lunchHours}</p>
      </section>
      <section className={styles.payment_info}>
        <p>
          {' '}
          { lunchData[0].paymentInfo}
        </p>
      </section>
    </div>
  );
}
