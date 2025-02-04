/* eslint-disable react/react-in-jsx-scope */
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  useRef, useState, useEffect,
} from 'react';
import styles from './OpeningHours.module.css';
import { getScheduleStatus } from '../../utils/scheduleUtils.tsx';
import ButtonTemplate from '../../components/ButtonTemplate/index.tsx';
import VideoBg from '../../components/VideoBg/index.tsx';

import OpeningHoursData from '../../data/OpeningHoursData.tsx';
import { useFetchOpeningHours } from '../../CustomHooks/useFetchOpeningHours.tsx';

type OpeningHoursProps = {
  id: string;
}

export default function OpeningHours({ id } : OpeningHoursProps) {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [status, setStatus] = useState('');

  const { openingHours, isLoading, error } = useFetchOpeningHours(id);

  const [{ header: { title }, schedule }] = OpeningHoursData;

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

  if (isLoading) return <div>Carregando...</div>;

  if (error) {
    return (
      <div>
        Erro ao carregar:
        {error.message}
      </div>
    );
  }

  if (!openingHours.length) return null;

  const {
    header,
    callToActionBt,
    videoSection,
  } = openingHours[0];

  // console.log('Dados retornados dentro do cta:', videoSection);

  return (
    <section id={id} ref={containerRef} className={styles.container_opening_hours}>
      {/* <VideoBg /> */}
      {videoSection && <VideoBg data={videoSection} />}
      <motion.div
        className={styles.opening_hours_card}
        style={{ x: animatedX }}
        transition={{ type: 'spring', stiffness: 70, damping: 20 }}
      >
        <h2 className={styles.opening_hours_title}>{header.title}</h2>
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
          {schedule && (schedule.map(({ day, hours }) => (
            <div key={day} className={styles.schedule_row}>
              <strong>
                {day}
                :
              </strong>
              <div className={styles.dots} />
              {hours}
            </div>
          )))}
        </section>

        {callToActionBt && <ButtonTemplate callToActionBt={callToActionBt} />}
      </motion.div>
    </section>
  );
}
