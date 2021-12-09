import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';
import { HyperFormula } from 'hyperformula';

// import Search from '../../components/Search/Search';

import axios from 'axios';
import Handsontable from 'handsontable';

const Main = () => {
  const column = ['코드', '분류', '품목명', '제조사', '수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
  const [table, setTable] = useState([]);
  const hyperformulaInstance = HyperFormula.buildEmpty();

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      console.log(response.data);
      if (response.data.length !== 0) {
        response.data.map((data, index) => {
          data.total_amount = '=PRODUCT(E' + (index + 1) + ':F' + (index + 1) + ')';
        });
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
            { data: 'manufacturer', width: '60px' },
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'total_amount', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '60px' },
            { data: 'update_date', width: '60px' },
            { data: 'user_name', width: '60px' },
          ]}
          formulas={{ engine: hyperformulaInstance, sheetName: 'Sheet1' }}
        />
      </div>
    </div>
  );
};

export default Main;
