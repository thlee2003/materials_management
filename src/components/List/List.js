import React, { useState } from 'react';
import styles from './List.module.css';

const List = () => {
  const [bool, setBool] = useState(false);
  const onclick = () => {
    setBool(!bool);
  };
  return (
    <div className={styles.list} onClick={onclick}>
      <span>{bool === false ? '|||' : 'X'}</span>
      <label>BOM 이름</label>
      <div className={bool === true ? styles.container.show : styles.container}>
        <p>자재1</p>
        <p>자재2</p>
        <p>자재3</p>
        <p>자재4</p>
        <p>자재5</p>
        <p>자재6</p>
        <p>자재7</p>
      </div>
    </div>
  );
};
export default List;
