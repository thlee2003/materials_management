import React, { useEffect, useState } from 'react';
import styles from './SaleAdd.module.css';

import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Input from '../../components/Input/Input';

// 테이블 생성 함수
let hot, hotData;
let _prodName = '',
  _serial = '',
  _select = '',
  _quantity = 0,
  _price = 0,
  _date;
const table = () => {
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '판매가격', '가격(총금액)', '주문 날짜'];
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const container = document.getElementById('table');
  // hotData = [[]];
  hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', '']];

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

  // 추가
  let add = document.querySelector('.add');
  add.addEventListener('click', function () {
    console.log(num, hot.countRows());
    if (num === 1) {
      if (_serial !== '' && _price !== 0 && _quantity !== 0) {
        let data = ['', _prodName, _serial, _select, _quantity, _price, '=PRODUCT(E1:F1)', _date];
        for (let i = 0; i < 8; i++) {
          hot.setDataAtCell(hot.countRows() - 2, i, data[i]);
        }
        num += 1;
      }
    } else {
      if (_serial !== '' && _price !== 0 && _quantity !== 0) {
        let data = [
          '',
          _prodName,
          _serial,
          _select,
          _quantity,
          _price,
          '=PRODUCT(E' + hot.countRows() + ':F' + hot.countRows() + ')',
          _date,
        ];
        console.log(data);
        hot.alter('insert_row', hot.countRows() - 1, 1);
        for (let i = 0; i < 8; i++) {
          hot.setDataAtCell(hot.countRows() - 2, i, data[i]);
        }
        num += 1;
      }
    }
  });
};

const SaleAdd = () => {
  // 테이블 삽입
  useEffect(() => {
    table();
  }, []);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber] = useState('');
  const [prodName, setProdName] = useState('베이직키트');
  const [quantity, setQuantity] = useState('');
  const [select, setSelect] = useState('판매');
  const [price, setPrice] = useState('');
  const [serial, setSerial] = useState('');
  const [startDate, setStartDate] = useState(new Date());

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
    hotData.pop();
    console.log(hotData);
    console.log(name, address, phone, email, company, number);
    // setName('');
    // setAddress('');
    // setPhone('');
    // setEmail('');
    // setCompany('');
    // setNumber('');
    // setQuantity('');
    // setPrice('');
    // setSerial('');
    // hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', '']];
  };
  useEffect(() => {
    let year, month, day;
    let date = startDate.toString().split(' ');
    year = date[3];
    if (date[1] === 'Jan') {
      month = 1;
    } else if (date[1] === 'Feb') {
      month = 2;
    } else if (date[1] === 'Mar') {
      month = 3;
    } else if (date[1] === 'Apr') {
      month = 4;
    } else if (date[1] === 'May') {
      month = 5;
    } else if (date[1] === 'Jun') {
      month = 6;
    } else if (date[1] === 'Jul') {
      month = 7;
    } else if (date[1] === 'Aug') {
      month = 8;
    } else if (date[1] === 'Sep') {
      month = 9;
    } else if (date[1] === 'Oct') {
      month = 10;
    } else if (date[1] === 'Nov') {
      month = 11;
    } else if (date[1] === 'Dec') {
      month = 12;
    }
    day = date[2];
    date = `${year}-${month}-${day}`;
    _prodName = prodName;
    _serial = serial;
    _select = select;
    _quantity = +quantity;
    _price = +price;
    _date = date;
  }, [prodName, serial, select, quantity, price, startDate]);
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
              <h2>제품</h2>
              <button className="add">추가</button>
            </div>
            <div className={styles.one}>
              <div className={styles.input} name="b">
                <p>제품</p>
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
