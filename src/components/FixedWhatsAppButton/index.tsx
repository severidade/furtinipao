/* eslint-disable react/react-in-jsx-scope */
// import { data } from 'framer-motion/client';
// import { useFetchWhatsAppButton } from '../../CustomHooks/useFetchWhatsAppButton.tsx';

import styles from './FixedWhatsAppButton.module.css';

import { WhatsAppButtonType } from '../../types/PageDataType.tsx';

type FixedWhatsAppButtonProps ={
  data : WhatsAppButtonType[],
}

export default function FixedWhatsAppButton({ data } : FixedWhatsAppButtonProps) {
  const { phoneNumber, message } = data[0];
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={styles.WhatsAppReserve_fixed}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      WhatsApp
    </button>
  );
}
