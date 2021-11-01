import React from 'react';
import styles from './Main.module.css';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';
import Table from '../../components/Table/Table';

const Main = () => {
  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox />
      </div>
      <div className={styles.header}>
        <Table />
      </div>
    </div>
  );
};

export default Main;
