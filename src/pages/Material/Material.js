import React, { useState } from 'react';
import styles from './Material.module.css';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';

const Material = ({ userName }) => {
  console.log(userName);
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [a, setA] = useState(1);
  let bool;
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const hotData = Handsontable.helper.createSpreadsheetData(a, column.length);
  hotData.forEach((a) => {
    a[6] = `${year}-${month}-${day}`;
    a[7] = userName;
  });
  const addCell = () => {
    setA(a + 1);
  };
  const addDB = () => {
    hotData.forEach((data, index) => {
      if (
        data[0] === `A${index + 1}` ||
        data[1] === `B${index + 1}` ||
        data[2] === `C${index + 1}` ||
        data[3] === `D${index + 1}` ||
        data[4] === `E${index + 1}` ||
        data[5] === `F${index + 1}`
      ) {
        bool = false;
      } else {
        bool = true;
      }
    });
    console.log(bool);
    if (bool === true) {
      axios
        .post('http://localhost:5000/material/info', {
          abc: hotData.length,
          array: hotData,
        })
        .then(() => {
          alert('등록 완료!');
        });
    } else {
      alert('올바르게 입력하세요');
    }
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
            height="100%"
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
            columns={[
              {},
              {},
              {},
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { readOnly: true },
              { readOnly: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Material;
