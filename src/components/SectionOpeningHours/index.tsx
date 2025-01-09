/* eslint-disable react/react-in-jsx-scope */

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import VideoBg from '../VideoBg/index.tsx';
import styles from './OpeningHours.module.css';

export default function OpeningHours() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false); // Controle da animação

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Configura quando a rolagem começa e termina
  });

  const x = useTransform(
    scrollYProgress,
    [0.3, 0.5], // Intervalo de rolagem
    ['110%', '0%'], // Valores de saída (posição inicial e final)
  );

  // Listener para detectar se a rolagem passou do limite
  useEffect(() => {
    if (!hasAnimated) {
      const unsubscribe = scrollYProgress.on('change', (value) => {
        if (value >= 0.5) {
          setHasAnimated(true);
        }
      });

      return () => {
        unsubscribe();
      };
    }

    return undefined;
  }, [scrollYProgress, hasAnimated]);

  const animatedX = hasAnimated ? '0%' : x;

  return (
    <div ref={containerRef} className={styles.container_opening_hours}>
      <VideoBg />
      <motion.div
        className={styles.opening_hours_card}
        style={{
          x: animatedX, // Aplica o valor controlado
        }}
        transition={{
          duration: 0.8, // Suaviza a transição
          ease: 'easeOut',
        }}
      >
        <h2 className={styles.opening_hours_title}>Horário de funcionamento</h2>
        <p>Aqui entra as infromações do horário de funcionamento</p>
        <p>também terá um botão para fazer reservas</p>
      </motion.div>
    </div>
  );
}
