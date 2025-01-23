/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionAddress.module.css';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import HighlightGalleryAddress from '../../components/HighlightGalleryAddress/index.tsx';
import CallUber from '../../components/CallUber/index.tsx';

type AddressProps = {
  id: string;
  dataSection: SectionTemplateType[];
};

// Subcomponente para o título e subtítulo
function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className={styles.header_address}>
      <h2 className={styles.header_address_title}>{title}</h2>
      {subtitle && <address className={styles.address_details}>{subtitle}</address>}
    </section>
  );
}

// Subcomponente para as características
function Characteristics({ characteristics }: { characteristics: { id: string; value: string }[] }) {
  return (
    <section className={styles.accessibility_info}>
      {characteristics.map((item) => (
        <div key={item.id} className={styles.characteristics}>
          {item.value}
        </div>
      ))}
    </section>
  );
}

// Subcomponente para o slider de galeria
function Gallery({ gallerySlider }: { gallerySlider: any[] }) {
  return <HighlightGalleryAddress highlightItems={gallerySlider} />;
}

export default function SectionAddress({ id, dataSection }: AddressProps) {
  const {
    header: { title, subtitle },
    characteristics,
    gallerySlider,
  } = dataSection[0];

  return (
    <section id={id} className={styles.container_address}>
      {gallerySlider && <Gallery gallerySlider={gallerySlider} />}
      <Header title={title} subtitle={subtitle} />
      {characteristics && <Characteristics characteristics={characteristics} />}
      <CallUber />
    </section>
  );
}
