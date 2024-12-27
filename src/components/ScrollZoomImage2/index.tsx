/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import fundoImage from '../../assets/cafe.jpg';

function ScrollZoomImage2() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  // Atualiza a altura da janela e a posição do elemento quando o componente é montado
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight); // Altura da janela
      const element = document.getElementById('scroll-zoom-image');
      if (element) {
        const rect = element.getBoundingClientRect();
        setElementTop(rect.top); // Posição do topo do elemento em relação à janela
      }
    };

    // Adiciona o evento de resize
    window.addEventListener('resize', handleResize);
    handleResize(); // Chama a função logo que o componente é montado

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  // A escala vai ser calculada com base na rolagem e na altura da janela e posição do elemento
  const scale = useTransform(
    scrollY,
    [elementTop - windowHeight, elementTop + windowHeight],
    [2, 1],
  );

  return (
    <motion.img
      id="scroll-zoom-image"
      src={fundoImage}
      alt="imagem de destaque na home"
      style={{
        scale,
        width: '100%',
        height: '80vh',
        objectFit: 'cover',
      }}
    />
  );
}

export default ScrollZoomImage2;
