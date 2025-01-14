/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './HighlightGallery.css';
import { HighlightGalleryType } from '../../types/HighlightGalleryType.tsx';

type HighlightGalleryProps = {
  id: string;
  highlightItems: HighlightGalleryType[];
};

// eslint-disable-next-line max-len
export default function HighlightGallery({ id, highlightItems } : HighlightGalleryProps) {
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
    <section
      id={id}
      className="container_highlight"
    >
      <Slider {...settings}>
        {highlightItems.map((i) => (
          <figure key={i.id} className="slider">
            <img
              src={i.image}
              alt={i.altText}
              className="highlight_image"
            />
          </figure>
        ))}
      </Slider>
    </section>
  );
}
