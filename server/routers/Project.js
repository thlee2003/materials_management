const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/info', (req, res) => {
  const ProjectName = req.body.ProjectName;

  const sqlQuery =
    'CREATE TABLE ' +
    ProjectName +
    ' (num INT NOT NULL AUTO_INCREMENT PRIMARY key, material_code VARCHAR(100), classification VARCHAR(50), item_name VARCHAR(50), quantity varchar(50), unit_price VARCHAR(50), total_amount VARCHAR(100), update_date VARCHAR(50), writer VARCHAR(50))';
  db.query(sqlQuery, (err, result) => {
    if (result) {
      console.log(result);
    } else if (err) {
      console.log(err);
    }
  });
});

module.exports = app;
