const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/info', (req, res) => {
    const array = req.body.array;
    const length = req.body.abc;
    console.log(array);

    let str = '';
    for (let i = 1; i <= length; i++) {
        str += '(?)';
        if (i != length) {
            str += ',';
        }
    }

    console.log(str, array, length);

    const sqlQuery =
        'INSERT IGNORE INTO material (material_code,classification,item_name,manufacturer,quantity,unit_price,total_amount,update_date,user_name) VALUES' +
        str;
    db.query(sqlQuery, array, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            console.log('등록 완료~!');
            res.send(true);
        }
    });
});

module.exports = app;
