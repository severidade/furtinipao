/* eslint-disable react/react-in-jsx-scope */
import styles from './OpeningHoursButton.module.css';

export default function OpeningHoursButton() {
  const phoneNumber = '5531992456878';
  const message = 'Olá! Gostaria de fazer uma reserva.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={styles.opening_hours_button_button}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      Faça sua reserva
    </button>
  );
}
