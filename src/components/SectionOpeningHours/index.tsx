/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  useRef, useState, useEffect,
} from 'react';
import VideoBg from '../VideoBg/index.tsx';
import styles from './OpeningHours.module.css';
import OpeningHoursButton from '../OpeningHoursButton/index.tsx';

type OpeningHoursProps = {
  id: string;
}
interface Schedule {
  open: number;
  close: number;
}

interface Schedules {
  [key: number]: Schedule | null;
}

const getScheduleStatus = () => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour + currentMinutes / 60;

  const schedules: Schedules = {
    0: { open: 9, close: 14 }, // Domingo
    1: null, // Segunda
    2: { open: 10, close: 20 }, // Terça
    3: { open: 10, close: 20 }, // Quarta
    4: { open: 10, close: 20 }, // Quinta
    5: { open: 10, close: 20 }, // Sexta
    6: { open: 9, close: 20 }, // Sábado
  };

  const todaySchedule = schedules[dayOfWeek];

  // Se for domingo após o horário de fechamento ou segunda-feira
  if ((dayOfWeek === 0 && currentTime >= 14) || dayOfWeek === 1) {
    // Procura o próximo dia útil (terça-feira)
    const nextOpenDay = 2; // Terça-feira
    const nextSchedule = schedules[nextOpenDay];
    return {
      status: 'Fechado Agora ',
      message: `Abre terça às ${nextSchedule?.open}h.`,
    };
  }

  // Se não houver horário para hoje (segunda-feira)
  if (!todaySchedule) {
    const nextDay = (dayOfWeek + 1) % 7;
    const nextSchedule = schedules[nextDay];
    const nextOpen = nextSchedule?.open || 'Fechado';
    return {
      status: 'Fechado Agora ',
      message: `Abre amanhã às ${nextOpen}h.`,
    };
  }

  const { open, close } = todaySchedule;

  // Se estiver dentro do horário de funcionamento
  if (currentTime >= open && currentTime < close) {
    return {
      status: 'Aberto ',
      message: `Fecha às ${close}h.`,
    };
  }

  // Se for antes do horário de abertura
  if (currentTime < open) {
    return {
      status: 'Fechado Agora ',
      message: `Abre hoje às ${open}h.`,
    };
  }

  // Se já passou do horário de fechamento
  // Encontra o próximo dia útil
  let nextDay = (dayOfWeek + 1) % 7;
  while (!schedules[nextDay]) {
    nextDay = (nextDay + 1) % 7;
  }
  const nextSchedule = schedules[nextDay];
  const nextDayName = nextDay === 2 ? 'terça' : 'amanhã';

  return {
    status: 'Fechado ',
    message: `Abre ${nextDayName} às ${nextSchedule?.open}h.`,
  };
};

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
