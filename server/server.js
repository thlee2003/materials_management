const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const api = require('./routers/index')
const mysql = require('mysql');
const api = require('./routers/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jeff0520',
  database: 'management',
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  console.log(userName, userEmail);

  let sendData;
  if (userName && userEmail) {
    const sqlQuery = 'SELECT * FROM login WHERE user_name = ? AND user_id = ?';
    db.query(sqlQuery, [userName, userEmail], (err, results, fields) => {
      if (!err && results <= 0) {
        console.log('로그인에 실패하였습니다.');
        sendData = {
          data: 'false',
        };
        res.send(sendData);
      } else {
        console.log('로그인에 성공하였습니다.');
        sendData = {
          data: 'true',
        };
        res.send(sendData);
      }
    });
  }
  // const sqlQuery = "INSERT INTO login (user_name,user_id) VALUES (?,?)";
  // db.query(sqlQuery, [userName,userEmail], (err, result) => {
  //     res.send('success!');
  // });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
