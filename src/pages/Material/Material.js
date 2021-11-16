import React, { useState } from 'react';
import styles from './Material.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

const Material = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [a, setA] = useState(1);
  const hotData = Handsontable.helper.createSpreadsheetData(a, column.length);
  const addCell = () => {
    setA(a + 1);
  };
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>자재 등록</h1>
          <div className={styles.button}>
            <button onClick={addCell}>행 추가</button>
            <button>등록</button>
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
            // readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Material;
