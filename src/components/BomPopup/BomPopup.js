import React, { useEffect, useState } from 'react';
import styles from './BomPopup.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import BomList from '../../components/BomList/BomList';

import axios from 'axios';

let arr = [];
const BomPopup = ({ showPopup }) => {
  const column = ['체크', '코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '이름'];
  const [bomList, usebomList] = useState([{ bom_name: '없음' }]);
  let date = [];

  useEffect(() => {
    axios.get('http://localhost:5000/bom/BomData').then((response) => {
      console.log(response.data);
      usebomList(response.data);
    });
  }, []);

  // 팝업 닫기
  const onclick = () => {
    arr = [];
    showPopup();
  };

  //체크 박스
  const add = () => {
    console.log(arr);
    showPopup(arr);
    arr = [];
  };

  const check = (arr) => {
    console.log(arr);
  };
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>BOM 추가</h1>
        <span onClick={onclick}>X</span>
      </div>
      <div className={styles.table}>
        {bomList.map((a, index) => (
          <div className={styles.choose}>
            <BomList key={index + 1} name={a.bom_name} arr={arr} check={check} />
          </div>
        ))}
      </div>
      <button onClick={add}>추가</button>
    </div>
  );
};

export default BomPopup;
