import React from 'react';
import styles from './ProduceList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const ProduceList = () => {
  const column = ['코드', '분류', '제품명', ' 수량', '금액', '날짜', '작성자'];
  const links = [
    {
      to: '/ProduceList',
      name: '제품 목록',
    },
    {
      to: '/ProduceAdd',
      name: '제품 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>제품 목록</h1>
        <Table height={730} column={column} />
      </div>
    </div>
  );
};

export default ProduceList;
