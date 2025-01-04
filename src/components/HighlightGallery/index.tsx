/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './HighlightGallery.module.css';

export default function HighlightGallery() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5, // Exibe 1 e meio slide em telas pequenas
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768, // Ajustes para telas maiores que 768px
        settings: {
          slidesToShow: 2.5, // Exibe 2 e meio slides para telas médias
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className={styles.container_highlight}
    >
      <Slider {...settings}>
        <div className={styles.slider}>
          <h3>Slide 1</h3>
        </div>
        <div className={styles.slider}>
          <h3>Slide 2</h3>
        </div>
        <div className={styles.slider}>
          <h3>Slide 3</h3>
        </div>
        <div className={styles.slider}>
          <h3>Slide 4</h3>
        </div>
        <div className={styles.slider}>
          <h3>Slide 5</h3>
        </div>
        <div className={styles.slider}>
          <h3>Slide 6</h3>
        </div>
      </Slider>
    </div>
  );
}
