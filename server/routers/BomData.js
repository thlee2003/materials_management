const express = require('express');
const app = express.Router();
const db = require('../config/db');

app.all('/BomData', (req, res) => {
    const BomData = req.body.BomData

    console.log(BomData)

    const sqlQuery = 'SELECT FROM '+BomData+'';
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    })
})


module.exports = app;