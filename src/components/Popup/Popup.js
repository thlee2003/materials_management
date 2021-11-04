import React from 'react';
import styles from './Popup.module.css';

import Table from '../Table/Table';

const Popup = ({ showPopup }) => {
  const onclick = () => {
    showPopup();
  };
  const add = () => {
    showPopup();
  };
  return (
    <div className={styles.div}>
      <div className={styles.top}>
        <h1>자재 추가</h1>
        <span onClick={onclick}>X</span>
      </div>
      <Table />
      <button onClick={add}>추가</button>
    </div>
  );
};

export default Popup;
