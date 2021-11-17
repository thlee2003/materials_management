import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   axios.get("http://localhost:5000/login", {
  //     userName: name,
  //     userEmail: email
  //   }).then((response)=> {
  //     console.log(response.data);
  //   })
  // }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', {
        userName: name,
        userEmail: email,
      })
      .then((response) => {
        if (response.data.data === 'true') {
          window.location.replace('/Main');
        } else {
          alert('로그인에 실패하였습니다.');
        }
      });
  };
  return (
    <div>
      <form onSubmit={onsubmit} className={styles.login}>
        <input className={styles.input} placeholder="이름" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} placeholder="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={styles.button}>로그인</button>
      </form>
    </div>
  );
};

export default Login;
