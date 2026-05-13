/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { PortableText } from '@portabletext/react';
import { getPortableTextComponents } from '../../utils/getPortableTextComponents.tsx';
import HighlightGalleryAddress from '../../components/HighlightGalleryAddress/index.tsx';
import CallUber from '../../components/CallUber/index.tsx';
import styles from './SectionAddress.module.css';

import { AddressType } from '../../types/PageDataType.tsx';

type AddressProps = {
  id: string;
  data: AddressType[];
};

const portableTextComponents = getPortableTextComponents();

// Subcomponente para o título e subtítulo
function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className={styles.header_address}>
      <h2 className={styles.header_address_title}>{title}</h2>
      {subtitle && <address className={styles.address_details}><p>{subtitle}</p></address>}
    </section>
  );
}

// Subcomponente para as características
function Characteristics({ content }: { content: any[] }) {
  return (
    <section className={styles.accessibility_info}>
      <PortableText value={content} components={portableTextComponents} />
    </section>
  );
}

// Subcomponente para o slider de galeria
function Gallery({ gallerySlider }: { gallerySlider: any[] }) {
  return <HighlightGalleryAddress highlightItems={gallerySlider} />;
}

export default function SectionAddress({ id, data }: AddressProps) {
  const {
    header,
    gallerySlider,
    content,
  } = data[0];

  return (
    <section id={id} className={styles.container_address}>
      {gallerySlider && <Gallery gallerySlider={gallerySlider} />}

      <Header title={header.title} subtitle={header.subtitle} />
      {content && <Characteristics content={content} />}
      <CallUber />

    </section>
  );
}
