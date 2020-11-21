const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  return "get notes";
};

const addNotes = function(title, body){
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note){
    return note.title === title
  })
  if(duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('NOTE is added!')
  } else{
    console.log('NOTE title taken!')
  }
}

const removeNotes = function(title){
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
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

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = function(){
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
  removeNotes
};
