import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';

// import Search from '../../components/Search/Search';

import axios from 'axios';
import Handsontable from 'handsontable';

const Main = () => {
  const column = ['코드', '분류', '품목명', '제조사', '수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
  const [table, setTable] = useState([]);
  console.log(table);

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      if (response.data.length !== 0) {
        setTable(response.data);
      } else {
        setTable(Handsontable.helper.createSpreadsheetData(1, column.length));
      }
    });
  }, []);

  return (
    <div className="main">
      <div className={styles.header}>
        {/* <Search /> */}
        <input></input>
      </div>
      <div className={styles.content}>
        <HotTable
          className="htCenter"
          data={table}
          colHeaders={column}
          rowHeaders={true}
          width="100%"
          height="100%"
          selectionMode="multiple"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          readOnly
          columns={[
            { data: 'material_code', width: '40px' },
            { data: 'classification', width: '60px' },
            { data: 'item_name', width: '80px' },
            { width: '60px' },
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'total_amount', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'update_date', width: '60px' },
            { data: 'writer', width: '60px' },
          ]}
        />
      </div>
    </div>
  );
};

export default Main;
