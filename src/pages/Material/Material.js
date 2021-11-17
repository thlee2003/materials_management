import React, { useState } from 'react';
import styles from './Material.module.css';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';
import e from 'cors';

const Material = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [a, setA] = useState(1);
  const [bool, setBool] = useState(true);
  const hotData = Handsontable.helper.createSpreadsheetData(a, column.length);
  const addCell = () => {
    setA(a + 1);
  };

  const addDB = () => {
    for (let i = 0; i < hotData.length; i++) {
      if (
        hotData[i].indexOf(`A${i + 1}`) !== -1 ||
        hotData[i].indexOf(`B${i + 1}`) !== -1 ||
        hotData[i].indexOf(`C${i + 1}`) !== -1 ||
        hotData[i].indexOf(`D${i + 1}`) !== -1 ||
        hotData[i].indexOf(`E${i + 1}`) !== -1 ||
        hotData[i].indexOf(`F${i + 1}`) !== -1 ||
        hotData[i].indexOf(`G${i + 1}`) !== -1 ||
        hotData[i].indexOf(`H${i + 1}`) !== -1
      ) {
        setBool(false);
        break;
      } else {
        setBool(true);
      }
    }
    if (bool === true) {
      axios
        .post('http://localhost:5000/material', {
          abc: hotData.length,
          array: hotData,
        })
        .then(() => {
          alert('등록 완료!');
        });
    } else {
      alert('정보를 입력하세요');
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
            height="735"
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
            // // readOnly
            // columns={[
            //   {},{},{},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{type: 'numeric'},{}
            // ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Material;
