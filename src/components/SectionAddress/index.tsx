/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionAddress.module.css';
import CallUber from '../CallUber/index.tsx';
// import { SectionAddressDataType } from '../../types/SectionAddressDataType.tsx';
import { SectionTemplateType } from '../../types/SectionTemplateType.tsx';
import HighlightGalleryAddress from '../HighlightGalleryAddress/index.tsx';

type AddressProps = {
  id: string;
  dataSection: SectionTemplateType[];
};

export default function SectionAddress({ id, dataSection } : AddressProps) {
  const {
    header: { title, subtitle },
    characteristics,
    gallerySlider,
  } = dataSection[0];

  return (
    <section id={id} className={styles.container_address}>

      { gallerySlider && (<HighlightGalleryAddress highlightItems={gallerySlider} />) }

      <section className={styles.header_address}>
        <h2 className={styles.header_address_title}>{title}</h2>
        <address className={styles.address_details}>{subtitle}</address>
      </section>
      <section className={styles.accessibility_info}>
        {characteristics && (
          characteristics.map((i) => (
            <div
              key={i.id}
              className={styles.characteristics}
            >
              {' '}
              {i.value}
            </div>
          ))
        )}
      </section>
      <CallUber />
    </section>
  );
}
