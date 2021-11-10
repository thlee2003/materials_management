import React from 'react';
import styles from './Input.module.css';

const Input = ({ name, input, setInput }) => {
  return (
    <div className={styles.input}>
      <p>{name}</p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} name="" id="" />
    </div>
  );
};

export default Input;
