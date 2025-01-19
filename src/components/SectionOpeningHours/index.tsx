/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  useRef, useState, useEffect,
} from 'react';
import VideoBg from '../VideoBg/index.tsx';
import styles from './OpeningHours.module.css';
import OpeningHoursButton from '../OpeningHoursButton/index.tsx';
import { getScheduleStatus } from '../../utils/scheduleUtils.tsx';

type OpeningHoursProps = {
  id: string;
}

export default function OpeningHours({ id } : OpeningHoursProps) {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [status, setStatus] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0.2, 0.4], ['100%', '0%']);

  useEffect(() => {
    if (!hasAnimated) {
      const unsubscribe = scrollYProgress.on('change', (value) => {
        if (value >= 0.5) {
          setHasAnimated(true);
        }
      });
      return () => unsubscribe();
    }
  }, [scrollYProgress, hasAnimated]);

  useEffect(() => {
    const { status: currentStatus, message } = getScheduleStatus();
    setStatus(currentStatus);
    setStatusMessage(message);
  }, []);

  const animatedX = hasAnimated ? '0%' : x;

  return (
    <section id={id} ref={containerRef} className={styles.container_opening_hours}>
      <VideoBg />
      <motion.div
        className={styles.opening_hours_card}
        style={{ x: animatedX }}
        transition={{ type: 'spring', stiffness: 70, damping: 20 }}
      >
        <h2 className={styles.opening_hours_title}>Horário de funcionamento</h2>
        <section
          className={styles.schedule_table}
          aria-live="polite"
        >
          <div className={styles.schedule_status}>
            <strong className={`${styles.status} ${status === 'Aberto ' ? styles.open : styles.closed}`}>
              {status}
            </strong>
            {statusMessage}
          </div>
          <div className={styles.schedule_row}>
            <strong>Terça a Sexta</strong>
            <div className={styles.dots} />
            10 às 20h
          </div>
          <div className={styles.schedule_row}>
            <strong>Sábado:</strong>
            <div className={styles.dots} />
            9 às 20h
          </div>
          <div className={styles.schedule_row}>
            <strong>Domingo:</strong>
            <div className={styles.dots} />
            9 às 14h
          </div>
          <div className={styles.schedule_row}>
            <strong>Feriados:</strong>
            <div className={styles.dots} />
            9 às 19h30
          </div>
        </section>
        <OpeningHoursButton />
      </motion.div>
    </section>
  );
}
