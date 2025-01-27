/* eslint-disable react/react-in-jsx-scope */
// import styles from './FixedWhatsAppButton.module.css';

// export default function FixedWhatsAppButton() {
//   const phoneNumber = '5531992456878';
//   const message = 'Olá! Gostaria de fazer uma reserva.';
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <button
//       type="button"
//       className={styles.WhatsAppReserve_fixed}
//       onClick={() => window.open(whatsappLink, '_blank')}
//     >
//       Reservar pelo WhatsApp
//     </button>
//   );
// }

import { useFetchWhatsAppButton } from '../../CustomHooks/useFetchWhatsAppButton.tsx';
import styles from './FixedWhatsAppButton.module.css';

export default function FixedWhatsAppButton() {
  const { data, isLoading, error } = useFetchWhatsAppButton();

  // // Verifique os dados recebidos
  // console.log('Dados recebidos:', data);

  if (isLoading) {
    return <button type="button" className={styles.WhatsAppReserve_fixed} disabled>Carregando...</button>;
  }

  if (error) {
    return <button type="button" className={styles.WhatsAppReserve_fixed} disabled>Erro ao carregar</button>;
  }

  if (!data) {
    return <button type="button" className={styles.WhatsAppReserve_fixed} disabled>Dados não encontrados</button>;
  }

  // Como data é um objeto, destruture diretamente
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
