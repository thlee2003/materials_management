const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/res', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const department = req.body.department;

  let sendData;

  const sqlQuery1 = 'SELECT * FROM user_login where user_email = ?';
  db.query(sqlQuery1, [email], (err, result) => {
    if(!err &&result <= 0 || result === undefined) {
      console.log('동일 email 존재하지 않음');
      sendData = {
        data1: 'true',
      };
      res.send(sendData); 

      const sqlQuery = 'INSERT IGNORE  INTO user_login (user_name, user_email, user_password, user_part) VALUES (?, ?, ?, ?)';
      db.query(sqlQuery, [name, email, password, department], (err, result) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      sendData = {
        data1: 'false',
      }
      res.send(sendData);
    }
  })
});

module.exports = app;
