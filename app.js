const validator = require('validator');
const chalk = require('chalk');
// const getNotes = require("./notes");

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail('mail2shruti.ag@gmail.com'))
// console.log(validator.isURL('mail2shruti.ag@gmail.com'))
// console.log(chalk.redBright.bold.inverse('Hello World'));

// Taking the inputs from command prompt
// just like we have window in javascript same as process in node.js
// it always provide two arrays in the aray 1st from where this node execution is taking place and second the loaction of directory
// console.log(process.argv)

const command = process.argv[2];

if(command === 'add'){
    console.log('Adding Note!!!')
}else{
    console.log(command)
}