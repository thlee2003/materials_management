const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.get('/data', (req, res) => {
  const sqlQuery = 'SELECT  material_code,classification,item_name,quantity,unit_price,total_amount,update_date,writer FROM material ORDER BY update_date DESC';
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    })
});

module.exports = app
  