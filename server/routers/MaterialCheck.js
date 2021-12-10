const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/check', (req, res) => {
  const code = req.body.code;

  console.log(code);

  let sendData;

  const sqlQuery = 'SELECT * FROM material WHERE material_code = ?';
  db.query(sqlQuery, [code], (err, result) => {
    if ((!err && result <= 0) || result === undefined) {
      console.log('동일 코드 존재하지 않음');
      sendData = {
        data1: true,
      };
      res.send(sendData);
    } else {
      sendData = {
        data1: false,
      };
      res.send(sendData);
    }
  });
});

module.exports = app;
