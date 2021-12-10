import React, { useEffect, useState } from 'react';
import styles from './Popup.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import axios from 'axios';

const Popup = ({ showPopup }) => {
  const column = ['체크', '코드', '분류', '품목명', '수량', '단가', '날짜', '이름'];
  const [hotdata, setHotdata] = useState([]);
  let date = [];

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response) => {
      console.log(response.data);
      setHotdata(response.data);
    });
  }, []);

  // 팝업 닫기
  const onclick = () => {
    showPopup();
  };

  //체크 박스
  const add = () => {
    hotdata.forEach((o) => {
      if (o[0] === true) {
        date.push(o);
      }
    });
    date.forEach((o) => {
      delete o['0'];
    });
    if (date.length === 0) {
      date = Handsontable.helper.createSpreadsheetData(1, 8);
    }

    showPopup(date);
  };
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>자재 추가</h1>
        <span onClick={onclick}>X</span>
      </div>
      <div className={styles.table}>
        <HotTable
          data={hotdata}
          colHeaders={column}
          rowHeaders={true}
          columns={[
            { type: 'checkbox' },
            { data: 'material_code' },
            { data: 'classification' },
            { data: 'item_name' },
            { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'unit_price', type: 'numeric', numericFormat: { pattern: '0,0' } },
            { data: 'update_date' },
            { data: 'user_name' },
          ]}
          width="100%"
          height="600"
          licenseKey="non-commercial-and-evaluation"
          stretchH="all"
          className="htCenter"
        />
      </div>
      <button onClick={add}>추가</button>
    </div>
  );
};

export default Popup;
