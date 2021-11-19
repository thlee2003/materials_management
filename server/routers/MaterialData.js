const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.get('/data', (req, res) => {
  const sqlQuery = 'SELECT * FROM material';
    db.query(sqlQuery, (err, result) => {
      res.send(result);
    })

  // const check0 = req.body.check0;
  // const check1 = req.body.check1;
  // const check2 = req.body.check2;
  // const check3 = req.body.check3;

  // if(check0 && check1 && check2 && check3) {
  //   const sqlQuery = 'SELECT * FROM material';
  //   db.query(sqlQuery, (err, result) => {
  //     res.send(result);
  //   })
  // }

  // else if(check3) {
  //   const sqlQuery1 = 'SELECT * FROM material WHERE classification = "완제품"'
  //   db.query(sqlQuery1, (err, result) => {
  //     if(err) {
  //       console.log(err);
  //     } else {
  //       console.log("check 실행 완료");
  //     }
  //   });
  // };
});

module.exports = app
  