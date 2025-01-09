/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './HighlightGalleryAddress.css';
import { HighlightGalleryType } from '../../types/HighlightGalleryType.tsx';

// eslint-disable-next-line max-len
export default function HighlightGalleryAddress({ highlightItems } : {highlightItems: HighlightGalleryType[]}) {
  const settings = {
    dots: false,
    infinite: true, // Loop infinito para um carrossel contínuo
    speed: 1000, // Velocidade da transição em milissegundos
    slidesToShow: 1, // Mostra uma imagem por vez
    slidesToScroll: 1,
    arrows: false, // Remove as setas de navegação
    autoplay: true, // Ativa a troca automática de imagens
    autoplaySpeed: 3000, // Tempo entre cada troca (em milissegundos)
    fade: true, // Transição suave entre as imagens
  };

  return (
    <div
      className="container_highlight2"
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
    </div>
  );
}
