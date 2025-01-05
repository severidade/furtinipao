/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './HighlightGallery.module.css';
import { HighlightGalleryType } from '../../types/HighlightGalleryType.tsx';

// eslint-disable-next-line max-len
export default function HighlightGallery({ highlightItems } : {highlightItems: HighlightGalleryType[]}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5, // Exibe 2 e meio
    slidesToScroll: 2,
    arrows: false,
    centerMode: false,
  };

  return (
    <div
      className={styles.container_highlight}
    >
      <Slider {...settings}>
        {highlightItems.map((i) => (
          <figure key={i.id} className={styles.slider}>
            <img
              src={i.image}
              alt={i.altText}
              className={styles.highlight_image}
            />
          </figure>
        ))}
      </Slider>
    </div>
  );
}
