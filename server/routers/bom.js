const express = require('express');
const app = express.Router();
const db = require('../config/db');
const db2 = require('../config/db2'); 

app.post('/info', (req, res) => {
  const BomName = req.body.BomName;
  const Data = req.body.Data;
  const length = req.body.length;
  const date = req.body.date;

  //db 1번(management db -> bom table 이름 및 날짜 추가)
  const sqlQuery = "INSERT INTO bom (bom_name,update_date) VALUES (?,?)";
  db.query(sqlQuery, [BomName, date], (err, result) => {
    if(err) {
      console.log(err)
    }
  })

  //db 2번
  const sqlQuery2 = 'CREATE TABLE ' + BomName + ' (num INT NOT NULL AUTO_INCREMENT PRIMARY key, material_code VARCHAR(100), classification VARCHAR(50), item_name VARCHAR(50), quantity varchar(50), unit_price VARCHAR(50), total_amount VARCHAR(100), update_date VARCHAR(50), writer VARCHAR(50))';
  db2.query(sqlQuery2, (err, result) => {
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

  const sqlQuery3 = 'INSERT INTO ' + BomName + ' (material_code,classification,item_name,quantity,unit_price,total_amount,update_date,writer) VALUES' + str;
  db2.query(sqlQuery3, Data, (err, result) => {
    console.log('등록 완료');
  });   
});

module.exports = app;
