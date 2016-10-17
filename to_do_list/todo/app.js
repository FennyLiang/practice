const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db;

//能夠將前端form表單的資料加入body變成json格式回傳回來
app.use(bodyParser.urlencoded({extended: true}));

//建立db連結
MongoClient.connect('mongodb://fenny:1234@ds059516.mlab.com:59516/anyone-quotes', (err, database) => {

  if(err) return console.log(err);

  db = database;//當我們從browser那邊處理requests時，允許使用資料庫

  app.listen(8080, () => {
    console.log('server is connecting');
  })

});



app.get('/', (req, res) => {
  // res.send('This is get method.');
  res.sendFile( __dirname + '/index.html'); // __dirname 指向當前的資料夾位置
})

app.post('/quotes', (req, res) => {

  db.collection('quotes').save(req.body, (err, result) => {

    if(err) return console.log(err);

    console.log('db saved!');
    res.redirect('/') //要記得轉回去原本的頁面

  })

})
