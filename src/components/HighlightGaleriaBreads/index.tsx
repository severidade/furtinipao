/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
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

  // cria um estado para armazenar o carregamento de cada imagem
  const [loadingStates, setLoadingStates] = useState(
    gallerySlider.map(() => true), // Inicializa todas as imagens como "carregando"
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newLoadingStates = [...prev];
      newLoadingStates[index] = false; // Define o índice como carregado
      return newLoadingStates;
    });
  };

  return (
    <div className="slider_breads">
      <Slider {...settings}>
        {gallerySlider.map((i, index) => (
          <div key={i.breadName}>
            <figure className={`slider ${loadingStates[index] ? 'carregando' : ''}`}>
              <img
                src={i.image.url}
                alt={i.image.altText}
                className="bread_highlight_image"
                onLoad={() => handleImageLoad(index)}
              />
            </figure>
            <h3 className="slider_title">{i.breadName}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
