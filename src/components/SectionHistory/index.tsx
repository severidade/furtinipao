/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionHistory.module.css';
import url from '../../assets/HistorySection/history.jpeg';

export default function SectionHistory() {
  return (
    <div className={styles.container_history}>
      <figure className={styles.container_history_img}>
        <img
          src={url}
          alt="Imagem da cafeteria no maleta"
          className="highlight_image"
        />
      </figure>
      <section className={styles.header_history}>
        <h2 className={styles.header_history_title}>Nossa História</h2>
        {/* <address className={styles.address_details}>{addressDetails}</address> */}
      </section>
      <section className={styles.history_info}>
        <p className={styles.history}>
          Nossa história começou em 2018, movida pela busca por hábitos de vida mais saudáveis.
        </p>
        <p className={styles.history}>
          O desejo de produzir nosso próprio alimento nos levou aos pães e à fermentação natural, iniciando uma jornada de aprendizado e evolução: criamos nosso fermento, experimentamos pães que nem sempre saíam perfeitos (mas para nós eram incríveis), enfrentamos queimaduras, erros e até dois fornos queimados.
        </p>
      </section>
    </div>
  );
}
