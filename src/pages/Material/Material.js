import React from 'react';
import styles from './Material.module.css';

import Table from '../../components/Table/Table';

const Material = () => {
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>자재 등록</h1>
          <button>등록</button>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Material;
