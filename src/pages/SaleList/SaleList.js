import React from 'react';
import styles from './SaleList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

import data from '../../data.json';

const SaleList = () => {
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '가격', '날짜', '이름', '주소', '연락처', 'e-mail', '현황'];
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
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>판매 목록</h1>
        <Table height={730} column={column} data={data.sale} />
      </div>
    </div>
  );
};
export default SaleList;
