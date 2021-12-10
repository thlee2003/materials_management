import React, { useEffect, useState } from 'react';
import styles from './ProduceList.module.css';

import { HotTable } from '@handsontable/react';

import Sidebar from '../../components/Sidebar/Sidebar';

import axios from 'axios';

const ProduceList = () => {
  const column = ['코드', '제품명', '분류', ' 수량', '금액', '날짜', '작성자'];
  const [table, setTable] = useState([]);
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
  useEffect(() => {
    axios.get('http://localhost:5000/product/productList').then((response) => {
      console.log(response.data);
      setTable(response.data);
    });
  }, []);
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>제품 목록</h1>
        <div className={styles.table}>
          <HotTable
            className="htCenter"
            data={table}
            colHeaders={column}
            rowHeaders={true}
            width="100%"
            height={730}
            licenseKey="non-commercial-and-evaluation"
            stretchH="all"
            columns={[
              { data: 'material_code' },
              { data: 'product_name' },
              { data: 'classification' },
              { data: 'quantity', type: 'numeric', numericFormat: { pattern: '0,0' } },
              { data: 'price', type: 'numeric', numericFormat: { pattern: '0,0' } },
              { data: 'update_date' },
              { data: 'writer' },
            ]}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default ProduceList;
