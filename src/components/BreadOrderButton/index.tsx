/* eslint-disable react/react-in-jsx-scope */
import styles from './BreadOrderButton.module.css';

export default function OpeningHoursButton() {
  const phoneNumber = '5531992456878';
  const message = 'Olá! Gostaria de fazer uma reserva.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={styles.bread_order_button}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      Faça seus pedidos
    </button>
  );
}
