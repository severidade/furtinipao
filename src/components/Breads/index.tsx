/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import BreadOrderButton from '../BreadOrderButton/index.tsx';
import styles from './Breads.module.css';
import { BreadsGalleryDataType } from '../../types/BreadsGalleryDataType.tsx';

export default function Breads({ DataSlider } : {DataSlider: BreadsGalleryDataType[]}) {
  return (
    <div className={styles.container_breads}>
      <section className={styles.header_breads}>
        <h2 className={styles.header_breads_title}>Fornadas</h2>
        <p className={styles.header_breads_subtitle}>Pães Integrais lindos, elegantes e sinceros</p>
      </section>
      <section className={styles.slider_breads}>
        <p>{ DataSlider[1].breadName }</p>
      </section>
      <section className={styles.info_breads}>
        <p>Acompanhe nossa página no instagram e saiba quais são os pães da semana</p>
      </section>
      <BreadOrderButton />
    </div>
  );
}
