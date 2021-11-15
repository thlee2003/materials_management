import React, { useState } from 'react';
import styles from './List.module.css';

import Table from '../Table/Table';

const List = ({ name, data }) => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const onclick = () => {
    setBool(!bool);
  };
  return (
    <div className={styles.list} onClick={onclick}>
      <span>{bool === false ? '|||' : 'X'}</span>
      <label>{name}</label>
      <div className={bool === true ? styles.container.show : styles.container}>
        <Table height={150} column={column} data={data} />
      </div>
    </div>
  );
};
export default List;
