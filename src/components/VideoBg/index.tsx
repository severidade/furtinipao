/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import styles from './VideoBg.module.css';
import videoSrc from '../../assets/videos/video_lunch.mp4';
import posterImage from '../../assets/videos/video_lunch.png';

export default function VideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const media = {
    video: videoSrc,
    poster: posterImage,
  };

  useEffect(() => {
    const reproduzirVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((erro) => {
          console.log('Falha na reprodução automática do vídeo:', erro);
        });
      }
    };

    reproduzirVideo();

    document.addEventListener('touchstart', reproduzirVideo, { once: true });

    return () => {
      document.removeEventListener('touchstart', reproduzirVideo);
    };
  }, []);

  return (
    <div className={styles.container_videoBg}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        loop
        data-testid="video"
        poster={media.poster}
      >
        <source src={media.video} type="video/mp4" />
      </video>
    </div>
  );
}

// eslint-disable-next-line max-len
// No iOS, especialmente em iPhones, existem restrições para reprodução automática de vídeos. Isso faz parte das medidas da Apple para economizar bateria e dados.
