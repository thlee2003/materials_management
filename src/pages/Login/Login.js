import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

const Login = ({ setUserName, setDepartment }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onsubmit = (e) => {
    e.preventDefault();
    if (name === 'admin') {
      axios
        .post('http://localhost:5000/login/AdminLogin', {
          userName: name,
          userEmail: email,
        })
        .then((response) => {
          if (response.data.data1 === 'true') {
            setUserName(response.data.data2);
            history.push('/Main');
          } else {
            alert('로그인에 실패하였습니다.');
          }
        });
    } else {
      axios
        .post('http://localhost:5000/login/userLogin', {
          userName: name,
          userEmail: email,
          userPassword: password,
        })
        .then((response) => {
          if (response.data.data === true) {
            setUserName(response.data.name);
            setDepartment(response.data.department);
            history.push('/Main');
          }
        });
    }
  };
  return (
    <div>
      <form onSubmit={onsubmit} className={styles.login}>
        <input className={styles.input} placeholder="이름" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} placeholder="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className={styles.input}
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button}>로그인</button>
        <Link to="/res">
          <p>회원가입</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
