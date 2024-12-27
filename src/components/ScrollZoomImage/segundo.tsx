/* eslint-disable react/react-in-jsx-scope */
import { motion, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import fundoImage from '../../assets/fundo.jpg';

function ScrollZoomImage() {
  const [windowHeight, setWindowHeight] = useState(0);

  // Atualiza a altura da janela sempre que ela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight); // Define a altura da janela
    };

    // Inicializa a altura da janela
    handleResize();

    // Adiciona um event listener para atualizar a altura da janela
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente for desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  // Calcula o zoom com base na rolagem da página e na altura da janela
  const scale = useTransform(
    scrollY,
    [0, windowHeight], // O intervalo de entrada vai de 0 a altura da janela
    [3, 1], // O intervalo de saída vai de 3x a 1x de escala
  );

  return (
    <motion.img
      src={fundoImage}
      alt="imagem de destaque na home"
      style={{
        scale,
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
      }}
    />
  );
}

export default ScrollZoomImage;
