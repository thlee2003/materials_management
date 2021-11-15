import React from 'react';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import styles from './Table.module.css';

const Table = ({ data, height, column }) => {
  let hotData = [];
  // console.log('data:', data);
  if (data) {
    data.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }
  return (
    <div className={styles.div}>
      <HotTable
        className="htCenter"
        data={hotData}
        colHeaders={column}
        rowHeaders={true}
        width="100%"
        height={height}
        licenseKey="non-commercial-and-evaluation"
        stretchH="all"
        // readOnly
      />
    </div>
  );
};

export default Table;
