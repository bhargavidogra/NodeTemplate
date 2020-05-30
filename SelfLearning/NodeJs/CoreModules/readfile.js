const fs = require("fs");

//Sync way of reading files
// const text = fs.readFileSync("./ReadMe.md","UTF-8");
// console.log(text);


//Async way of reading files by calling a callback
const text = fs.readFile("./ReadMe.md","UTF-8",(err,text)=>{
    console.log("file contents read");
    console.log(text);
});
