import React, { useEffect } from 'react';
import styles from './BOMList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
// import List from '../../components/List/List';

import axios from 'axios';

const BOMList = () => {
  // const [name, setName] = useState([]);

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
    });
  });

  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <div className={styles.content}>
          <h1>BOM 목록</h1>
          {/* {data.BOM.map((a) => (
            <List name={a.name} data={a.data} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BOMList;
