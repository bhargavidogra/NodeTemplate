const fs = require("fs");

const md = `
#This is a new file

writing text to file
`;

fs.writeFile("./notes.md",md.trim(),err=>{
    if(err){
        throw err;
    }
    console.log("file Saved");
});