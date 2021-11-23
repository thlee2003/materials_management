import React, { useState } from 'react';
import styles from './ProduceAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Sidebar from '../../components/Sidebar/Sidebar';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';

const ProduceAdd = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState('');
  const [select, setSelect] = useState('완제품');
  const [startDate, setStartDate] = useState(new Date());
  if (data == undefined) {
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
    setData(date);
  };
  const onclick = () => {
    setName('');
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
                  <option value="완제품">완제품</option>
                  <option value="반제품">반제품</option>
                </select>
              </div>
              {/* <Input name={'작성자'} input={writer} setInput={setWriter} /> */}
            </div>
          </div>
          <div className={styles.table}>
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
                  height={400}
                  licenseKey="non-commercial-and-evaluation"
                  stretchH="all"
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
