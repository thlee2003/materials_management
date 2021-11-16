import React from 'react';
import styles from './Popup.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

const Popup = ({ showPopup }) => {
  const column = ['a', '코드', '분류', '품목명', '수량', '단가', '총금액', '날짜'];
  const hotData = Handsontable.helper.createSpreadsheetData(60, column.length);
  const onclick = () => {
    showPopup();
  };
  const add = () => {
    showPopup(hotData);
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
          width="100%"
          height="600"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
        />
      </div>
      <button onClick={add}>추가</button>
    </div>
  );
};

export default Popup;
