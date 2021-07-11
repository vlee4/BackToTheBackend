//CommonJS: every file is a module (by default)
//ES6 Modules: Encapsulated Code (only share minimum)
const {pog, jill} = require('./4-names')
const sayHi = require('./5-utils')
const data = require("./6-alt")
require('./7-anotherAlt');
//When you import a module you invoke the code from that file

sayHi('susan')
sayHi(pog)
sayHi(jill)