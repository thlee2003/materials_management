import React from 'react';
import styles from './Main.module.css';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';
import Table from '../../components/Table/Table';

import data from '../../data.json';

const Main = () => {
  const column = ['코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '작성자'];
  const check = ['PART', 'PBA', '반제품', '완제품'];
  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} />
      </div>
      <div className={styles.content}>
        <Table height={760} column={column} data={data.main} />
      </div>
    </div>
  );
};

export default Main;
