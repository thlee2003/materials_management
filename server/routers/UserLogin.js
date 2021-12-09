const { default: axios } = require('axios');
const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/userLogin', (req, res) => {
  axios.defaults.withCredentials = true;
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;

  let sendData;
  const sqlQuery = 'SELECT * FROM user_login WHERE user_name = ? AND user_email = ?';
  db.query(sqlQuery, [userName, userEmail], (err, result) => {
    if ((!err && result <= 0) || result === undefined) {
      console.log('로그인 실패');
    } else {
      console.log('로그인 성공');
      sendData = {
        data: true,
        name: userName,
      };
      res.send(sendData);
    }
  });
});

module.exports = app;
