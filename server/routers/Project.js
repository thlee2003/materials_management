const express = require('express');
const app = express.Router();
const db = require('../config/db');
const db3 = require('../config/db3');

app.all('/info', (req, res) => {
  const ProjectName = req.body.ProjectName;
  const date = req.body.date;
  const bom = req.body.bom;
  const length = req.body.length;

  console.log(ProjectName);
  const sqlQuery1 = 'INSERT IGNORE INTO project (project_name,update_date) VALUES (?,?)';
  db.query(sqlQuery1, [ProjectName, date], (err, result) => {
    if (err) {
      console.log(err);
    }
  });

  const sqlQuery2 = 'CREATE TABLE ' + ProjectName + ' (num INT NOT NULL AUTO_INCREMENT PRIMARY KEY, bom_name VARCHAR(100))';
  db3.query(sqlQuery2, (err, result) => {});

  let str1 = '';
  for (let i = 1; i <= length; i++) {
    str1 += '(?)';
    if (i != length) {
      str1 += ',';
    }
  }
  let sendData;
  const sqlQuery3 = 'INSERT INTO ' + ProjectName + ' (bom_name) VALUES' + str1;
  db3.query(sqlQuery3, bom, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result) {
      console.log(result);
      sendData = {
        data: true,
      };
      res.send(sendData);
    }
  });
});

module.exports = app;
