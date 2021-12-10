import React, { useState } from 'react';
import styles from './ProduceAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

import Sidebar from '../../components/Sidebar/Sidebar';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';
import axios from 'axios';

const ProduceAdd = ({ userName }) => {
  const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const [material_code, setMaterial_code] = useState('');
  const [name, setName] = useState('');
  const [select, setSelect] = useState('완제품');
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState('');
  const hyperformulaInstance = HyperFormula.buildEmpty();
  if (data === undefined) {
    setData(Handsontable.helper.createSpreadsheetData(1, column.length));
  }
  const links = [
    {
      to: '/ProduceList',
      name: '제품 목록',
    },
    {
      to: '/AddQuantity',
      name: '수량 추가',
    },
    {
      to: '/ProduceAdd',
      name: '제품 등록',
    },
  ];
  const showPopup = (date) => {
    setBool(!bool);
    if (date != undefined) {
      for (let i = 0; i < date.length; i++) {
        date[i].total_amount = '=PRODUCT(E' + (i + 1) + ':F' + (i + 1) + ')';
      }
      console.log(date);
      setData(date);
    }
  };
  const onclick = () => {
    if (name !== '' && price !== '' && material_code !== '') {
      axios
        .post('http://localhost:5000/product/product', {
          material_code: material_code,
          product_name: name,
          classification: select,
          price: price,
          quantity: 0,
          update_date: startDate,
          writer: userName,
        })
        .then((response) => {
          console.log(response.data.data);
          if (response.data.data === true) {
            alert('등록 완료');
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1 className={styles.h1}>제품 등록</h1>
          <button onClick={onclick}>등록</button>
        </div>
        <div className={styles.contents}>
          <div className={styles.info}>
            <h2>제품 정보</h2>
            <div className={styles.one}>
              <Input name={'제품명'} input={name} setInput={setName} />
              <div className={styles.date}>
                <p>날짜</p>
                <DatePicker
                  locale={ko}
                  dateFormat="yyyy년 MM월 dd일"
                  popperPlacement="top"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className={styles.one}>
              <div className={styles.input} name="a">
                <p>분류</p>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                  <option value="완제품(키트)">완제품(키트)</option>
                  <option value="완제품(본체)">완제품(본체)</option>
                  <option value="반제품">반제품</option>
                </select>
              </div>
              <Input name={'가격'} input={price} setInput={setPrice} />
            </div>
            <div className={styles.one}>
              <Input name={'코드'} input={material_code} setInput={setMaterial_code} />
            </div>
          </div>
          <div>
            <div className={styles.middle}>
              <h2>자재 목록</h2>
              <button onClick={showPopup}>추가</button>
            </div>
            {bool ? null : (
              <div className={styles.table}>
                <HotTable
                  className="htCenter"
                  data={data}
                  colHeaders={column}
                  rowHeaders={true}
                  width="100%"
                  height="100%"
                  licenseKey="non-commercial-and-evaluation"
                  stretchH="all"
                  formulas={{
                    engine: hyperformulaInstance,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceAdd;
