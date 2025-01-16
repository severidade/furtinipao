/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './HeroImage.module.css';
import fundoImage from '../../assets/cafe3.webp';

export default function HeroImage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState<string | undefined>(undefined);

  useEffect(() => {
    const background = new Image();
    background.src = fundoImage;
    background.onload = () => setBackgroundImg(background.src);
  }, []);

  // Atualiza a altura da janela e a posição do elemento quando o componente é montado
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(document.documentElement.clientHeight); // Usar o clientHeight
      const element = document.getElementById('scroll-zoom-image');
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top); // Posição do topo do elemento
      }
    };

    // Adiciona o evento de resize
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize); // Recalcular na rolagem também
    handleResize(); // Chama a função logo que o componente é montado

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  const { scrollY } = useScroll();

  // A escala vai ser calculada com base na rolagem e na altura da janela e posição do elemento
  const scale = useTransform(
    scrollY,
    [elementTop - windowHeight, elementTop + windowHeight],
    [3, 1.1],
  );

  return (
    <div className={styles.hero_image}>
      <motion.img
        id="scroll-zoom-image"
        src={backgroundImg || undefined}
        alt="imagem de destaque na home"
        loading="lazy"
        style={{
          scale,
          width: '100%',
          height: '70vh',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
