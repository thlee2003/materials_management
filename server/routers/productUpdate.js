const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/productUpdate', (req, res) => {
  const name = req.body.name;
  const quantity = req.body.quantity;
  console.log(name, quantity);
  const sqlQuery = 'UPDATE product SET quantity = ? WHERE product_name = ?';
  db.query(sqlQuery, [quantity, name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(true);
    }
  });
});

module.exports = app;
