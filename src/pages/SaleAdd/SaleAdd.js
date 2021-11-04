import React from 'react';
import styles from './SaleAdd.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const SaleAdd = () => {
  const links = [
    {
      to: '/SaleList',
      name: '판매 목록',
    },
    {
      to: '/SaleAdd',
      name: '판매 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>판매 등록</h1>
          <button>등록</button>
        </div>
        <Table />
      </div>
    </div>
  );
};
export default SaleAdd;
