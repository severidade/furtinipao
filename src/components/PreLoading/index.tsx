/* eslint-disable react/react-in-jsx-scope */
import styles from './preloading.module.css';
// import img from './icon/pao_vapor.svg';

export default function Preloading() {
  return (
    <div className={styles.preloading}>
      <div className={styles.preloading_img}>Imagem de pré carregamento do site</div>
    </div>
  );
}
