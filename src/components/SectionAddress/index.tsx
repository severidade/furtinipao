/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionAddress.module.css';
import CallUber from '../CallUber/index.tsx';

export default function SectionAddress() {
  return (
    <div className={styles.container_address}>
      <section className="header_address">
        <h2 className={styles.header_address_title}>Nova Casa</h2>
        <address className={styles.address_details}>
          A  Casa Rosa do Furtini esta na Rua Carangola, 358, esquina com Rua Primavera, 21 no bairro Santo Antônio - Belo Horizonte
        </address>
      </section>
      <section className="accessibility-info">
        <div className={styles.accessibility}>O espaço foi projetado para ser acessível a pessoas com deficiência (PCD), garantindo conforto e segurança para todos.</div>
        <div className={styles.pet_friendly}>O ambiente é pet friendly, permitindo a presença de animais de estimação e garantindo conforto e bem-estar para todos.</div>
      </section>
      <CallUber />
    </div>
  );
}
