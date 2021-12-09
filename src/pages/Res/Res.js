import React, { useState } from 'react';
import styles from './Res.module.css';

import axios from 'axios';

const Res = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedPw, setCheckedPw] = useState('');
  const [department, setDepartment] = useState('대표이사');
  const res = () => {
    if (password === checkedPw) {
      axios
        .post('http://localhost:5000/res/res', {
          name: name,
          email: email,
          password: password,
          department: department,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === true) {
            alert('회원가입 성공했습니다.');
            window.location.replace('/');
          }
        });
    }
  };
  return (
    <div className={styles.res}>
      <h1>회원가입</h1>
      <div className={styles.info}>
        <div className={styles.input}>
          <p>이름</p>
          <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.input}>
          <p>이메일</p>
          <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.input}>
          <p>비밀번호</p>
          <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.input}>
          <p>비밀번호 확인</p>
          <input type="password" placeholder="비밀번호 확인" value={checkedPw} onChange={(e) => setCheckedPw(e.target.value)} />
        </div>
        <div className={styles.input}>
          <label htmlFor="department">부서</label>
          <select name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="대표이사">대표이사</option>
            <option value="부설연구소">부설연구소</option>
            <option value="H/W">H/W</option>
            <option value="S/W">S/W</option>
            <option value="디자인">디자인</option>
            <option value="전략기획실">전략기획실</option>
            <option value="제조/관리">제조/관리</option>
            <option value="경영/회계">경영/회계</option>
            <option value="기획/마케팅">기획/마케팅</option>
            <option value="영업">영업</option>
          </select>
        </div>
      </div>
      <button onClick={res}>회원가입</button>
    </div>
  );
};

export default Res;
