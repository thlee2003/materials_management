const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/info', (req, res) => {
  const BomName = req.body.BomName;
  const Data = req.body.Data;
  const length = req.body.length;

  const sqlQuery =
    'CREATE TABLE ' +
    BomName +
    ' (num INT NOT NULL AUTO_INCREMENT PRIMARY key, material_code VARCHAR(100), classification VARCHAR(50), item_name VARCHAR(50), quantity varchar(50), unit_price VARCHAR(50), total_amount VARCHAR(100), update_date VARCHAR(50), writer VARCHAR(50))';
  db.query(sqlQuery, (err, result) => {
    if (result) {
      console.log(result);
    } else if (err) {
      console.log(err);
    }
  });

  //행 추가 되었을때 DB 내에서 자동 증가
  let str = '';
  for (let i = 1; i <= length; i++) {
    str += '(?)';
    if (i != length) {
      str += ',';
    }
  }
  console.log(str);

  const sqlQuery2 =
    'INSERT INTO ' + BomName + ' (material_code,classification,item_name,quantity,unit_price,total_amount,update_date,writer) VALUES' + str;
  db.query(sqlQuery2, Data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('등록 완료');
    }
  });

  const sqlQuery3 = 'SELECT * FROM ' + BomName + '';
  db.query(sqlQuery3, (err, result) => {
    res.send(result);
  });
});

module.exports = app;
