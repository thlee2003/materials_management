const express = require('express');
const app = express.Router();
const db1 = require('../config/db');
const db2 = require('../config/db2');

app.get('/BomData', (req, res) => {
  const sqlQuery = 'SELECT bom_name FROM bom ORDER BY update_date DESC';
  db1.query(sqlQuery, (err, result) => {
    if(err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = app;
