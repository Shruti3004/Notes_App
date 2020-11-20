const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
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

// const command = process.argv[2];

// if(command === 'add'){
//     console.log('Adding Note!!!')
// }else{
//     console.log(command)
// }

// Customize version
yargs.version('1.1.0')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function (){
        console.log('Adding a new note')
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function (){
        console.log('Removing a new note')
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function (){
        console.log('Reading a new note')
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function (){
        console.log('Listing a new note')
    }
})

// Add, Remove, Read, List

// Difference between yargs and process
console.log(yargs.argv)
// console.log(process.argv)