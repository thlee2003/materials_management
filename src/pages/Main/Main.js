import React from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';

import data from '../../data.json';

const Main = () => {
  const column = ['코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '작성자'];
  const check = ['PART', 'PBA', '반제품', '완제품'];
  let hotData = [];
  if (data) {
    data.main.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }
  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} />
      </div>
      <div className={styles.content}>
        <HotTable
          className="htCenter"
          data={hotData}
          colHeaders={column}
          rowHeaders={true}
          width="100%"
          height="760"
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

export default Main;
