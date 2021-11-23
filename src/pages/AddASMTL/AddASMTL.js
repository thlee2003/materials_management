import React, { useState } from 'react';
import styles from './AddASMTL.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Popup from '../../components/Popup/Popup';

import date from '../../data.json';

const AddASMTL = () => {
  const [customer, setCustomer] = useState();
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '날짜', '이름', '주소', '연락처'];
  const column2 = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [data, setData] = useState();
  const [bool, setBool] = useState(false);
  let arr = ['', '', '', '', '', '', '', '', '', '', ''];
  if (data == undefined) {
    setData(Handsontable.helper.createSpreadsheetData(1, column.length));
  }
  const links = [
    {
      to: '/AS',
      name: 'AS',
    },
    {
      to: '/AddAS',
      name: 'AS 등록',
    },
    {
      to: '/AddASMTL',
      name: 'AS 자재 추가',
    },
  ];
  const showPopup = (hotData) => {
    setBool(!bool);
    setData(hotData);
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.contents}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <h1 className={styles.h1}>AS 등록</h1>
        <h2 className={styles.h1}>선택</h2>
        <div className={styles.datalist}>
          <div>
            <label for="customer">구매자 연락처</label>
            <input type="text" list="list" id="customer" value={customer || ''} onChange={(e) => setCustomer(e.target.value)} />
            <datalist id="list">
              {date.AS.map((a) => {
                if (a[8] === customer) {
                  arr = a;
                  arr.pop();
                }
                return <option value={a[8]} />;
              })}
            </datalist>
          </div>
          <button className={styles.button}>등록</button>
        </div>

        <HotTable
          className="htCenter"
          data={[arr]}
          colHeaders={bool ? false : column}
          rowHeaders={!bool}
          width="100%"
          height="100"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
        />
        <div className={styles.table}>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button onClick={showPopup}>추가</button>
          </div>
          {bool ? null : (
            <div className={styles.table}>
              <HotTable
                className="htCenter"
                data={data}
                colHeaders={column}
                rowHeaders={true}
                width="100%"
                height={370}
                licenseKey="non-commercial-and-evaluation"
                stretchH="all"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddASMTL;
