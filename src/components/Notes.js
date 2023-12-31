import React, { useContext, useEffect, useRef ,useState} from "react";

import noteContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes ,editNote} = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})


  const handleClick=(e)=>{
    console.log("updating the note",note);
    editNote(note.id,note.etitle,note.edescription,note.etag)
    e.preventDefault();
    refClose.current.click()
  
  }

  const onchange=(e)=>{
    setNote({
      ...note,[e.target.name]:e.target.value
    })

  }




  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };


  return (
    <>
      <AddNote></AddNote>
      <button

        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onchange}
                    minLength={5} required
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onchange}
                    minLength={5} required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onchange}
                  />
                </div>

             
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
              disabled={note.etitle.length<5 || note.edescription.length<5}
              onClick={handleClick}  type="button" className="btn btn-primary">
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h1>Your Notes</h1>
        <div className="container mx-3">
          {notes.length===0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              note={note}
            ></Noteitem>
          );
        })}
      </div>
    </>
  );
}

export default Notes;
