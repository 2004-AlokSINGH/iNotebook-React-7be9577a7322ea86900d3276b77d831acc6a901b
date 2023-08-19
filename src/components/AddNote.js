import React,{useContext,useState} from "react";
import noteContext from "../context/Notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title:"",description:"",tag:""})


  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})

  }

  const onchange=(e)=>{
    setNote({
      ...note,[e.target.name]:e.target.value
    })

  }

  
  return (
    <div>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onchange}
              minLength={5} required
            />
            <div id="emailHelp" className="form-text">

            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            Tag
            </label>
            <input
              type="text"
              minLength={5} required
              className="form-control"
              value={note.tag}
              id="tag"
              name='tag'
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name='description'
              onChange={onchange}
            />
          </div>
          
          <button disabled={note.title.length<5 || note.description.length<5}  type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
