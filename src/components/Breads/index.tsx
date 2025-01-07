/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import BreadOrderButton from '../BreadOrderButton/index.tsx';
import styles from './Breads.module.css';
import { BreadsGalleryDataType } from '../../types/BreadsGalleryDataType.tsx';
import { BreadsSectionDataType } from '../../types/BreadsSectionDataType.tsx';

type BreadsProps = {
  DataSlider: BreadsGalleryDataType[];
  DataSection: BreadsSectionDataType[];
};

export default function Breads({ DataSlider, DataSection } : BreadsProps) {
  return (
    <div className={styles.container_breads}>
      <section className={styles.header_breads}>
        <h2 className={styles.header_breads_title}>{ DataSection[0].headerBreads.breadsTitle }</h2>
        <p className={styles.header_breads_subtitle}>{ DataSection[0].headerBreads.breadsSubtitle }</p>
      </section>
      <section className={styles.slider_breads}>
        <p>{ DataSlider[1].breadName }</p>
      </section>
      <section className={styles.info_breads}>
        <p>{ DataSection[0].infoBreads }</p>
      </section>
      <BreadOrderButton />
    </div>
  );
}
