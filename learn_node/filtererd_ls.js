var fileReader = require("fs")
var path = require('path')


var folder = process.argv[2]
var ext = '.' + process.argv[3]


console.log("Going to read file" )

fileReader.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})


// path.extname
//
// extname(p)返回后缀名。
// 用法示例:
//
//   var path = require('path');
// path.extname('index.html');        //返回: '.html'
// path.extname('index.coffee.md');   //返回: '.md'
// path.extname('index');             //返回: ''