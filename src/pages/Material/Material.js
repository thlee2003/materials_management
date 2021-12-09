import React, { useEffect } from 'react';
import styles from './Material.module.css';
import Handsontable from 'handsontable';
import axios from 'axios';

import { HyperFormula } from 'hyperformula';

// 테이블 생성 함수
let hot;
const table = (userName) => {
  const column = ['코드', '분류', '품목명', '제조사', ' 수량', '단가(부가세 별도)', '총금액', '날짜', '작성자'];
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const container = document.getElementById('table');

  // 날짜 생성
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  const hotData = [['', '', '', '', 0, 0, '=PRODUCT(E1:F1)', `${year}-${month}-${day}`, 'admin']];

  // 테이블 옵션
  hot = new Handsontable(container, {
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
      {
        type: 'numeric',
        readOnly: true,
      },
      { readOnly: true },
      { readOnly: true },
    ],
    fixedRowsBottom: 1,
    formulas: {
      engine: hyperformulaInstance,
      sheetName: 'Sheet1',
    },
  });

  let num = hot.countRows();
  // 합계
  hot.alter('insert_row', hot.countRows());
  hot.setDataAtCell(hot.countRows() - 1, 6, '=SUM(G1:G' + (hot.countRows() - 1) + ')');

  // 셀 추가
  let add = document.querySelector('.add');
  add.addEventListener('click', function () {
    let data = ['', '', '', '', 0, 0, '=PRODUCT(E' + hot.countRows() + ':F' + hot.countRows() + ')', `${year}-${month}-${day}`, 'admin'];
    hot.alter('insert_row', hot.countRows() - 1, 1);
    for (let i = 0; i < 9; i++) {
      hot.setDataAtCell(hot.countRows() - 2, i, data[i]);
    }
    num += 1;
  });

  // 셀 삭제
  let del = document.querySelector('.del');
  del.addEventListener('click', function () {
    if (hot.countRows() !== 2) {
      hot.alter('remove_row', num - 1, 1);
      num -= 1;
    }
  });

  // 업데이트시 값 적용
  hot.updateSettings({
    afterCreateRow: function (i) {
      hot.setDataAtCell(hot.countRows() - 1, 6, '=SUM(G1:G' + (hot.countRows() - 1) + ')');
      hot.setDataAtCell(i - 1, 0, '');
    },
  });

  // DB 저장
  let enrollment = document.querySelector('.enrollment');
  let bool = true;
  enrollment.addEventListener('click', function () {
    hotData.pop();
    hotData.forEach((data) => {
      if (data[0] === '' || data[1] === '' || data[2] === '' || data[3] === '' || data[4] === 0 || data[5] === 0) {
        bool = false;
        alert('내용을 입력하세요!');
        console.log(bool);
      }
    });
    console.log(bool);
    if (bool) {
      axios
        .post('http://localhost:5000/material/info', {
          abc: hotData.length,
          array: hotData,
        })
        .then((response) => {
          alert('등록 완료!');
          if (response.data === true) {
            window.location.reload();
          }
        });
    }
  });
};

const Material = ({ userName }) => {
  // 테이블 삽입
  useEffect(() => {
    table(userName);
  }, []);
  return (
    <div className={styles.header}>
      <div className={styles.div}>
        <div className={styles.top}>
          <h1 className={styles.h1}>자재 등록</h1>
          <div className={styles.button}>
            <button className="add">행 추가</button>
            <button className="del">행 삭제</button>
            <button className="enrollment">등록</button>
          </div>
        </div>
        <div className={styles.table}>
          <div id="table"></div>
        </div>
      </div>
    </div>
  );
};

export default Material;
