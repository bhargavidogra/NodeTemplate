// process.stdout.write("hello ");
// process.stdout.write("World \n\n\n");

const question = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const ask =(i=0) =>{
    process.stdout.write(`\n\n\n ${question[i]}`);
    process.stdout.write(`>`);
};

ask();

const answers =[];
process.stdin.on("data",data =>{
    answers.push(data.toString().trim());
    // process.exit();
    if(answers.length<question.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});


process.on("exit",()=>{
    const [name,activity,lang]=answers;
    console.log(`
    Thank you for your answers. 
    Go ${activity} ${name} you can write ${lang} code later!!!`);
});