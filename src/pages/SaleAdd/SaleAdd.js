import React, { useState } from 'react';
import styles from './SaleAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Input from '../../components/Input/Input';

const SaleAdd = () => {
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
            </div>
            <div className={styles.one}>
              <Input name={'연락처'} input={phone} setInput={setPhone} />
              <Input name={'e-mail'} input={email} setInput={setEmail} />
            </div>
            <div className={styles.one}>
              <Input name={'기관/회사명'} input={company} setInput={setCompany} />
              <Input name={'사업자번호'} input={number} setInput={setNumber} />
            </div>
          </div>
          <div className={styles.product}>
            {/* 제품 정보 */}
            <h2>제품</h2>
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
            </div>
            <div className={styles.one}>
              <div className={styles.input} name="a">
                <p>판매 방법</p>
                <select value={select} onChange={(e) => setSelect(e.target.value)}>
                  <option value="판매">판매</option>
                  <option value="대여">대여</option>
                </select>
              </div>
              <Input name={'가격'} input={price} setInput={setPrice} />
            </div>
            <div className={styles.one}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaleAdd;
