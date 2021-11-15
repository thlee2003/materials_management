import React from 'react';
import styles from './AS.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

import data from '../../data.json';

const AS = () => {
  const column = ['코드', '제품명', '시리얼코드', '판매 방법', '수량', '날짜', '이름', '주소', '연락처', '수리비', '현황'];
  const links = [
    {
      to: '/AS',
      name: 'AS',
    },
  ];
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.list}>
        <h1 className={styles.h1}>AS 목록</h1>
        <Table height={730} column={column} data={data.AS} />
      </div>
    </div>
  );
};

export default AS;
