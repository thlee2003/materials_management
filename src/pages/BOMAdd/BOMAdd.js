import React, { useEffect, useState } from 'react';
import styles from './BOMAdd.module.css';

import Handsontable from 'handsontable';
import { HotTable } from '@handsontable/react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

import Sidebar from '../../components/Sidebar/Sidebar';
import Input from '../../components/Input/Input';
import Popup from '../../components/Popup/Popup';

import axios from 'axios';
import { HyperFormula } from 'hyperformula';

// 테이블 생성 함수
let hot1;
let newData;
const table = () => {
  const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const container1 = document.getElementById('newTable');
  let header = true;

  // 날짜 생성
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  // 셀헤더 가리기
  let matAdd = document.querySelector('.matAdd');
  matAdd.addEventListener('click', function () {
    header = false;
  });
  console.log(header);
  const hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', `${year}-${month}-${day}`, 'admin']];

  // 테이블 옵션
  // 신규 자재
  hot1 = new Handsontable(container1, {
    className: 'htCenter',
    data: hotData,
    colHeaders: column,
    rowHeaders: true,
    width: '100%',
    height: '100%',
    licenseKey: 'non-commercial-and-evaluation',
    stretchH: 'all',
    columns: [
      {},
      {},
      {},
      {},
      { type: 'numeric' },
      { type: 'numeric' },
      { type: 'numeric', readOnly: true },
      { readOnly: true },
      { readOnly: true },
    ],
    formulas: {
      engine: hyperformulaInstance,
      sheetName: 'Sheet1',
    },
  });

  // 셀 추가
  let num = hot1.countRows();
  let add = document.querySelector('.add');
  add.addEventListener('click', function () {
    let data = [
      '',
      '',
      '',
      '',
      0,
      0,
      '=PRODUCT(E' + (hot1.countRows() + 1) + ':F' + (hot1.countRows() + 1) + ')',
      `${year}-${month}-${day}`,
      'admin',
    ];
    hot1.alter('insert_row', hot1.countRows(), 1);
    for (let i = 0; i < 9; i++) {
      hot1.setDataAtCell(hot1.countRows() - 1, i, data[i]);
    }
    num += 1;
  });

  // 업데이트
  hot1.updateSettings({
    afterSetDataAtCell: function (i) {
      newData = hotData;
    },
  });
};

const BOMAdd = () => {
  // 테이블 삽입
  useEffect(() => {
    table();
  }, []);
  const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가', '총금액', '날짜', '작성자'];
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [bool, setBool] = useState(false);
  const [data, setData] = useState();
  const hyperformulaInstance = HyperFormula.buildEmpty();

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
  const showPopup = (date) => {
    setBool(!bool);
    if (date !== undefined) {
      for (let i = 0; i < date.length; i++) {
        date[i].total_amount = '=PRODUCT(E' + (i + 1) + ':F' + (i + 1) + ')';
      }
    }
    setData(date);
  };
  if (data === undefined) {
    setData(Handsontable.helper.createSpreadsheetData(1, column.length));
  }
  const enrollment = () => {
    let checked = true;
    if (name === '') {
      checked = false;
    }
    if (newData === undefined) {
      // 기존 자재 비교
      data.forEach((data) => {
        if (
          data[0] === 'A1' ||
          data[0] === 'B1' ||
          data[0] === 'C1' ||
          data[0] === 'D1' ||
          data[0] === 'E1' ||
          data[0] === 'F1' ||
          data[0] === 'G1' ||
          data[0] === 'H1' ||
          data[0] === 'I1'
        ) {
          checked = false;
        }
      });
    } else {
      // 신규 자재 비교
      newData.forEach((data) => {
        if (data[0] === '' || data[1] === '' || data[2] === '' || data[3] === 0 || data[4] === 0) {
          checked = false;
        }
      });
    }

    if (checked) {
      let oldData = [];
      data.map((data) => {
        const target = Object.values(data);
        oldData.push(target);
      });
      console.log(oldData, newData);
      axios
        .post('http://localhost:5000/bom/info', {
          BomName: name,
          Data: oldData,
          length1: data.length,
          date: startDate,
        })
        .then((response) => {
          if (response.data.data1 === 'false') {
            alert('동일한 BOM 이름이 존재합니다.');
          } else {
            alert('등록 완료!');
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
          <h1>BOM 등록</h1>
          <button onClick={enrollment}>등록</button>
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
              <h2>신규 자재</h2>
              <button className="add">행 추가</button>
            </div>
            <div className={styles.table}>
              <div id="newTable" style={{ display: !bool ? true : 'none' }}></div>
            </div>
          </div>
          <div>
            <div className={styles.middle}>
              <h2>기존 자재</h2>
              <button onClick={showPopup} className="matAdd">
                자재 추가
              </button>
            </div>
            <div className={styles.table}>
              <HotTable
                className="htCenter"
                data={data}
                colHeaders={!bool ? column : false}
                rowHeaders={!bool}
                width="100%"
                height="100%"
                licenseKey="non-commercial-and-evaluation"
                stretchH="all"
                formulas={{
                  engine: hyperformulaInstance,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOMAdd;
