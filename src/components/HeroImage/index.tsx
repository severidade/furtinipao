/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './HeroImage.module.css';
import fundoImage from '../../assets/cafe.webp';

export default function HeroImage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  // Atualiza a altura da janela e a posição do elemento quando o componente é montado
  useEffect(() => {
    const handleUpdate = () => {
      setWindowHeight(document.documentElement.clientHeight);
      const element = document.getElementById('scroll-zoom-image');
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top);
      }
    };

    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate);
    handleUpdate();

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
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
        src={fundoImage}
        alt="imagem de destaque na home"
        loading="eager"
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
