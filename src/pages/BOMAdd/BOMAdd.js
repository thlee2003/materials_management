import React, { useState } from 'react';
import styles from './BOMAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';

const BOMAdd = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const a = [];
  const links = [
    {
      to: '/BOMList',
      name: 'BOM 목록',
    },
    {
      to: '/BOMAdd',
      name: 'BOM 등록',
    },
  ];
  const showPopup = (hotData) => {
    setBool(!bool);
    a.push(hotData);
    console.log(a, hotData);
    setData(hotData);
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1>BOM 등록</h1>
          <button onClick={onclick}>등록</button>
        </div>
        <div className={styles.contents}>
          <div className={styles.info}>
            <h2>BOM 정보</h2>
            <div className={styles.one}>
              <Input name={'BOM 명'} input={name} setInput={setName} />
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
          </div>
          <div className={styles.table}>
            <div className={styles.middle}>
              <h2>자재 목록</h2>
              <button onClick={showPopup}>추가</button>
            </div>
            {bool ? null : <Table data={data} height={500} column={column} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOMAdd;
