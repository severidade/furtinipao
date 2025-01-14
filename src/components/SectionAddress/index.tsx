/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionAddress.module.css';
import CallUber from '../CallUber/index.tsx';
import { SectionAddressDataType } from '../../types/SectionAddressDataType.tsx';
import HighlightGalleryAddress from '../HighlightGalleryAddress/index.tsx';

type AddressProps = {
  id: string;
  DataSection: SectionAddressDataType[];
};

export default function SectionAddress({ id, DataSection } : AddressProps) {
  const {
    headerAddress: { addressTitle, addressDetails },
    accessibility,
    petFriendly,
    slider,
  } = DataSection[0];

  return (
    <section id={id} className={styles.container_address}>
      <HighlightGalleryAddress highlightItems={slider} />
      <section className={styles.header_address}>
        <h2 className={styles.header_address_title}>{addressTitle}</h2>
        <address className={styles.address_details}>{addressDetails}</address>
      </section>
      <section className={styles.accessibility_info}>
        <div className={styles.accessibility}>{accessibility}</div>
        <div className={styles.pet_friendly}>{petFriendly}</div>
      </section>
      <CallUber />
    </section>
  );
}
