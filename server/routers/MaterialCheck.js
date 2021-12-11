const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/check', (req, res) => {
    const code = req.body.code;

    for (let i in code) {
        code[i] = JSON.stringify(code[i]);
    }

    // console.log(code.join());

    const sqlQuery = 'SELECT * FROM material WHERE material_code IN (' + code.join() + ')';
    console.log(sqlQuery);
    db.query(sqlQuery, (err, result) => {
        console.log(result.length);
        if (result.length === 0) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

module.exports = app;
