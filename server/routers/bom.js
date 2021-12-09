const express = require('express');
const app = express.Router();
const db = require('../config/db');
const db2 = require('../config/db2'); 

app.post('/info', (req, res) => {
  const BomName = req.body.BomName;
  const Data = req.body.Data;
  const length1 = req.body.length1;
  const date = req.body.date;

  let sendData;
  const sqlQuery = 'SELECT * FROM bom where bom_name = ?';
  db.query(sqlQuery, [BomName], (err, result) => {
    // console.log(result);
    if(!err &&result <= 0 || result === undefined) {
      console.log('동일 코드 존재하지 않음');
      sendData = {
        data1: 'true',
      };
      res.send(sendData);

      //DB에 BomName만 저장
      const sqlQuery1 = 'INSERT IGNORE INTO bom (bom_name,update_date) VALUES (?,?)';
      db.query(sqlQuery1, [BomName, date], (err, result) => {
        if(err) {
          console.log(err);
        }
      });

      //BOM DB에 전체 내용 저장
      const sqlQuery2 = 'CREATE TABLE '+BomName+' (num INT NOT NULL AUTO_INCREMENT PRIMARY KEY, material_code VARCHAR(100), classification VARCHAR(100), item_name VARCHAR(100), manufacturer VARCHAR(100), quantity VARCHAR(100), unit_price VARCHAR(100), total_amount VARCHAR(100), update_date VARCHAR(100), user_name VARCHAR(100))';
      db2.query(sqlQuery2, (err, result) => {});

      let str1 = '';
      for (let i = 1; i <= length1; i++) {
        str1 += '(?)';
        if(i != length1) {
          str1 += ',';
        }
      }
      // console.log(Data)

      const sqlQuery3 = 'INSERT INTO ' + BomName + ' (material_code,classification,item_name,manufacturer,quantity,unit_price,total_amount,update_date,user_name) VALUES' + str1;
      // console.log(Data)
      db2.query(sqlQuery3, Data, (err, result) => {
        console.log(Data)
        if(err) {
          console.log(err);
        } else if(result) {
          console.log(result);
        }
      })
    } else {
      console.log('동일한 데이터가 존재합니다.');
      sendData = {
        data1: "false",
      }
      res.send(sendData);
    }
  })
});

module.exports = app;
