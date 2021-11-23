import React, { useState } from 'react';
import styles from './Material.module.css';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';
import e from 'cors';

const Material = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [a, setA] = useState(1);
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const hotData = Handsontable.helper.createSpreadsheetData(a, column.length);
  hotData.forEach((a) => {
    a[6] = `${year}-${month}-${day}`;
    a[7] = '구건우';
  });
  const addCell = () => {
    setA(a + 1);
  };
  const addDB = () => {
    axios
      .post('http://localhost:5000/material/info', {
        abc: hotData.length,
        array: hotData,
      })
      .then(() => {
        alert('등록 완료!');
      });
  };
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>자재 등록</h1>
          <div className={styles.button}>
            <button onClick={addCell}>행 추가</button>
            <button onClick={addDB}>등록</button>
          </div>
        </div>
        <div className={styles.table}>
          <HotTable
            className="htCenter"
            data={hotData}
            colHeaders={column}
            rowHeaders={true}
            width="100%"
            height="735"
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
            columns={[
              {},
              {},
              {},
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              {},
              {},
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Material;
