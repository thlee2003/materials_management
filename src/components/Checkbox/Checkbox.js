import React, { useState } from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ check, checkValue }) => {
  const [checked, setChecked] = useState({
    check0: true,
    check1: true,
    check2: true,
    check3: true,
  });
  const handleSingleCheck = (e, index) => {
    setChecked({
      ...checked,
      [`check${index}`]: !checked[`check${index}`],
    });
    checked[`check${index}`] = e.target.checked;
    checkValue(checked);
  };
  return (
    <div className={styles.div}>
      {check.map((check, index) => (
        <div className={styles.checkbox}>
          <input type="checkbox" checked={checked[`check${index}`]} onClick={(e) => handleSingleCheck(e, index)} />
          <label>{check}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
