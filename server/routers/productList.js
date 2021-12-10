const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.get('/productList', (req, res) => {
  const sqlQuery = 'SELECT * FROM product ORDER BY update_date DESC';
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = app;
