import React from 'react';
import styles from './RootLayout.module.css';
import { Logo } from '../Logo/Logo.tsx';
import { Outlet } from 'react-router';

export const RootLayout: React.FC = () => {
  return (
    <section className={styles.container}>
      <Logo />
      {/* Menu*/}
      <Outlet />
      {/* Footer */}
    </section>
  );
};
