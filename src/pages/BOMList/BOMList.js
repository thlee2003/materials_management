import React from 'react';
import styles from './BOMList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

const BOMList = () => {
  const links = [
    {
      to: '/BOMList',
      name: 'BOM 목록',
    },
    {
      to: '/BOMAdd',
      name: 'BOM 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <div className={styles.content}>
          <h1>BOM 목록</h1>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </div>
  );
};

export default BOMList;
