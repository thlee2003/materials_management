const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/AdminLogin', (req, res) => {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    console.log(userName, userEmail);
  
    let sendData;
    if (userName && userEmail) {
      const sqlQuery = 'SELECT * FROM admin_login WHERE user_name = ? AND user_id = ?';
      db.query(sqlQuery, [userName, userEmail], (err, results, fields) => {
        if (results <= 0) {
          console.log('로그인에 실패하였습니다.');
          sendData = {
            data1: 'false',
          };
          res.send(sendData);
        } else {
          console.log('로그인에 성공하였습니다.');
          sendData = {
            data1: 'true',
            data2: userEmail,
            data3: userName,
          };
          res.send(sendData);
        }
      });
    }
});

module.exports = app;