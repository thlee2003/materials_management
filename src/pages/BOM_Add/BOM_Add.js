import React, { useState } from 'react';
import styles from './BOM_Add.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Popup from '../../components/Popup/Popup';

const BOM_Add = () => {
  const [bool, setBool] = useState(false);

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
  const showPopup = () => {
    setBool(!bool);
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1>BOM 등록</h1>
          <input type="text" name="" id="" />
          <button>등록</button>
        </div>
        <div>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button onClick={showPopup}>추가</button>
          </div>
          {bool ? null : <Table />}
        </div>
      </div>
    </div>
  );
};

export default BOM_Add;
