import React, { useState } from 'react';
import styles from './AddQuantity.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';

const AddQuantity = () => {
  const [datalist, setDatalist] = useState('');
  const [add, setAdd] = useState(0);
  let q = 0;
  const links = [
    {
      to: '/ProduceList',
      name: '제품 목록',
    },
    {
      to: '/AddQuantity',
      name: '수량 추가',
    },
    {
      to: '/ProduceAdd',
      name: '제품 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>수량 추가</h1>
        <div className={styles.datalist}>
          <h2>제품 선택</h2>
          <label for="numbers">제품명</label>
          <input type="text" list="list" id="numbers" value={datalist} onChange={(e) => setDatalist(e.target.value)} />
          <datalist id="list">
            {data.produce.map((a) => {
              if (a[2] === datalist) {
                q = a[3];
              }
              return <option value={a[2]} />;
            })}
          </datalist>
        </div>
        <div className={styles.addQuantity}>
          <h2>수량 추가</h2>
          <div>
            <label>현재 수량</label>
            <input type="text" value={q} />
          </div>
          <div className={styles.input}>
            <label>추가 수량</label>
            <input type="number" value={add} onChange={(e) => setAdd(e.target.value)} />
          </div>
          <button>추가</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuantity;
