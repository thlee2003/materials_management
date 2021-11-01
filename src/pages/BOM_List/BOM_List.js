import React from 'react';
import styles from './BOM_List.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const BOM_List = () => {
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
        <h1 className={styles.h1}>BOM 목록</h1>
        <Table />
      </div>
    </div>
  );
};

export default BOM_List;
