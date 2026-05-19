/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import { motion } from 'framer-motion';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  progress: number;
}

export default function LoadingSpinner({ progress }: LoadingSpinnerProps) {
  return (
    <div className={styles.loading_container}>
      <motion.div
        className={styles.loading_bar}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
      <p className={styles.loading_text}>
        {progress.toFixed(0)}
        % Carregado
      </p>
    </div>
  );
}
