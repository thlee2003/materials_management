import React, { useState } from 'react';
import styles from './BOMAdd.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Input from '../../components/Input/Input';
import axios from 'axios';

const BOMAdd = () => {
  const [low, setLow] = useState(1);
  const column = ['코드', '분류', '품목명', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const hotData = Handsontable.helper.createSpreadsheetData(low, column.length);
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
  const addLow = () => {
    setLow(low + 1);
  };
  const onclick = () => {
    axios
      .post('http://localhost:5000/bom/info', {
        BomName: name,
        Data: hotData,
        length: hotData.length,
        date: startDate,
      })
      .then((response) => {
        if(response.data.data == 'false') {
          alert('해당 BOM 명은 현재 등록되어 있습니다.')
        } else {
          alert('등록 완료되었습니다.');
        }
      });
    console.log(name);

    axios.post('http://localhost:5000/bom/BomData', {
      BomData: name,
    });
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
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
          <div>
            <div className={styles.middle}>
              <h2>자재 목록</h2>
              <button onClick={addLow}>행 추가</button>
            </div>
            <div className={styles.table}>
              <HotTable
                className="htCenter"
                data={hotData}
                colHeaders={column}
                rowHeaders={true}
                width="100%"
                height="100%"
                licenseKey="non-commercial-and-evaluation"
                stretchH="all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOMAdd;
