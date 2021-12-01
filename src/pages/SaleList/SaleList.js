import React from 'react';
import styles from './SaleList.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';

const SaleList = () => {
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '가격(총금액)', '판매 날짜', '이름', '주소', '연락처', 'e-mail'];
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
  let hotData = [];
  if (data) {
    data.sale.map((a) => hotData.push(a));
  } else {
    hotData = Handsontable.helper.createSpreadsheetData(1, column.length);
  }
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>판매 목록</h1>
        <div className={styles.table}>
          <HotTable
            className="htCenter"
            data={hotData}
            colHeaders={column}
            rowHeaders={true}
            width="100%"
            height="730"
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
            // readOnly
            columns={[{}, {}, {}, {}, {}, { type: 'numeric', numericFormat: { pattern: ' 0,0' } }, {}, {}, {}, {}, {}]}
          />
        </div>
      </div>
    </div>
  );
};
export default SaleList;
