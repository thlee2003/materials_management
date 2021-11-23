
import axios from 'axios';
import React, { useState , useEffect} from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/login/AdminLogin').then((response) =>{
      console.log(response.data)
  }, [])
  
})

  return (
    <div className={styles.profile}>
      <h1 className={styles.p}>{name}</h1>
      <h1 className={styles.p1}>{group}</h1>
    </div>
  );
};

export default Profile;
