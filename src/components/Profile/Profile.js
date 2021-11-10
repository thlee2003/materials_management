import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h1 className={styles.p}>부서 </h1>
      <h1 className={styles.p1}>이름 </h1>
    </div>
  );
};

export default Profile;
