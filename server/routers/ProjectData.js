const express = require('express');
const app = express.Router();
const db1 = require('../config/db');

app.get('/ProjectData', (req, res) => {
  const sqlQuery = 'SELECT project_name FROM project ORDER BY update_date DESC';
  db1.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = app;
