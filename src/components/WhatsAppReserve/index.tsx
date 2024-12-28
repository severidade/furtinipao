/* eslint-disable react/react-in-jsx-scope */
import styles from './WhatsAppReserve.module.css';

export default function WhatsAppReserve() {
  const phoneNumber = '5531992456878';
  const message = 'Olá! Gostaria de fazer uma reserva';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={styles.WhatsAppReserve_fixed}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      Reservar pelo WhatsApp
    </button>
  );
}
