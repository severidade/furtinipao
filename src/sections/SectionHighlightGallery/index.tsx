/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './SectionHighlightGallery.css';

import { HighlightGalleryType } from '../../types/PageDataType.tsx';

type HighlightGalleryProps = {
  id: string;
  data: HighlightGalleryType[];
};

// eslint-disable-next-line max-len
export default function SectionHighlightGallery({ id, data } : HighlightGalleryProps) {
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
    <section
      id={id}
      className="container_highlight"
    >
      <Slider {...settings}>
        {data[0]?.gallerySlider?.map((item) => (
          <figure key={item._id} className="slider">
            <img
              src={item.url} // Acesso direto à propriedade 'url'
              alt={item.altText || '📷 - Imagem sem descrição'} // Acesso direto à propriedade 'altText'
              className="highlight_image"
            />
          </figure>
        )) || null}
      </Slider>
    </section>
  );
}
