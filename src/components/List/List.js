import React, { useState, useEffect } from 'react';
import styles from './List.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';
import { HyperFormula } from 'hyperformula';

const List = ({ name }) => {
  const [hotData, setHotData] = useState([]);
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const onclick = () => {
    setBool(!bool);
    // 중복 데이터 보여지게 하기
    axios
      .post('http://localhost:5000/bom/BomName', {
        bomname: name,
      })
      .then((response) => {
        console.log(response.data);
        response.data.map((data, index) => {
          data.total_amount = '=PRODUCT(D' + (index + 1) + ':E' + (index + 1) + ')';
        });
        setHotData(response.data);
      });
    console.log(hotData);
  };
  return (
    <div className={styles.list}>
      <div className={styles.name}>
        <span>{bool === false ? '|||' : 'X'}</span>
        <label onClick={onclick}>{name}</label>
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
            { data: 'material_code' },
            { data: 'classification' },
            { data: 'item_name' },
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'total_amount', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'update_date' },
            { data: 'user_name' },
          ]}
          formulas={{
            engine: hyperformulaInstance,
          }}
        />
      </div>
    </div>
  );
};
export default List;
