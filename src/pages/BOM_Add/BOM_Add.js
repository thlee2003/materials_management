import React from 'react';
import styles from './BOM_Add.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const BOM_Add = () => {
  const links = [
    {
      to: '/BOM_List',
      name: 'BOM 목록',
    },
    {
      to: '/BOM_Add',
      name: 'BOM 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <input className={styles.input} type="text" name="" id="" />
        <button className={styles.button}>등록</button>
        <div>
          <h1 className={styles.h1}>자재 목록</h1>
          <Table />
        </div>
        <div>
          <h1 className={styles.h1}>신규 자재</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default BOM_Add;
