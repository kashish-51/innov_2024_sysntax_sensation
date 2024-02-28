import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sms from './Sms'
const Addtask = (props) => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [note, setNote] = useState({ title: "", description: "", tag: "", priority: "", date: "" });
  const [noteAdded, setNoteAdded] = useState(false);

  const addNote = async (title, description, tag, date, priority) => {
    try {
      const response = await fetch(`http://localhost:8000/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZDhlNWI5N2ZjMGE4YzA1YzE2MTgxIn0sImlhdCI6MTcwOTAxOTI5M30.TAoTtoKsVGDbhSd6lQ1_SCxLjJKqIR721ZaoJJDtpOU"
        },
        body: JSON.stringify({ title, description, tag, date, priority }),
      });
      const newNote = await response.json();
      console.log(newNote);
      setNoteAdded(true);
      // Redirect to the showtask page using navigate
      navigate("/showtask");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag, note.date, note.priority);
    setNote({ title: "", description: "", tag: "", priority: "", date: "" });
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 mt-10">
    <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Add a Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
          <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
          <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
        </div>
        <div className="mb-4">
          <label htmlFor="tag" className="block text-sm font-semibold text-gray-600">Tag</label>
          <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-semibold text-gray-600">Priority</label>
          <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="priority" name="priority" value={note.priority} onChange={onChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold text-gray-600">Date</label>
          <input type="date" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="date" name="date" value={note.date} onChange={onChange} />
        </div>
        <button type="submit" className="btn text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" disabled={note.title.length < 5 || note.description.length < 5}>Add note</button>
        {/* <button><Sms/></button> */}
      </form>
    </div>
  </div>
  );
}

export default Addtask;































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import generateImage  from AiImageGenerator

// const Addtask = (props) => {
//   const navigate = useNavigate(); // Use useNavigate hook
//   const [note, setNote] = useState({ title: "", description: "", tag: "", priority: "", date: "" });
//   const [noteAdded, setNoteAdded] = useState(false);

//   const addNote = async (title, description, tag, date, priority) => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/notes/addnote`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVkZDhlNWI5N2ZjMGE4YzA1YzE2MTgxIn0sImlhdCI6MTcwOTAxOTI5M30.TAoTtoKsVGDbhSd6lQ1_SCxLjJKqIR721ZaoJJDtpOU"
//         },
//         body: JSON.stringify({ title, description, tag, date, priority }),
//       });
//       const newNote = await response.json();
//       console.log(newNote);
//       setNoteAdded(true);
//          // Call generateImage with the title
//     <generateImage title={title}/>;
//       // Redirect to the showtask page using navigate
//       navigate("/showtask");
//     } catch (error) {
//       console.error("Error adding note:", error);
//     }
//   };

//   const onChange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addNote(note.title, note.description, note.tag, note.date, note.priority);
//     setNote({ title: "", description: "", tag: "", priority: "", date: "" });
//   }

//   return (
//     <div className="flex justify-center items-center bg-gray-100 mt-10">
//     <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-5">Add a Note</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-semibold text-gray-600">Title</label>
//           <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-semibold text-gray-600">Description</label>
//           <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="tag" className="block text-sm font-semibold text-gray-600">Tag</label>
//           <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="tag" name="tag" value={note.tag} onChange={onChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="priority" className="block text-sm font-semibold text-gray-600">Priority</label>
//           <input type="text" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="priority" name="priority" value={note.priority} onChange={onChange} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="date" className="block text-sm font-semibold text-gray-600">Date</label>
//           <input type="date" className="form-input mt-1 block w-full border rounded-md focus:outline-none focus:border-cyan-400" id="date" name="date" value={note.date} onChange={onChange} />
//         </div>
//         <button type="submit" className="btn text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" disabled={note.title.length < 5 || note.description.length < 5}>Add note</button>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default Addtask;
