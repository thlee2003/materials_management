import React from 'react';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import styles from './Table.module.css';

const Table = () => {
  const hotData = Handsontable.helper.createSpreadsheetData(60, 10);
  return (
    <div className={styles.div}>
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
  );
};

export default Table;
