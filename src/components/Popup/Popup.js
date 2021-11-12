import React, { useState } from 'react';
import styles from './Popup.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

const Popup = ({ showPopup }) => {
  const [colum, setColum] = useState(1);
  const hotData = Handsontable.helper.createSpreadsheetData(colum, 10);
  const onclick = () => {
    showPopup();
  };
  const add = () => {
    showPopup(hotData);
  };
  const addColum = () => {
    setColum(colum + 1);
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
          colHeaders={true}
          rowHeaders={true}
          width="100%"
          height="600"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
        />
      </div>
      <button onClick={add}>추가</button>
      <button onClick={addColum}>행 추가</button>
    </div>
  );
};

export default Popup;
