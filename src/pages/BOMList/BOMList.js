import React, { useEffect, useState } from 'react';
import styles from './BOMList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

import axios from 'axios';

const BOMList = () => {
  const [bomList, usebomList] = useState([{ bom_name: '없음' }]);
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

  useEffect(() => {
    axios.get('http://localhost:5000/bom/BomData').then((response) => {
      console.log(response.data);
      usebomList(response.data);
    });
  }, []);

  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1>BOM 목록</h1>
        <div className={styles.content}>
          {bomList.map((a, index) => (
            <List key={index + 1} name={a.bom_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BOMList;
