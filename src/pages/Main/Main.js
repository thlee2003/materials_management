import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';

import data from '../../data.json';
import axios from 'axios';

const Main = () => {
  const column = ['코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '작성자'];
  const check = ['PART', 'PBA', '반제품', '완제품'];
  const [table, setTable] = useState([]);
  let hotData = [];
  if (data) {
    data.main.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      console.log(response.data);
      setTable(response.data);
    });
  }, []);

  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} />
      </div>
      <div className={styles.content}>
        <HotTable
          className="htCenter"
          data={table}
          colHeaders={column}
          rowHeaders={true}
          width="100%"
          height="760"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          readOnly
          columns={[
            { data: 'material_code' },
            { data: 'classification' },
            { data: 'item_name' },
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'total_amount', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'update_date' },
            { data: 'writer' },
          ]}
        />
      </div>
    </div>
  );
};

export default Main;
