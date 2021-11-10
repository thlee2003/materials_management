import React, { useState } from 'react';
import styles from './ProduceAdd.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Popup from '../../components/Popup/Popup';

const ProduceAdd = () => {
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const links = [
    {
      to: '/ProduceList',
      name: '제품 목록',
    },
    {
      to: '/ProduceAdd',
      name: '제품 등록',
    },
  ];
  const showPopup = (hotData) => {
    setBool(!bool);
    setData(hotData);
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1 className={styles.h1}>제품 등록</h1>
          <button>등록</button>
        </div>
        <div className={styles.info}>
          <div className={styles.inp1}>
            <div>
              <input type="text" name="" id="" />
            </div>
            <div>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.inp2}>
            <div>
              <input type="text" name="" id="" />
            </div>
            <div>
              <input type="text" name="" id="" />
            </div>
          </div>
        </div>
        <div>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button onClick={showPopup}>추가</button>
          </div>
          {bool ? null : <Table data={data} height={570} />}
        </div>
      </div>
    </div>
  );
};

export default ProduceAdd;
