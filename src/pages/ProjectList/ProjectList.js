import React from 'react';
import styles from './ProjectList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

import data from '../../data.json';

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
          {data.project.map((a) => (
            <List name={a.name} data={a.data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
