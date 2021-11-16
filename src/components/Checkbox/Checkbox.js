import React, { useState } from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ check }) => {
  const [checked, setChecked] = useState({
    check0: true,
    check1: true,
    check2: true,
    check3: true,
  });
  const handleSingleCheck = (index) => {
    setChecked(
      {
        ...checked,
        [`check${index}`]: !checked[`check${index}`],
      },
      console.log(!checked[`check${index}`])
    );
  };
  return (
    <div className={styles.div}>
      {check.map((check, index) => (
        <div className={styles.checkbox}>
          <input type="checkbox" checked={checked[`check${index}`]} onClick={(e) => handleSingleCheck(index)} />
          <label>{check}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
