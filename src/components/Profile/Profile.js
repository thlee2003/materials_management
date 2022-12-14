import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';

const Profile = ({ userName, department, logout }) => {
  const out = () => {
    logout();
  };
  return (
    <div className={styles.profile}>
      <h1 className={styles.p}>
        {userName}/{department}
      </h1>
      <button onClick={out}>๋ก๊ทธ์์</button>
    </div>
  );
};

export default Profile;
