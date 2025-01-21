/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './HeroImage.module.css';
import fundoImageMobile from '../../assets/cafe.webp';
import fundoImageDesktop from '../../assets/HighlightGallery/05.jpg';

export default function HeroImage() {
  const { isMobile } = useDeviceInfo();

  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  const fundoImage = isMobile ? fundoImageMobile : fundoImageDesktop;

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

  const scaleValues = isMobile ? [3, 1.1] : [1.3, 1];
  // Define os valores dinamicamente com base em isMobile

  const { scrollY } = useScroll();
  const scale = useTransform(
    scrollY,
    [elementTop - windowHeight, elementTop + windowHeight],
    scaleValues,
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
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
