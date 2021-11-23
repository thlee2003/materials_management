const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;

const login = require('./routers/AdminLogin');
const material = require('./routers/material');
const MaterialData = require('./routers/MaterialData');
const bom = require('./routers/bom');
const BomData = require('./routers/BomData');
const project = require('./routers/Project');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/login', login);
app.use('/material', material);
app.use('/material', MaterialData);
app.use('/bom', bom);
app.use('/bom', BomData);
app.use('/project', project)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
