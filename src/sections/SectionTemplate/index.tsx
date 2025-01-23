/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import parse from 'html-react-parser';
import styles from './SectionTemplate.module.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';

type SectionTemplateProps = {
  id: string;
  dataSection: SectionTemplateType[];
}

function Figure({ figure }: { figure: { url: string, altText?: string } }) {
  const altText = figure.altText || 'Imagem destacada'; // Como não é obrigatório coloco um texto
  return (
    <figure className={styles.container_img}>
      <img
        src={figure.url}
        alt={altText}
        loading="lazy"
        className="highlight_image"
      />
    </figure>
  );
}

function Header({ header }: { header: { title: string; subtitle?: string } }) {
  return (
    <section className={styles.header}>
      <h2 className={styles.header_title}>{header.title}</h2>
      {header.subtitle && <h3 className={styles.header_subtitle}>{header.subtitle}</h3>}
    </section>
  );
}

function Content({ content }: { content: string }) {
  return (
    <section className={styles.container_content}>
      <div className={styles.content}>
        {parse(content)}
      </div>
    </section>
  );
}

export default function SectionTemplate({ id, dataSection }: SectionTemplateProps) {
  if (!dataSection.length) return null; // evita renderização caso seja vazio

  const {
    header,
    figure,
    content,
    callToActionBt,
  } = dataSection[0];

  return (
    <section id={id} className={styles.container}>
      {figure && <Figure figure={figure} />}
      {header && <Header header={header} />}
      {content && <Content content={content} />}
      {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
    </section>
  );
}
