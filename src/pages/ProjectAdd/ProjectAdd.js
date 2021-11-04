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
        <div className={styles.top}>
          <h1>프로젝트 등록</h1>
          <input type="text" name="" id="" />
          <button>등록</button>
        </div>
        <div>
          <div className={styles.middle}>
            <h2>자재 목록</h2>
            <button>추가</button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
