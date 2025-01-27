/* eslint-disable react/react-in-jsx-scope */
import styles from './FixedWhatsAppButton.module.css';

export default function FixedWhatsAppButton() {
  const phoneNumber = '5531992456878';
  const message = 'Olá! Gostaria de fazer uma reserva.';
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
