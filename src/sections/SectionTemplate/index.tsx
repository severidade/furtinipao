/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionTemplate.module.css';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';

type SectionTemplateProps = {
  id: string;
  data: {
    figure: {
      url: string | null;
      altText: string | null;
    };
    header: {
      title: string;
      subtitle?: string | null;
      figure?: {
        url: string | null;
        altText: string | null;
      };
    };
    content: string;
    callToActionBt?: {
      model?: string;
      buttonTitle: string;
      phoneNumber: string;
      message: string;
    };
  };
};

function Figure({ figure }: { figure: { url: string, altText?: string } }) {
  const altText = figure.altText || 'Imagem destacada'; // Como não é obrigatório coloco um texto
  return (
    <figure className={styles.container_img}>
      <img
        src={figure.url}
        // alt={altText}
        alt={altText || '📷 - Imagem sem descrição'}
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
  console.log(data);

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
