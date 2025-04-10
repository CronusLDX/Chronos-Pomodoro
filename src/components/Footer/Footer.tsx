import React from 'react';
import { Link } from 'react-router';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Link to={'/about-pomodoro'} className={styles.link}>
          Entenda sobre como funciona a técnica de pomodoro
        </Link>
        <span>Chronos Pomodoro &copy; {currentYear} - Feito por João</span>
      </div>
    </section>
  );
};
