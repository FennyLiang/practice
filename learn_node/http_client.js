var http = require("http");

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(8888);


http.get("http://127.0.0.1", (res) =>{

  res.setEncoding('utf8');
  res.on('data', console.log)
  res.on('error', console.log)

} ).on('error', console.log)