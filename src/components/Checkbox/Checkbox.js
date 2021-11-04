import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ check }) => {
  return (
    <div className={styles.div}>
      {check.map((check) => (
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <label>{check}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
