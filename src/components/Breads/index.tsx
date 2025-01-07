/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import BreadOrderButton from '../BreadOrderButton/index.tsx';
import styles from './Breads.module.css';
import { BreadsGalleryDataType } from '../../types/BreadsGalleryDataType.tsx';
import { BreadsSectionDataType } from '../../types/BreadsSectionDataType.tsx';

type BreadsProps = {
  DataSlider: BreadsGalleryDataType[];
  DataSection: BreadsSectionDataType[];
};

export default function Breads({ DataSlider, DataSection } : BreadsProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5, // Exibe 2 e meio
    slidesToScroll: 2,
    arrows: false,
    centerMode: false,
  };

  return (
    <div className={styles.container_breads}>
      <section className={styles.header_breads}>
        <h2 className={styles.header_breads_title}>{ DataSection[0].headerBreads.breadsTitle }</h2>
        <p className={styles.header_breads_subtitle}>{ DataSection[0].headerBreads.breadsSubtitle }</p>
      </section>
      <section className={styles.slider_breads}>
        <Slider {...settings}>
          {DataSlider.map((i) => (
            <>
              <figure key={i.id} className={styles.slider}>
                <img
                  src={i.image}
                  alt={i.altText}
                  className={styles.highlight_image}
                />
              </figure>
              <h3 className={styles.slider_title}>{i.breadName}</h3>
            </>
          ))}
        </Slider>
        {/* <p>{ DataSlider[1].breadName }</p> */}
      </section>
      <section className={styles.info_breads}>
        <p>{ DataSection[0].infoBreads }</p>
      </section>
      <BreadOrderButton />
    </div>
  );
}
