const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.post('/product', (req, res) => {
  const material_code = req.body.material_code;
  const product_name = req.body.product_name;
  const classification = req.body.classification;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const update_date = req.body.update_date.split('T')[0];
  const writer = req.body.writer;
  console.log(product_name, classification, price, update_date);
  let sendDate = {};

  const sqlQuery =
    'INSERT INTO product (material_code, product_name, classification, quantity, price, update_date, writer) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sqlQuery, [material_code, product_name, classification, quantity, price, update_date, writer], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      sendDate = { data: true };
      res.send(sendDate);
    }
  });
});

module.exports = app;
