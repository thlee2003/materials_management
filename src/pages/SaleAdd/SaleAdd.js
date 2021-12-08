import React, { useEffect, useState } from 'react';
import styles from './SaleAdd.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Input from '../../components/Input/Input';

// 테이블 생성 함수
let hot;
const table = () => {
  const column = [
    '코드',
    '제품명',
    '시리얼코드',
    '판매 방법',
    '수량',
    '판매가격',
    '가격(총금액)',
    '주문 날짜',
    '이름',
    '주소',
    '연락처',
    'e-mail',
  ];
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const container = document.getElementById('table');
  const hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', '', '', '', '', '']];

  // 테이블 옵션
  hot = new Handsontable(container, {
    className: 'htCenter',
    data: hotData,
    colHeaders: column,
    rowHeaders: true,
    width: '100%',
    height: '100%',
    stretchH: 'all',
    fixedRowsBottom: 1,
    formulas: {
      engine: hyperformulaInstance,
      sheetName: 'Sheet1',
    },
    licenseKey: 'non-commercial-and-evaluation',
  });

  let num = hot.countRows();
  // 합계
  hot.alter('insert_row', hot.countRows());
  hot.setDataAtCell(hot.countRows() - 1, 6, '=SUM(G1:G' + (hot.countRows() - 1) + ')');
};

const SaleAdd = () => {
  // 테이블 삽입
  useEffect(() => {
    table();
  });
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [prodName, setProdName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [select, setSelect] = useState('판매');
  const [price, setPrice] = useState('');
  const [serial, setSerial] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '가격(총금액)', '주문 날짜', '이름', '주소', '연락처', 'e-mail'];
  const hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  const links = [
    {
      to: '/SaleList',
      name: '판매 목록',
    },
    {
      to: '/SaleAdd',
      name: '판매 등록',
    },
  ];
  const onclick = () => {
    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
    setCompany('');
    setNumber('');
    setProdName('');
    setQuantity('');
    setPrice('');
    setSerial('');
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>판매 등록</h1>
          <button onClick={onclick}>등록</button>
        </div>
        <div className={styles.contents}>
          {/* 구매자 정보 */}
          <div className={styles.buyer}>
            <h2>구매자 정보</h2>
            <div className={styles.one}>
              <Input name={'이름'} input={name} setInput={setName} />
              <Input name={'주소'} input={address} setInput={setAddress} />
              <Input name={'연락처'} input={phone} setInput={setPhone} />
            </div>
            <div className={styles.one}>
              <Input name={'e-mail'} input={email} setInput={setEmail} />
              <Input name={'기관/회사명'} input={company} setInput={setCompany} />
              <Input name={'사업자번호'} input={number} setInput={setNumber} />
            </div>
          </div>
          <div className={styles.product}>
            {/* 제품 정보 */}
            <div className={styles.middle}>
              <h2>신규 자재</h2>
              <button>행 추가</button>
            </div>
            <div className={styles.one}>
              <div className={styles.input} name="b">
                <p>판매 방법</p>
                <select value={prodName} onChange={(e) => setProdName(e.target.value)}>
                  <option value="베이직키트">베이직키트</option>
                  <option value="스탠다드키트">스탠다드키트</option>
                  <option value="프리미엄키트">프리미엄키트</option>
                </select>
              </div>
              <Input name={'수량'} input={quantity} setInput={setQuantity} />
              <div className={styles.input} name="a">
                <p>판매 방법</p>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                  <option value="판매">판매</option>
                  <option value="대여">대여</option>
                </select>
              </div>
            </div>
            <div className={styles.one}>
              <Input name={'가격'} input={price} setInput={setPrice} />
              <Input name={'시리얼코드'} input={serial} setInput={setSerial} />
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
              <p>비고</p>
              <textarea></textarea>
            </div>
            <div className={styles.table}>
              <div id="table"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleAdd;
