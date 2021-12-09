const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/res', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const department = req.body.department;

  const sqlQuery = 'INSERT INTO user_login (user_name, user_email, user_password, user_part) VALUES (?, ?, ?, ?)';
  db.query(sqlQuery, [name, email, password, department], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(true);
      console.log('회원가입 성공');
    }
  });
});

module.exports = app;
