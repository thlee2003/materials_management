import React, { useState, useEffect } from 'react';
import styles from './List.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import axios from 'axios';

const List = ({ name, data }) => {
  // let hotData = [];
  const [hotData,setHotData] = useState([])
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const onclick = () => {
    setBool(!bool);
    // 중복 데이터 보여지게 하기
    axios.post('http://localhost:5000/bom/BomName', {
      bomname: name,
    }).then((response) => {
      console.log(response.data)
      setHotData(response.data)
    }) 
    console.log(hotData);
  };
  return (
    <div className={styles.list} onClick={onclick}>
      <div className={styles.name}>
        <span>{bool === false ? '|||' : 'X'}</span>
        <label>{name}</label>
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
            {},
            {},
            {},
            { type: 'numeric', numericFormat: { pattern: '0,0' } },
            { type: 'numeric', numericFormat: { pattern: '0,0' } },
            { type: 'numeric', numericFormat: { pattern: '0,0' } },
            {},
            {},
          ]}
        />
      </div>
    </div>
  );
};
export default List;
