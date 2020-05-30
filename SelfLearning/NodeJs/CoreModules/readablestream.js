const fs = require("fs");
const readStream = fs.createReadStream("./ReadMe.md");

let fileTxt = '';
console.log("type something...");

process.stdin.on("data",data=>{
    console.log(`i have ${data.length-1} characters of text`);
    fileTxt+=data;
});

readStream.once("data",data =>{
    console.log(data);
});

readStream.on("end",()=>{
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length - 1} characters of text`);
});