var http = require("http");

http.get(process.argv[2], (res) =>{

  res.setEncoding('utf8');
  res.on('data', console.log)
  res.on('error', console.log)

} ).on('error', console.log)


// http.get() 方法可以發起一個簡單的 GET 請求，可以簡化您的解決方法。 http.get() 的第一個參數是您想要發起GET請求的URL，
// 第二個參數是一個 callback 函式。
//
// 不像其他的 callback 函式，這個 callback 函式的語法如下：
//
// function callback (response) { /* ... */ }
// response 物件是一個 Node Stream（串流） 物件。您可以把 Node Streams 會發出事件（emit events）的物件來對待，
// 其中最常被用到的三個事件是「data」、「error」及「end」。您可以以底下的方法傾聽（listen）事件：
//
// response.on("data", function (data) { /* ... */ })
// 當有一批資料可以被處理的時候，「data」訊號將會被發出。這批資料的大小則視資料源所提供的資料而定。
//
// 從 http.get() 所取得的 response 物件/Stream 同樣有一個 setEncoding() 方法。如果您呼叫這個方法並給予「utf8」的參數，
// 「data」事件將會發出 String 以取代原先標準的 Node Buffer 物件，這樣您就不用特地把它轉換成 String 。