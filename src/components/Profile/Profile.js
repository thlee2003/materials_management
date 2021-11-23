import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ userName }) => {
  let a = String;
  let b = String;

  return (
    <div className={styles.profile}>
      <h1 className={styles.p}>{userName}</h1>
      <h1 className={styles.p1}>{b}</h1>
    </div>
  );
};

export default Profile;
