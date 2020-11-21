const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  return "get notes";
};

const addNotes = (title, body) => {
  const notes = loadNotes();  
  const duplicateNote = notes.find(note => {
    return note.title === title
  })
  if(!duplicateNote){
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen('NOTE is added!'))
  } else{
    console.log(chalk.bgRed('NOTE title taken!'))
  }
}

const removeNotes = title => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => {
    return note.title !== title
  })
  // console.log(duplicateNotes.length)
  // console.log(notes.length)  
  if(duplicateNotes.length !== notes.length){
    saveNotes(duplicateNotes);
    console.log(chalk.bgGreen(`Note with a title: ${title} is removed`));
  } else{
    console.log(chalk.bgRed(`Note with a title: ${title} is not found`));
  }
}

const readNotes = title => {  
  const notes = loadNotes();
  const desiredNote = notes.find(note =>{
    return note.title === title;
  })
  if(desiredNote){
    console.log(chalk.bgGrey(`Title: ${desiredNote.title}`))
    console.log(chalk.yellowBright(`Body: ${desiredNote.body}`))
  }else{
    console.log(chalk.bgRed(`No note is found with title: ${title}`))
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue('Your Notes'));
  notes.forEach((note, index) => {
    console.log(chalk.yellow(`${index + 1}. ${note.title}`))
  })
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  }catch (e){
    return []
  }  
}

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes
};
