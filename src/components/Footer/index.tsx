/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container_footer}>
      <ul className={styles.menu_social}>
        <li>
          <a
            className={`${styles.social_facebook} link`}
            target="_blank"
            href=" https://www.facebook.com/paodofurtini"
            rel="noreferrer"
          >
            www.facebook.com/paodofurtini
          </a>
        </li>
        <li>
          <a
            className={`${styles.social_instagram} link`}
            target="_blank"
            href="https://www.instagram.com/paodofurtini/"
            rel="noreferrer"
          >
            www.instagram.com/paodofurtini
          </a>
        </li>
        <li>
          <a
            className={`${styles.social_tiktok} link`}
            target="_blank"
            href="https://www.tiktok.com/@paodofurtini/"
            rel="noreferrer"
          >
            Tiktok
          </a>
        </li>
        <li>
          <a
            className={`${styles.social_youtube} link`}
            target="_blank"
            href="https://www.youtube.com/@paodofurtini8313"
            rel="noreferrer"
          >
            www.youtube.com/@paodofurtini8313
          </a>
        </li>
      </ul>

      <section className={styles.contact}>
        <h3 className={styles.contact_title}>Contato</h3>
        <a
          className={`${styles.email} link`}
          href="mailto:paodofurtini@podofurtini.com"
          rel="noreferrer"
        >
          paodofurtini@podofurtini.com
        </a>

        <ul className={styles.telefone_list}>
          <li>
            <a
              className={`${styles.tel} link`}
              href="tel:+5531984738820"
              rel="noreferrer"
            >
              (31) 98473-8820
            </a>
            <span className={styles.label}>Pedidos</span>
          </li>
          <li>
            <a
              className={`${styles.tel} link`}
              href="tel:+5531992456878"
              rel="noreferrer"
            >
              (31) 99245-6878
            </a>
            <span className={styles.label}>Reservas</span>
          </li>
        </ul>
      </section>

      <section className={styles.opening_hours}>
        <h3 className={styles.opening_hours_title}>Atendimento</h3>

        <div className={styles.opening_hours_footer}>
          <p className={styles.opening_hours_footer_info}>Terça a Sexta - 10 às 20h</p>
          <p className={styles.opening_hours_footer_info}>Sábado - 9 às 20h</p>
          <p className={styles.opening_hours_footer_info}>Domingo - 9 às 14h</p>
          <p className={styles.opening_hours_footer_info}>Feriados -9 às 19h30</p>
        </div>
      </section>
    </div>
  );
}
