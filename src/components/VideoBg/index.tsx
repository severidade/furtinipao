/* eslint-disable react/react-in-jsx-scope */
import styles from './VideoBg.module.css';
import videoSrc from '../../assets/lunch/video_lunch.mp4';

export default function VideoBg() {
  return (
    <div className={styles.container_videoBg}>
      <video autoPlay loop muted data-testid="video">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
