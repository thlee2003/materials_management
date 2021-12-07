const mysql = require('mysql');

const db2 = mysql.createConnection({
  host: 'test-db1.ciazix1kercl.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'jeff0520',
  database: 'bom',
});

module.exports = db2;