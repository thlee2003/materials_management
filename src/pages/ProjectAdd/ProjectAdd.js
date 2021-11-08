import React, { useState } from 'react';
import styles from './ProjectAdd.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import Popup from '../../components/Popup/Popup';

const ProjectAdd = () => {
  const [bool, setBool] = useState(false);
  const links = [
    {
      to: '/ProjectList',
      name: '프로젝트 목록',
    },
    {
      to: '/ProjectAdd',
      name: '프로젝트 등록',
    },
  ];
  const showPopup = () => {
    setBool(!bool);
  };
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        {bool ? <Popup showPopup={showPopup} /> : null}
        <div className={styles.top}>
          <h1>프로젝트 등록</h1>
          <input type="text" name="" id="" />
          <button>등록</button>
        </div>
        <div>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button onClick={showPopup}>추가</button>
          </div>
          {bool ? null : <Table />}
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
