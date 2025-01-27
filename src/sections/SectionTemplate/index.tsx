/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionTemplate.module.css';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';
import { useFetchSectionTemplate } from '../../CustomHooks/useFetchSectionTemplate.tsx';

type SectionTemplateProps = {
  id: string;
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
  if (!content) return null;

  return (
    <section className={styles.container_content}>
      <p className={styles.content}>
        {content}
      </p>
    </section>
  );
}

export default function SectionTemplate({ id }: SectionTemplateProps) {
  const { data, isLoading, error } = useFetchSectionTemplate(id);

  if (isLoading) return <p>Carregando...</p>;
  if (error) {
    return (
      <p>
        Erro:
        {error.message}
      </p>
    );
  }
  if (!data || !data.length) return null;

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
