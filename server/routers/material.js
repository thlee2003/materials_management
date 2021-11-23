const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/info', (req, res) => {
  const array = req.body.array;
  const length = req.body.abc;

  let str = '';
  for (let i = 1; i <= length; i++) {
    str += '(?)';
    if (i != length) {
      str += ',';
    }
  }

  console.log(str);

  const sqlQuery =
    'INSERT INTO material (material_code,classification,item_name,quantity,unit_price,total_amount,update_date,writer) VALUES ' + str;
  db.query(sqlQuery, array, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('등록 완료~!');
    }
  });
});

module.exports = app;
