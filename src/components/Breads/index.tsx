/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import Slider from 'react-slick';
import BreadOrderButton from '../BreadOrderButton/index.tsx';
// import styles from './Breads.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Breads.css';
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
    <div className="container_breads">
      <section className="header_breads">
        <h2 className="header_breads_title">{ DataSection[0].headerBreads.breadsTitle }</h2>
        <p className="header_breads_subtitle">{ DataSection[0].headerBreads.breadsSubtitle }</p>
      </section>
      <section className="slider_breads">
        <Slider {...settings}>
          {DataSlider.map((i) => (
            <div key={i.id}>
              <figure className="slider">
                <img
                  src={i.image}
                  alt={i.altText}
                  className="bread_highlight_image"
                />
              </figure>
              <h3 className="slider_title">{i.breadName}</h3>
            </div>
          ))}
        </Slider>

      </section>
      <section className="info_breads">
        <p>{ DataSection[0].infoBreads }</p>
      </section>
      <BreadOrderButton />
    </div>
  );
}
