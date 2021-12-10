import React, { useState } from 'react';
import styles from './ProjectAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Sidebar from '../../components/Sidebar/Sidebar';
import BomPopup from '../../components/BomPopup/BomPopup';
import Input from '../../components/Input/Input';
import List from '../../components/List/List';
import axios from 'axios';

let array = [];
const ProjectAdd = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  if (data === undefined) {
    setData(Handsontable.helper.createSpreadsheetData(1, column.length));
  }
  const links = [
    {
      to: '/ProjectList',
      name: '프로젝트 목록',
    },
    {
      to: '/ProjectAdd',
      name: '프로젝트 등록',
    },
  ];

  const showPopup = (arr) => {
    setBool(!bool);
    console.log(Array.isArray(arr));
    if (Array.isArray(arr)) {
      setData(arr);
    }
  };

  const list = data.map((name) => <List name={name} />);

  const onclick = () => {
    console.log(data);
    axios
      .post('http://localhost:5000/project/info', {
        ProjectName: name,
        date: startDate,
        bom: data,
        length: data.length,
      })
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data === true) {
          alert('등록 완료!');
          window.location.reload();
        }
      });
    // console.log(name);
  };

  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <BomPopup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1>프로젝트 등록</h1>
          <button onClick={onclick}>등록</button>
        </div>
        <div className={styles.contents}>
          <div className={styles.info}>
            <h2>프로젝트 정보</h2>
            <div className={styles.one}>
              <Input name={'프로젝트 명'} input={name} setInput={setName} />
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
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
