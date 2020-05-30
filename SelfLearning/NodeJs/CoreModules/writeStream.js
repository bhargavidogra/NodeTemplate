const fs = require("fs");

const writeStream = fs.createWriteStream("./writestreamfile.md","UTF-8");


process.stdin.on("data",data=>{
    writeStream.write(data);
});