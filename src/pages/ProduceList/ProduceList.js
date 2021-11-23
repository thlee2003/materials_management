import React from 'react';
import styles from './ProduceList.module.css';

import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';

const ProduceList = () => {
  const column = ['코드', '분류', '제품명', ' 수량', '금액', '날짜', '작성자'];
  const links = [
    {
      to: '/ProduceList',
      name: '제품 목록',
    },
    {
      to: '/AddQuantity',
      name: '수량 추가',
    },
    {
      to: '/ProduceAdd',
      name: '제품 등록',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>제품 목록</h1>
        <div className={styles.table}>
          <HotTable
            className="htCenter"
            data={data.produce}
            colHeaders={column}
            rowHeaders={true}
            width="100%"
            height={730}
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
          />
        </div>
      </div>
    </div>
  );
};

export default ProduceList;
