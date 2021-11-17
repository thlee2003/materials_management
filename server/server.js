const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const mysql = require('mysql');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const db = mysql.createConnection({
  host: 'test-db1.ciazix1kercl.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
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
    const sqlQuery = 'SELECT * FROM admin_login WHERE user_name = ? AND user_id = ?';
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

app.post('/material', (req, res) => {
    const array = req.body.array;
    const length = req.body.abc
    
    let str = ''
    for(let i = 1; i <= length; i++) {
        str+='(?)'
        if (i != length) {
            str += ','
        }
    }
    console.log(str)
    const sqlQuery = 'INSERT INTO material (material_code,classification,item_name,quantity,unit_price,total_amount,update_date,writer) VALUES ' + str;
    db.query(sqlQuery, array, (err, results) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("등록 완료~!")
        }
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
