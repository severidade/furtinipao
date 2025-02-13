/* eslint-disable react/react-in-jsx-scope */

import parse from 'html-react-parser';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionBreads.css';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';
import HighlightGaleriaBreads from '../../components/HighlightGaleriaBreads/index.tsx';
import { BreadsType } from '../../types/PageDataType.tsx';

interface SectionBreadsProps {
  id: string;
  data: BreadsType[];
}

function Header({ header }: { header: { title: string; subtitle?: string } }) {
  return (
    <section className="header_breads">
      <h2 className="header_breads_title">{header.title}</h2>
      {header.subtitle && <p className="header_breads_subtitle">{header.subtitle}</p>}
    </section>
  );
}

function Content({ content }: { content: string }) {
  return (
    <section className="container_content">
      <p>{parse(content)}</p>
    </section>
  );
}

export default function SectionBreads({ id, data }: SectionBreadsProps) {
  const {
    header,
    content,
    callToActionBt,
    gallerySlider,
  } = data[0];

  return (
    <section id={id} className="container_breads">
      <Header header={header} />
      {gallerySlider && <HighlightGaleriaBreads gallerySlider={gallerySlider} />}
      {content && <Content content={content} />}
      {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
    </section>
  );
}
