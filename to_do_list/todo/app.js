const express = require('express')
const app = express();


app.listen(8080, () => {
  console.log('server is connecting');
})

app.get('/', (req, res) => {
  // res.send('This is get method.');
  res.sendFile( __dirname + '/index.html'); // __dirname 指向當前的資料夾位置
})