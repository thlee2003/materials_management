const express = require('express');
const db = require('../config/db');
const app = express.Router();
const db1 = require('../config/db');
const db2 = require('../config/db2');

app.all('/BomName', (req, res) => {
    const bomname = req.body.bomname
    console.log(bomname)
    const sqlQuery = 'SELECT * FROM '+bomname+'';
    db2.query(sqlQuery, (err, result) => {
        console.log(result);
        res.send(result);
    })
})

module.exports = app;