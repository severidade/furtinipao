/* eslint-disable react/react-in-jsx-scope */
import styles from './EventsButton.module.css';

export default function EventsButton() {
  const phoneNumber = '5531992456878';
  const message = 'Olá! Quero realizar um evento incrível com vocês. Como podemos começar?';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <button
      type="button"
      className={styles.opening_hours_button_button}
      onClick={() => window.open(whatsappLink, '_blank')}
    >
      Agendar Evento
    </button>
  );
}
