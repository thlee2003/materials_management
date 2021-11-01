import React from 'react';
import styles from './ProjectAdd.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const ProjectAdd = () => {
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
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <input className={styles.input} type="text" name="" id="" />
        <button className={styles.button}>등록</button>
        <div>
          <h1 className={styles.h1}>자재 목록</h1>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
