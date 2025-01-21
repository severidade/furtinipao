/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Breads.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import ButtonTemplate from '../ButtonTemplate/index.tsx';
import HighlightGaleriaBreads from '../HighlightGaleriaBreads/index.tsx';

type BreadsProps = {
  id: string;
  DataSection: SectionTemplateType[];
};

export default function Breads({ id, DataSection } : BreadsProps) {
  const [{
    header: { title, subtitle }, content, callToActionBt, gallerySlider,
  }] = DataSection;

  return (
    <section id={id} className="container_breads">
      <div className="header_breads">
        <h2 className="header_breads_title">{ title }</h2>
        <p className="header_breads_subtitle">{ subtitle }</p>
      </div>

      {gallerySlider && <HighlightGaleriaBreads gallerySlider={gallerySlider} />}

      <div className="info_breads">
        { content }
      </div>

      {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
    </section>
  );
}
