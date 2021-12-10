import React, { useState } from 'react';
import styles from './PJList.module.css';

import List from '../List/List';
import axios from 'axios';

const PJList = ({ name }) => {
  const [bool, setBool] = useState(false);
  const [bom, setBom] = useState([]);
  const onclick = () => {
    setBool(!bool);
    axios
      .post('http://localhost:5000/project/ProjectName', {
        projectname: name,
      })
      .then((response) => {
        console.log(response.data);
        setBom(response.data);
      });
  };

  return (
    <div className={styles.list}>
      <div className={styles.name}>
        <span>{bool === false ? '|||' : 'X'}</span>
        <label onClick={onclick}>{name}</label>
      </div>
      <div className={bool === true ? styles.container.show : styles.container}>
        {bom.map((data) => (
          <List name={data.bom_name} />
        ))}
      </div>
    </div>
  );
};
export default PJList;
