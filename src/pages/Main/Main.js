import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';

import { HotTable } from '@handsontable/react';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';

import axios from 'axios';

const Main = () => {
  const column = ['코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '작성자'];
  const check = ['PART', 'PBA', '반제품', '완제품'];
  const [table, setTable] = useState([]);
  const [table2, setTable2] = useState([]);
  let a;

  // 체크박스
  const checkValue = (checked) => {
    if (checked.check0 === false) {
      a = table.filter((data) => data.material_code[0] !== 'C');
      setTable(a);
    }
    if (checked.check1 === false) {
      a = table.filter((data) => data.material_code[0] !== 'P');
      setTable(a);
    }
    if (checked.check2 === false) {
      a = table.filter((data) => data.material_code[0] !== 'B');
      setTable(a);
    }
    if (checked.check3 === false) {
      a = table.filter((data) => data.material_code[0] !== 'F');
      setTable(a);
    }
    // 1
    if (checked.check0 === true && checked.check1 === false && checked.check2 === false && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'C');
      setTable(a);
    } else if (checked.check0 === false && checked.check1 === true && checked.check2 === false && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'P');
      setTable(a);
    } else if (checked.check0 === false && checked.check1 === false && checked.check2 === true && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'B');
      setTable(a);
    } else if (checked.check0 === false && checked.check1 === false && checked.check2 === false && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'F');
      setTable(a);
    }
    // 2 - 1
    if (checked.check0 === true && checked.check1 === true && checked.check2 === false && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'P');
      setTable(a);
    } else if (checked.check0 === true && checked.check1 === false && checked.check2 === true && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'B');
      setTable(a);
    } else if (checked.check0 === true && checked.check1 === false && checked.check2 === false && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'F');
      setTable(a);
    }
    // 2 - 2
    if (checked.check0 === false && checked.check1 === true && checked.check2 === true && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'P' || data.material_code[0] === 'B');
      setTable(a);
    } else if (checked.check0 === false && checked.check1 === true && checked.check2 === false && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'P' || data.material_code[0] === 'F');
      setTable(a);
    }
    // 2 - 3
    if (checked.check0 === false && checked.check1 === false && checked.check2 === true && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'B' || data.material_code[0] === 'F');
      setTable(a);
    }
    // 3
    if (checked.check0 === true && checked.check1 === true && checked.check2 === true && checked.check3 === false) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'P' || data.material_code[0] === 'B');
      setTable(a);
    } else if (checked.check0 === true && checked.check1 === true && checked.check2 === false && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'P' || data.material_code[0] === 'F');
      setTable(a);
    } else if (checked.check0 === true && checked.check1 === false && checked.check2 === true && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'C' || data.material_code[0] === 'B' || data.material_code[0] === 'F');
      setTable(a);
    } else if (checked.check0 === false && checked.check1 === true && checked.check2 === true && checked.check3 === true) {
      a = table2.filter((data) => data.material_code[0] === 'P' || data.material_code[0] === 'B' || data.material_code[0] === 'F');
      setTable(a);
    }
    // 4
    if (checked.check0 === true && checked.check1 === true && checked.check2 === true && checked.check3 === true) {
      a = table2.filter(
        (data) =>
          data.material_code[0] === 'C' || data.material_code[0] === 'P' || data.material_code[0] === 'B' || data.material_code[0] === 'F'
      );
      setTable(a);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      setTable(response.data);
      setTable2(response.data);
    });
  }, []);

  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} checkValue={checkValue} />
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
