import React from 'react';
import styles from './ProjectList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Table from '../../components/Table/Table';
import List from '../../components/List/List';

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
      <div className={styles.div}>
        <div className={styles.content}>
          <h1>프로젝트 목록</h1>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
