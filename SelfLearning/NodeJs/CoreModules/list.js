const fs = require("fs");

console.log("Started reading files");
const files = fs.readdir("../Process",(err,files)=>{
    
    if(err){
        throw err;
    }
    
    console.log("Completed reading files");
    console.log(files);
});
