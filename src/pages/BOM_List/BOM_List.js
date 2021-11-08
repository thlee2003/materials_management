import React, { useState } from 'react';
import styles from './BOM_List.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

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

export default BOM_List;
