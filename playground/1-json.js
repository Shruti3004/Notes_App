const fs = require('fs');
// const book = {
//     title: 'GSOC-2021',
//     author: 'Shruti Agarwal'
// }
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData)

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name);

data.name = 'Shruti';
data.age = 19;
console.log(data);
fs.writeFileSync('1-json.json', JSON.stringify(data))