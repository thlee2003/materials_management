import React from 'react';
import styles from './Main.module.css';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';
import Table from '../../components/Table/Table';

const Main = () => {
  const check = ['PART', 'PBA', '반제품', '완제품'];
  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} />
      </div>
      <div className={styles.content}>
        <Table height={760} />
      </div>
    </div>
  );
};

export default Main;
