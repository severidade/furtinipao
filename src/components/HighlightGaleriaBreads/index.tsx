/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HighlightGaleriaBreads.css';
import { GallerySliderType } from '../../types/GallerySliderType.tsx';

type HighlightGaleriaBreadsProps = {
  gallerySlider: GallerySliderType[];
};

export default function HighlightGaleriaBreads({ gallerySlider }: HighlightGaleriaBreadsProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5, // Exibe 2 e meio
    slidesToScroll: 2,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 100000, // Large breakpoint
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // Medium breakpoint
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider_breads">
      <Slider {...settings}>
        {gallerySlider && gallerySlider.map((i) => (
          <div key={i.breadName}>
            <figure className="slider">
              <img
                src={i.image.url}
                alt={i.image.altText}
                className="bread_highlight_image"
              />
            </figure>
            <h3 className="slider_title">{i.breadName}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
