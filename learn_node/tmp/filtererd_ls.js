var fileReader = require("fs")
var path = require('path')


var folder = "./learn_node/"
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