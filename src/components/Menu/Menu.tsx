import React, { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router';
import { ClockIcon, CogIcon, HomeIcon, MoonIcon, SunIcon } from 'lucide-react';

export const Menu: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const handleToggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <section className={styles.container}>
      <div className={styles['container-link']}>
        <Link to={'/'} className={styles.link}>
          <HomeIcon />
        </Link>
        <Link to={'/history'} className={styles.link}>
          <ClockIcon />
        </Link>
        <Link to={'/settings'} className={styles.link}>
          <CogIcon />
        </Link>
        <button className={styles.buttonMenu} onClick={handleToggleTheme}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </section>
  );
};
