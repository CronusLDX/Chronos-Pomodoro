import React from 'react';
import { HeadingProps } from '../../entities/Interfaces';
import styles from './Heading.module.css';

// componente flutuante onde não requere um padrão explícito
// É apenas o cabeçalho que pode ser usado em varios outros componentes

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <div className={styles.heading}>{children}</div>;
};
