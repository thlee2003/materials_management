import React from 'react';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import styles from './Table.module.css';

const Table = ({ data, height, column }) => {
  let hotData = [];
  if (data && data.length > 0) {
    data.map((a) => hotData.push(a));
    console.log(hotData);
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, 10);
  }
  return (
    <div className={styles.div}>
      <HotTable
        data={hotData}
        colHeaders={column}
        rowHeaders={true}
        width="100%"
        height={height}
        licenseKey="non-commercial-and-evaluation"
        stretchH="all"
      />
    </div>
  );
};

export default Table;
