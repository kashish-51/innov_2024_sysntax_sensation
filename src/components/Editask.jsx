import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Showtask from './Showtask';

function Editask(props) {
  const context = useContext(NoteContext);
  const { notes, getNotes,editNote } = context;


  useEffect(() => {
    // Fetch notes when the component mounts or updates
    getNotes();
  }, []); // Empty dependency array to ensure effect runs only once after initial render


//   useEffect(() => {
// if(localStorage.getItem('token')){
//   getNotes();
// }
// else{
//   navigate("/login")
// }
//     // eslint-disable-next-line
//   }, [])


  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" , epriority: "", edate:""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, epriority: currentNote.priority, edate: currentNote.date })
  }

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag, note.epriority, note.edate);
    refClose.current.click();
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value })
  }


  return (
    <>


<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 my-5">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="priority" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="epriority" name="epriority" value={note.epriority} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Tag</label>
                  <input type="date" className="form-control" id="edate" name="edate" value={note.edate} onChange={onChange} minLength={5} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn bg-cyan-600 text-black" data-bs-dismiss="modal">Close</button>
              <button disable={note.etitle.length < 5 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn bg-cyan-400 text-black">Update note</button>
            </div>
          </div>
        </div>
      </div>









      <div className="row my-3">
        <h2 className=' text-2xl font-bold'>Your notes</h2>
        <div className="">
          {notes.map((note) => {
            return <Showtask key={note._id} updateNote={updateNote}  note={note} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Editask;
