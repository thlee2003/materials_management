import React, { useEffect } from 'react';
import styles from './Main.module.css';

import Search from '../../components/Search/Search';
import Checkbox from '../../components/Checkbox/Checkbox';
import Table from '../../components/Table/Table';

import data from '../../data.json';
import axios from 'axios';

const Main = () => {
  const column = ['코드', '분류', '품목명', '수량', '단가', '총금액', '날짜', '작성자'];
  const check = ['PART', 'PBA', '반제품', '완제품'];

  useEffect(() => {
    axios.get('http://localhost:5000/material/data').then((response)=>{
      console.log(response);
    })
  }, []);


  return (
    <div className="main">
      <div className={styles.header}>
        <Search />
        <Checkbox check={check} />
      </div>
      <div className={styles.content}>
        <Table height={760} column={column} data={data.main} />
      </div>
    </div>
  );
};

export default Main;
