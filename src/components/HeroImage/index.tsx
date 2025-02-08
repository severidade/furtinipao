/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useDeviceInfo } from '../../utils/useDeviceInfo.tsx';
import styles from './HeroImage.module.css';
import { SectionHeroWelcomeType } from '../../types/HeroWelcomeType.tsx';

interface HeroImageProps {
  backgroundImage: SectionHeroWelcomeType['backgroundImage'];
}

export default function HeroImage({ backgroundImage } : HeroImageProps) {
  const { isMobile } = useDeviceInfo();
  const [windowHeight, setWindowHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  const fundoImage = isMobile
    ? backgroundImage.imagemMobile.url
    : backgroundImage.imagemDesktop.url;
  const altText = isMobile
    ? backgroundImage.imagemMobile.altText
    : backgroundImage.imagemDesktop.altText;

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
        alt={altText || '📷 - Imagem de destaque'}
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
