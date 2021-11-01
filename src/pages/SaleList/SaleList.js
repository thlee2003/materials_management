import React from 'react';
import styles from './SaleList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const SaleList = () => {
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
        <h1 className={styles.h1}>판매 목록</h1>
        <Table />
      </div>
    </div>
  );
};
export default SaleList;
