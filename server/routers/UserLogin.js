const { default: axios } = require('axios');
const express = require('express');
const app = express.Router();
const db = require('../config/db');

axios.defaults.withCredentials = true;
app.all('/userLogin', (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;

  let sendData;
  const sqlQuery = 'SELECT * FROM user_login WHERE user_name = ? AND user_email = ? AND user_password = ?';
  db.query(sqlQuery, [userName, userEmail, userPassword], (err, result) => {
    if ((!err && result <= 0) || result === undefined) {
      console.log('로그인 실패');
    } else {
      console.log('로그인 성공');
      console.log(result[0]);
      sendData = {
        data: true,
        name: result[0].user_name,
        department: result[0].user_part,
      };
      res.send(sendData);
    }
  });
});

module.exports = app;
