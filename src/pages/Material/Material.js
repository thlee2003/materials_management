import React, { useEffect, useState } from 'react';
import styles from './Material.module.css';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';

const Material = ({ userName }) => {
  const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
  const [a, setA] = useState(1);
  const [data, setData] = useState();
  let bool;
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  const hotData = Handsontable.helper.createSpreadsheetData(a, column.length);
  hotData.forEach((a) => {
    a[7] = `${year}-${month}-${day}`;
    a[8] = userName;
  });
  useEffect(() => {
    if (data !== undefined) {
      for (let i = 0; i < data.length; i++) {
        console.log(hotData[i]);
      }
    }
  }, [hotData]);
  const addCell = () => {
    setData(hotData);
    setA(a + 1);
  };
  const delCell = () => {
    if (a !== 1) {
      setA(a - 1);
    }
  };
  const addDB = () => {
    hotData.forEach((data, index) => {
      if (
        data[0] === `A${index + 1}` ||
        data[1] === `B${index + 1}` ||
        data[2] === `C${index + 1}` ||
        data[3] === `D${index + 1}` ||
        data[4] === `E${index + 1}` ||
        data[5] === `F${index + 1}` ||
        data[6] === `F${index + 1}`
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
            <button onClick={delCell}>행 삭제</button>
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
              {},
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { width: '50px', type: 'numeric', numericFormat: { pattern: '0,0' } },
              { type: 'numeric', numericFormat: { pattern: '0,0' } },
              { readOnly: true },
              { readOnly: true },
            ]}
            // fixedRowsBottom="1"
            // formulas={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Material;
