/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import parse from 'html-react-parser';
import styles from './SectionTemplate.module.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import ButtonTemplate from '../ButtonTemplate/index.tsx';

type SectionTemplateProps= {
  id: string;
  dataSection: SectionTemplateType[];
}

export default function SectionTemplate({ id, dataSection } : SectionTemplateProps) {
  return (

    <>
      {dataSection.map((i) => (
        <section key={i.id} id={id} className={styles.container}>
          <figure className={styles.container_img}>
            {i.figure && (
              <img
                src={i.figure.url}
                alt={i.figure.altText}
                loading="lazy"
                className="highlight_image"
              />
            )}
          </figure>

          <section className={styles.header}>
            <h2 className={styles.header_title}>{i.header.title}</h2>
            {i.header.subtitle && <h3 className={styles.header_subtitle}>{i.header.subtitle}</h3>}
          </section>

          <section className={styles.container_content}>
            <div className={styles.content}>
              {parse(i.content)}
            </div>
          </section>

          {i.callToActionBt
          && (
            <ButtonTemplate
              number={i.callToActionBt.phoneNumber}
              title={i.callToActionBt.buttonTitle}
              msg={i.callToActionBt.message}
              model={i.callToActionBt.model}
            />
          )}
        </section>
      ))}
    </>
  );
}
