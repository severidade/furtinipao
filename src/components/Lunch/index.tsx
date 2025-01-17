/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './Lunch.module.css';
import { LunchDataType } from '../../types/LunchDataType.tsx';

type LunchProps = {
  id: string;
  lunchData: LunchDataType[]
};

export default function Lunch({ id, lunchData } : LunchProps) {
  return (
    <section id={id} className={styles.container_lunch}>
      <div className={styles.container_lunch_card}>
        <section className={styles.header_lunch}>
          <h2 className={styles.header_lunch_title}>{lunchData[0].headerLunch.lunchTitle}</h2>
          <figure className={styles.header_lunch_dish_photo}>
            <img src={lunchData[0].headerLunch.figure.image} alt={lunchData[0].headerLunch.figure.altText} />
          </figure>
          <p className={styles.header_lunch_hours}>{ lunchData[0].headerLunch.lunchSubTitle}</p>
        </section>
        <section className={styles.lunch_footer}>
          <div className={styles.lunch_hours}>
            { lunchData[0].lunchHours}
          </div>
          {/* <div className={styles.payment_info}>
            { lunchData[0].paymentInfo}
          </div> */}
        </section>
      </div>
    </section>
  );
}
