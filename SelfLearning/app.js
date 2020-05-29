//Everthing on global object is availble to us globally
const counter = require('./NodeJs/CoreModules/myModule');

let hello = "Hello world form Node js";
global.console.log(hello);

counter.inc();
counter.inc();
console.log(counter.getCount());
counter.dec();
console.log(counter.getCount());


