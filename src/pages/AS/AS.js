import React from 'react';
import styles from './AS.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const AS = () => {
  const links = [
    {
      to: '/AS',
      name: 'AS',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.list}>
        <h1 className={styles.h1}>AS 목록</h1>
        <Table />
      </div>
      <div className={styles.list2}>
        <h1 className={styles.h1}>AS 자재 목록</h1>
        <Table />
      </div>
    </div>
  );
};

export default AS;
