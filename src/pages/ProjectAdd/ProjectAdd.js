import React, { useState } from 'react';
import styles from './ProjectAdd.module.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Sidebar from '../../components/Sidebar/Sidebar';
import Popup from '../../components/Popup/Popup';
import Input from '../../components/Input/Input';
import axios from 'axios';

const ProjectAdd = () => {
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
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

  const showPopup = (hotData) => {
    setBool(!bool);
    setData(hotData);
    console.log(data);
  };

  const onclick = () => {
    axios
      .post('http://localhost:5000/project/info', {
        ProjectName: name,
      })
      .then(() => {
        alert('등록 완료!');
      });
    console.log(name);
  };

  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
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
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
