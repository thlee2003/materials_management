import React from 'react';
import styles from './Material.module.css';

import Table from '../../components/Table/Table';

const Material = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>자재 등록</h1>
          <button>등록</button>
        </div>
        <div className={styles.table}>
          <Table height={730} column={column} />
        </div>
      </div>
    </div>
  );
};

export default Material;
