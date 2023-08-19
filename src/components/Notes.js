import React, { useContext } from "react";

import noteContext from '../context/Notes/noteContext'
import Noteitem from "./Noteitem";
function Notes() {
    const context=useContext(noteContext)
    const {notes,setNotes}=context
    
  return (
    <div>
        <div className="row">
     
        <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <Noteitem note={note}></Noteitem>
        })}
        </div>

        
    </div>
  )
}

export default Notes