/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionAddress.module.css';
import CallUber from '../CallUber/index.tsx';

export default function SectionAddress() {
  return (
    <div className={styles.container_address}>
      <section className={styles.header_address}>
        <h2 className={styles.header_address_title}>Nova Casa</h2>
        <address className={styles.address_details}>
          g
        </address>
      </section>
      <section className="accessibility-info">
        <div className={styles.accessibility}>todos.</div>
        <div className={styles.pet_friendly}>fdfdf</div>
      </section>
      <CallUber />
    </div>
  );
}
