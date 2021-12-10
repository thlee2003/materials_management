import React, { useEffect, useState } from 'react';
import styles from './AddQuantity.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';

import data from '../../data.json';
import axios from 'axios';

const AddQuantity = () => {
  const [datalist, setDatalist] = useState('');
  const [add, setAdd] = useState(0);
  const [product, setProduct] = useState([]);
  let arr = [];
  let q = 0;
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
      response.data.map((data) => {
        arr.push(data);
      });
      setProduct(arr);
    });
  }, []);
  product.map((data) => {
    if (data.product_name === datalist) {
      console.log(datalist);
      q = data.quantity;
    }
  });
  const update = () => {
    let updateQuantity = +q + +add;
    console.log(datalist, updateQuantity);
    axios
      .post('http://localhost:5000/product/productUpdate', {
        name: datalist,
        quantity: updateQuantity,
      })
      .then((response) => {
        if (response.data === true) {
          alert('변경완료');
          window.location.reload();
        }
      });
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <h1 className={styles.h1}>수량 추가</h1>
        <div className={styles.datalist}>
          <h2>제품 선택</h2>
          <label htmlFor="quantity">제품명</label>
          <input type="text" list="list" id="quantity" value={datalist} onChange={(e) => setDatalist(e.target.value)} />
          <datalist id="list">
            {product.map((data, index) => {
              return <option key={index} value={data.product_name} />;
            })}
          </datalist>
        </div>
        <div className={styles.addQuantity}>
          <h2>수량 추가</h2>
          <div>
            <label>현재 수량</label>
            <input type="text" value={q} />
          </div>
          <div className={styles.input}>
            <label>추가 수량</label>
            <input type="number" value={add} onChange={(e) => setAdd(e.target.value)} />
          </div>
          <button onClick={update}>추가</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuantity;
