import React, { useState } from 'react';
import styles from './List.module.css';

import Table from '../Table/Table';

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
        <Table />
      </div>
    </div>
  );
};
export default List;
