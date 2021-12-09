import React, { useState } from 'react';
import styles from './AddAS.module.css';

import { HotTable } from '@handsontable/react';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';

const AddAS = () => {
  const [customer, setCustomer] = useState();
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '가격', '날짜', '이름', '주소', '연락처', 'e-mail'];
  let arr = ['', '', '', '', '', '', '', '', '', '', ''];
  const links = [
    {
      to: '/AS',
      name: 'AS 목록',
    },
    {
      to: '/AddAS',
      name: 'AS 등록',
    },
    {
      to: '/AddASMTL',
      name: '수리 내역',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.contents}>
        <h1 className={styles.h1}>AS 등록</h1>
        <h2 className={styles.h1}>선택</h2>
        <div className={styles.datalist}>
          <div>
            <label for="customer">구매자 연락처</label>
            <input type="text" list="list" id="customer" value={customer || ''} onChange={(e) => setCustomer(e.target.value)} />
            <datalist id="list">
              {data.sale.map((a) => {
                if (a[9] === customer) {
                  arr = a;
                  arr.pop();
                }
                return <option value={a[9]} />;
              })}
            </datalist>
          </div>
          <button className={styles.button}>등록</button>
        </div>
        <HotTable
          className="htCenter"
          data={[arr]}
          colHeaders={column}
          rowHeaders={true}
          width="100%"
          height="530"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
        />
      </div>
    </div>
  );
};

export default AddAS;
