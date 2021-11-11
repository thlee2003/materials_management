import React, { useState } from 'react';
import styles from './ProduceAdd.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';

const ProduceAdd = () => {
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState('');
  const [select, setSelect] = useState('완제품');

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
          <h2>제품 정보</h2>
          <div className={styles.one}>
            <Input name={'제품명'} input={name} setInput={setName} />
            <div className={styles.input} name="a">
              <p>분류</p>
              <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option value="완제품">완제품</option>
                <option value="반제품">반제품</option>
              </select>
            </div>
          </div>
          <div className={styles.one}>
            <Input name={'제품명'} input={name} setInput={setName} />
            <Input />
          </div>
        </div>
        <div>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button onClick={showPopup}>추가</button>
          </div>
          {bool ? null : <Table data={data} height={495} />}
        </div>
      </div>
    </div>
  );
};

export default ProduceAdd;
