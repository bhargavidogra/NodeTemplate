const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(`the file mname is ${path.basename(__filename)}`);