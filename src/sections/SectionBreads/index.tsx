/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import parse from 'html-react-parser';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SectionBreads.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';
import HighlightGaleriaBreads from '../../components/HighlightGaleriaBreads/index.tsx';

type BreadsProps = {
  id: string;
  dataSection: SectionTemplateType[];
};

function Header({ header }: { header: { title: string; subtitle?: string } }) {
  return (
    <section className="header_breads">
      <h2 className="header_breads_title">{header.title}</h2>
      {header.subtitle && <p>{header.subtitle}</p>}
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

export default function SectionBreads({ id, dataSection }: BreadsProps) {
  const {
    header,
    content,
    callToActionBt,
    gallerySlider,
  } = dataSection[0];

  return (
    <section id={id} className="container_breads">

      <Header header={header} />

      {gallerySlider && <HighlightGaleriaBreads gallerySlider={gallerySlider} />}

      {content && <Content content={content} />}

      {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
    </section>
  );
}
