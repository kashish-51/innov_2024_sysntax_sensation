import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sms from './Sms'
import { Link } from 'react-router-dom';

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
 
  <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-yellow " >
  <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#674188]  hover:underline">
      Add Task
  </h2>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#C3ACD0] bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl">
      <form className="space-y-6" onSubmit={handleSubmit} >
          <div className="my -5">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
              </label>
              <div className="mt-2 my-5">
                  <input
                  id="title" name="title" value={note.title} onChange={onChange} minLength={5} required
                      
                      type="text"
                    
                    
                      placeholder="Add task "
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
          </div>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
             Description
          </label>
          <div className="mt-2">
              <input
              id="description" 
              name="description" 
              value={note.description}
               onChange={onChange} 
               minLength={5} 
               required
               type="text"      
                  placeholder="Description please"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>

          <div className="flex items-center justify-between">
              <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                  Tag
              </label>
          </div>
          <div className="mt-2">
              <input
              id="tag"
               name="tag" 
               value={note.tag} 
               onChange={onChange}
               type="text"

              placeholder="Tag "
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
          <div className="my-4">
              <div className="flex items-center justify-between">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                      Date
                  </label>
              </div>
              <div className="mt-2">
                  <input
                  id="date"
                   name="date"
                    value={note.date}
                     onChange={onChange}
                     
                     type='date'    
                                       required
                      placeholder="Date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
              
          </div>
          <div className="flex items-center justify-between">
              <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900">
                  Priority
              </label>
          </div>
          <div className="mt-2">
              <input
              id="priority" 
              name="priority" 
              value={note.priority} 
              onChange={onChange}
  type="text"

              placeholder="Priority"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
          <div>
          <button type="submit" className="btn text-white bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" disabled={note.title.length < 5 || note.description.length < 5}>Add Task</button>

          </div>
      </form>
  </div>
</div>
  );
}

export default Addtask;






























