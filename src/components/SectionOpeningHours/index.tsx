/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  useRef, useState, useEffect,
} from 'react';
import VideoBg from '../VideoBg/index.tsx';
import styles from './OpeningHours.module.css';
import OpeningHoursButton from '../OpeningHoursButton/index.tsx';

// Função auxiliar para obter o status do horário
const getScheduleStatus = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour + currentMinutes / 60;

  const schedules = {
    0: { open: 9, close: 14 }, // Domingo
    1: null, // Segunda
    2: { open: 10, close: 20 }, // Terça
    3: { open: 10, close: 20 }, // Quarta
    4: { open: 10, close: 20 }, // Quinta
    5: { open: 10, close: 20 }, // Sexta
    6: { open: 9, close: 20 }, // Sábado
  };

  const todaySchedule = schedules[dayOfWeek];
  if (!todaySchedule) {
    const nextDay = (dayOfWeek + 1) % 7;
    const nextSchedule = schedules[nextDay];
    const nextOpen = nextSchedule?.open || 'Fechado';
    return { status: 'Fechado ', message: `Abre amanhã às ${nextOpen}h.` };
  }

  const { open, close } = todaySchedule;

  if (currentTime >= open && currentTime < close) {
    return { status: 'Aberto ', message: `Fecha às ${close}h.` };
  }
  if (currentTime < open) {
    return { status: 'Fechado ', message: `Abre hoje às ${open}h.` };
  }

  const nextDay = (dayOfWeek + 1) % 7;
  const nextSchedule = schedules[nextDay];
  const nextOpen = nextSchedule?.open || 'Fechado';
  return { status: 'Fechado ', message: `Abre amanhã às ${nextOpen}h.` };
};

export default function OpeningHours() {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [status, setStatus] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0.3, 0.5], ['110%', '0%']);

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
    <div ref={containerRef} className={styles.container_opening_hours}>
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
    </div>
  );
}
