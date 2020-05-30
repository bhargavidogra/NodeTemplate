console.log(process.pid);
console.log(process.argv);

const [,,firstName,lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);
