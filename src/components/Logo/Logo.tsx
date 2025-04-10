import React from 'react';
import { Link } from 'react-router';
import { TimerIcon } from 'lucide-react';
import styles from './Logo.module.css';

export const Logo: React.FC = () => {
  return (
    <section className={styles.container}>
      <Link to={'/'} className={styles.link}>
        <TimerIcon size={70} />
        <span>Chronos </span>
      </Link>
    </section>
  );
};
