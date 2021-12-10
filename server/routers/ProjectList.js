const express = require('express');
const app = express.Router();
const db3 = require('../config/db3');

app.all('/ProjectName', (req, res) => {
  const projectname = req.body.projectname;
  console.log(projectname);
  const sqlQuery = 'SELECT * FROM ' + projectname + '';
  db3.query(sqlQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

module.exports = app;
