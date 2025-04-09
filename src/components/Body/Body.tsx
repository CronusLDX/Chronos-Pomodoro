import { ReactNode } from 'react';
import styles from './Body.module.css';
// props genericas para alta flexibilidade
const Body = (props: { children: ReactNode }) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{props.children}</h1>
    </div>
  );
};

export default Body;
