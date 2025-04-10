import React from 'react';
import styles from './RootLayout.module.css';
import { Logo } from '../Logo/Logo.tsx';
import { Outlet } from 'react-router';
import { Menu } from '../Menu/Menu.tsx';
import { Footer } from '../Footer/Footer.tsx';

export const RootLayout: React.FC = () => {
  return (
    <section className={styles.container}>
      <Logo />
      <Menu />
      <Outlet />
      <Footer />
    </section>
  );
};
