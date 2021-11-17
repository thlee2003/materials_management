import React from 'react';
import styles from './Popup.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import data from '../../data.json';

const Popup = ({ showPopup }) => {
  const column = ['선택', '코드', '분류', '품목명', '수량', '단가', '총금액', '날짜'];
  const hotData = data.a;
  let date = [];
  const onclick = () => {
    showPopup();
  };
  const add = () => {
    hotData.forEach((o) => {
      if (o[0] === true) {
        date.push(o);
      }
    });
    date.forEach((o) => {
      delete o['0'];
    });
    if (date.length === 0) {
      date = Handsontable.helper.createSpreadsheetData(1, 8);
    }
    showPopup(date);
  };
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>자재 추가</h1>
        <span onClick={onclick}>X</span>
      </div>
      <div className={styles.table}>
        <HotTable
          data={hotData}
          colHeaders={column}
          rowHeaders={true}
          columns={[
            { type: 'checkbox' },
            { data: '코드' },
            { data: '분류' },
            { data: '품목명' },
            { data: '수량' },
            { data: '단가' },
            { data: '총금액' },
            { data: '날짜' },
          ]}
          width="100%"
          height="600"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          className="htCenter"
        />
      </div>
      <button onClick={add}>추가</button>
    </div>
  );
};

export default Popup;
