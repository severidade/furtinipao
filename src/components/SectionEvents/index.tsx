/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import styles from './SectionEvents.module.css';
import url from '../../assets/Events/eventos.jpg';
import EventsButton from '../EventsButton/index.tsx';

type SectionEventsProps= {
  id: string;
}

export default function SectionEvents({ id } : SectionEventsProps) {
  return (
    <section id={id} className={styles.container_events}>
      <figure className={styles.container_events_img}>
        <img
          src={url}
          alt="Imagem da cafeteria no maleta"
          className="highlight_image"
        />
      </figure>
      <section className={styles.header_events}>
        <h2 className={styles.header_events_title}>Eventos</h2>
        {/* <address className={styles.address_details}>{addressDetails}</address> */}
      </section>
      <section className={styles.events_info}>
        <p className={styles.events}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ligula viverra, facilisis justo at, malesuada odio. Integer interdum, erat nec tincidunt vehicula, nisl metus faucibus ligula, id cursus quam purus sed mi. Mauris ut fringilla nisl, eget posuere ligula. Fusce nec vehicula erat, ac volutpat purus. Nulla facilisi."
        </p>
      </section>
      <EventsButton />
    </section>
  );
}
