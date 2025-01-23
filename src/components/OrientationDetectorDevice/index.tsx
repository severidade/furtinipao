/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { isBrowser } from 'react-device-detect';
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

      // Verifica se o dispositivo está em orientação horizontal no caso de dispositivos móveis reais.
      // Verificação adicional (!isBrowser) para evitar que navegadores desktop
      // redimensionados sejam erroneamente tratados como dispositivos móveis, mesmo quando a largura
      // da janela é menor que 1024px. Isso garante que a lógica seja aplicada somente a dispositivos
      // móveis reais em modo horizontal.

      if (isMobile && largura > altura && !isBrowser) {
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
