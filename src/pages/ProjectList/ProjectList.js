import React from 'react';
import styles from './ProjectList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';

const ProjectList = () => {
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
      <div className={styles.list}>
        <h1 className={styles.h1}>프로젝트 목록</h1>
        <Table />
      </div>
      <div className={styles.list2}>
        <h1 className={styles.h1}>자재 목록</h1>
        <Table />
      </div>
    </div>
  );
};

export default ProjectList;
