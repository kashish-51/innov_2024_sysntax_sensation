import NoteContext from "./NoteContext";
import {useState} from "react";

const NoteState = (props)=>{
  const host= "http://localhost:8000";
  const notesInitial=[]
  const[notes, setNotes] = useState(notesInitial);

//Get  all notes
const getNotes = async ()=>{
  //Api call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
     });
     const json = await response.json()
console.log(json)
setNotes(json)
}

//Add a note
const addNote = async (title,description,tag,priority,date)=>{
  //Api call
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST",   
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({title,description,tag,priority,date}), 
  });
const note = await response.json();
setNotes(notes.concat(note))
}

//Delete a note
const deleteNote = async (id)=>{
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE", 
   
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    }
  });
const json=  response.json();
  
  const newNotes = notes.filter((note)=>{return note._id!==id})  //id notes._is is not equal id them it will remain in there otherwise it will be deleted
setNotes(newNotes)
}



//Edit a note
const editNote =async  (id, title,description,tag,priority,date)=>{
  //Api call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT", 
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
   
    body: JSON.stringify({title,description,tag,priority,date}), 
  });
const json= await response.json();


let newNotes = JSON.parse(JSON.stringify(notes))

  //logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = newNotes[index];
    if(element._id===id){
      newNotes[index].title=title;
      newNotes[index].description=description;
      newNotes[index].tag=tag;
      newNotes[index].priority=priority;
      newNotes[index].date=date;
      break;
    }
 
  }
  setNotes(newNotes);
}
return (
    <NoteContext.Provider value={{notes, addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
)

}
export default  NoteState;

