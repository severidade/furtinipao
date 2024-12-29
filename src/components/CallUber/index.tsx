/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import styles from './CallUber.module.css';

export default function CallUber() {
  // Defina as coordenadas do destino
  const destinationLatitude = -19.94255881205757;
  const destinationLongitude = -43.94252626406074;

  // Construa o deep link para o Uber (web)
  const deepLinking = `https://m.uber.com/ul/?client_id=x-1pDA1HL7fNOYu0xmShIx5zVKDXSZFS&action=setPickup&pickup=my_location&dropoff[latitude]=${destinationLatitude}&dropoff[longitude]=${destinationLongitude}`;

  // Construa o deep link para abrir no app (android/ios)
  const appDeepLink = `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${destinationLatitude}&dropoff[longitude]=${destinationLongitude}`;

  const handleClick = () => {
    // Tenta abrir o app primeiro
    window.location.href = appDeepLink;

    setTimeout(() => {
      window.location.assign(deepLinking);
    }, 500);
  };

  return (
    <button
      type="button"
      className={styles.uber}
      onClick={handleClick}
    >
      Reservar pelo Uber
    </button>
  );
}
