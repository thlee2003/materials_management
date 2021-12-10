import React, { useEffect, useState } from 'react';
import styles from './ProjectList.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import PJList from '../../components/PJList/PJList';

import axios from 'axios';

const ProjectList = () => {
  const [projectList, setProjectList] = useState([{ project_name: '없음' }]);
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
  useEffect(() => {
    axios.get('http://localhost:5000/project/ProjectData').then((response) => {
      console.log(response.data);
      setProjectList(response.data);
    });
  }, []);
  return (
    <div className={styles.header}>
      <Sidebar links={links} />
      <div className={styles.div}>
        <div className={styles.content}>
          <h1>프로젝트 목록</h1>
          {projectList.map((data, index) => (
            <PJList key={index + 1} name={data.project_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
