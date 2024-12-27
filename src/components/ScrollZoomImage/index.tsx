/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import fundoImage from '../../assets/fundo.jpg';

function ScrollZoomImage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <motion.img
      src={fundoImage}
      alt="imagem de destaque na home"
      style={{
        scale,
        width: '100%',
        height: '70vh',
        objectFit: 'cover',
      }}
    />
  );
}

export default ScrollZoomImage;
