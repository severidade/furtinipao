/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './OrientationDetectorDevice.module.css';
import rotateDeviceImage from './assets/girar.svg';

function OrientationDetectorDevice() {
  const { isMobile } = useDeviceInfo();
  const [mobileHorizontal, setMobileHorizontal] = useState(false);

  useEffect(() => {
    function checkHorizontalOrientation() {
      const largura = window.innerWidth;
      const altura = window.innerHeight;

      // Detecta dispositivos móveis em orientação horizontal
      if (isMobile && largura > altura) {
        setMobileHorizontal(true);
        document.body.style.overflow = 'hidden'; // Evita o scroll
      } else {
        setMobileHorizontal(false);
        document.body.style.overflow = 'auto'; // Habilita o scroll
      }
    }

    window.addEventListener('resize', checkHorizontalOrientation);

    checkHorizontalOrientation();

    return () => {
      window.removeEventListener('resize', checkHorizontalOrientation);
      document.body.style.overflow = 'auto'; // Garante o scroll de volta
    };
  }, [isMobile]);

  return (
    mobileHorizontal && (
      <div className={`${styles.orientation_detector} ${styles.is_mobile_horizontal}`}>
        <figure className={styles.container_figure}>
          <img className={styles.rotate_icon} src={rotateDeviceImage} alt="Girar dispositivo" />
          <div className={styles.msg}>
            Gire o dispositivo para a posição vertical e veja o conteúdo desta página
          </div>
        </figure>
      </div>
    )
  );
}

export default OrientationDetectorDevice;
