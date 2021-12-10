const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const session = require('express-session');
const cookieParser = require('cookie-parser');

const login = require('./routers/AdminLogin');
const userLogin = require('./routers/UserLogin');
const res = require('./routers/User');
const material = require('./routers/material');
const MaterialData = require('./routers/MaterialData');
const MaterialCheck = require('./routers/MaterialCheck');
const bom = require('./routers/bom');
const BomData = require('./routers/BomData');
const BomList = require('./routers/BomList');
const project = require('./routers/Project');
const projectData = require('./routers/ProjectData');
const projectList = require('./routers/ProjectList');
const product = require('./routers/prodcut');
const productList = require('./routers/productList');
const productUpdate = require('./routers/productUpdate');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: 'loginData',
    secret: 'testSecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use('/login', login);
app.use('/login', userLogin);
app.use('/res', res);
app.use('/material', material);
app.use('/material', MaterialData);
app.use('/material', MaterialCheck);
app.use('/bom', bom);
app.use('/bom', BomData);
app.use('/bom', BomList);
app.use('/project', project);
app.use('/project', projectData);
app.use('/project', projectList);
app.use('/product', product);
app.use('/product', productList);
app.use('/product', productUpdate);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
