import Models, { User, Book } from './Models'

var rModels = require('./Models')

var test = new User()
test.print()

var test1 = new Models.User()
test1.print()

var test2 = new rModels.User()
test2.print()

var test3 = new Book()
test3.print()

//
// var test2 = new Test2()
// test2.print()
//
//

