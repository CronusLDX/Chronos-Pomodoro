import React from 'react';
import styles from './Heading.module.css';
const Heading: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
