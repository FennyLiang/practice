const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(8080, () => {
  console.log('server is connecting');
})

app.get('/', (req, res) => {
  // res.send('This is get method.');
  res.sendFile( __dirname + '/index.html'); // __dirname 指向當前的資料夾位置
})

app.post('/quotes', (req, res) => {
  console.log(req.body);
})