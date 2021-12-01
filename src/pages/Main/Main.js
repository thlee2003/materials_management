import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';

// import Search from '../../components/Search/Search';

import axios from 'axios';

const Main = () => {
  const column = ['코드', '분류', '품목명', '제조사', '수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
  const [table, setTable] = useState([]);
  console.log(table);

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      setTable(response.data);
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
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          readOnly
          columns={[
            { data: 'material_code' },
            { data: 'classification' },
            { data: 'item_name' },
            {},
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' }, width: '50px' },
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
