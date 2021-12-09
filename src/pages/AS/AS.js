import React, { useEffect } from 'react';
import styles from './AS.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';

let hot;
const table = () => {
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '날짜', '이름', '주소', '연락처', '수리비', '현황', '수리내역'];
  const hyperformulaInstance = HyperFormula.buildEmpty();
  const container = document.getElementById('container');
  let hotData = [['', '', '', '', '', '', '', '', '', '', '', '수리내역']];

  hot = new Handsontable(container, {
    className: 'htCenter',
    data: hotData,
    colHeaders: column,
    rowHeaders: true,
    width: '100%',
    height: '730',
    licenseKey: 'non-commercial-and-evaluation',
    stretchH: 'all',
    columns: [
      {},
      {},
      {},
      {},
      { type: 'numeric' },
      {},
      {},
      {},
      {},
      {},
      { type: 'dropdown', source: ['AS 접수', '수리 중', '수리 완료'] },
      {},
    ],
  });

  hot.updateSettings({
    afterChange: function () {
      console.log(hotData);
    },
  });
};

const AS = () => {
  useEffect(() => {
    table();
  }, []);
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '날짜', '이름', '주소', '연락처', '수리비', '현황'];
  const links = [
    {
      to: '/AS',
      name: 'AS 목록',
    },
    {
      to: '/AddAS',
      name: 'AS 등록',
    },
    {
      to: '/AddASMTL',
      name: 'AS 자재 추가',
    },
  ];
  let hotData = [];
  if (data) {
    data.AS.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.list}>
        <h1 className={styles.h1}>AS 목록</h1>
        <div className={styles.table}>
          <div id="container"></div>
        </div>
      </div>
    </div>
  );
};

export default AS;
