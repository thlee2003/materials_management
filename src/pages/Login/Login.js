import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    window.location.replace('/Main');
  };
  return (
    <div>
      <form onSubmit={onsubmit} className={styles.login}>
        <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className={styles.button}>로그인</button>
      </form>
    </div>
  );
};

export default Login;
