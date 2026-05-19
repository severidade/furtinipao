/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionTemplate.module.css';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';
import { SectionTemplateType, Figure as FigureType, Header as HeaderType } from '../../types/PageDataType.tsx';

type SectionTemplateProps = {
  id: string;
  data: SectionTemplateType[]
};

function Figure({ figure }: { figure: FigureType}) {
  const altText = figure.altText || 'Imagem destacada';
  return (
    <figure className={styles.container_img}>
      <img
        src={figure.url ?? undefined}
        alt={altText || '📷 - Imagem sem descrição'}
        loading="lazy"
        className="highlight_image"
      />
    </figure>
  );
}

function Header({ header }: { header: HeaderType }) {
  return (
    <section className={styles.header}>
      <h2 className={styles.header_title}>{header.title}</h2>
      {header.subtitle && <h3 className={styles.header_subtitle}>{header.subtitle}</h3>}
    </section>
  );
}

function Content({ content }: { content: string }) {
  if (!content) return null;

  return (
    <section className={styles.container_content}>
      <p className={styles.content}>
        {content}
      </p>
    </section>
  );
}

export default function SectionTemplate({ id, data }: SectionTemplateProps) {
  const {
    header, figure, content, callToActionBt,
  } = data[0];

  return (
    <section id={id} className={styles.container}>
      {figure && <Figure figure={figure} />}
      {header && <Header header={header} />}
      {content && <Content content={content} />}
      {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
    </section>
  );
}
