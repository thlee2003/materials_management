import React, { useState } from 'react';
import styles from './List.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

const List = ({ name, data }) => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const onclick = () => {
    setBool(!bool);
  };
  let hotData = [];
  if (data) {
    data.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }
  return (
    <div className={styles.list} onClick={onclick}>
      <div className={styles.name}>
        <span>{bool === false ? '|||' : 'X'}</span>
        <label>{name}</label>
      </div>
      <div className={bool === true ? styles.container.show : styles.container}>
        <HotTable
          className="htCenter"
          data={hotData}
          colHeaders={column}
          rowHeaders={true}
          width="100%"
          height="auto"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          readOnly
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
  );
};
export default List;
