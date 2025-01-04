/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Heder.module.css';

export default function Heder() {
  const scrollY = useMotionValue(0);
  const height = useTransform(scrollY, [0, 300], [75, 50]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      setIsScrolled(window.scrollY > 45);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <motion.div
      className={styles.container_header}
      style={{
        height,
      }}
    >
      <h1
        className={`${styles.logo_frutini} ${isScrolled ? styles.scrolled : ''}`}
      >
        Frutini padaria e confeitaria
      </h1>
      <nav className={styles.nav_frutini}>
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </nav>
    </motion.div>
  );
}
