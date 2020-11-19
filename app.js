const validator = require('validator');
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('mail2shruti.ag@gmail.com'))
console.log(validator.isURL('mail2shruti.ag@gmail.com'))