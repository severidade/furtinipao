/* eslint-disable react/react-in-jsx-scope */
import styles from './BreadOrderButton.module.css';

export default function BreadOrderButton() {
  const phoneNumber = '5531984738820';
  const message = 'Olá! Gostaria de fazer um pedido de pão.';
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
