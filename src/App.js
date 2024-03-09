import './App.css';
import Signup from './screens/Signup';

import Main from './screens/Main'

import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Showtask from './components/Showtask';
import Addtask from './components/Addtask';
import Home from './screens/Home'
import Cursor from './components/Cursor';
import NoteState from './context/notes/NoteState';
import Editask from './components/Editask';
   
  
function App() {
  return (  

          <div className="">
            <NoteState>
            <Router>
              <div className="container">
                <Cursor/>
                <Routes >
                  <Route exact path="/" element={<Home/>}> </Route>
                  <Route exact path="/login" element={<Login/>}> </Route>
                  <Route exact path="/signup" element={<Signup/>}> </Route>
                  <Route exact path="/Main" element={<Main/>}> </Route>
                  <Route exact path="/Addtask" element={<Addtask/>}> </Route>
                  <Route exact path="/Editask" element={<Editask/>}> </Route>
                  <Route exact path="/Showtask" element={<Showtask/>}> </Route>
                  {/* <Route exact path="/login || /signup" element={<Main/>}> </Route> */}

                </Routes>
              </div>
            </Router>
            </NoteState>
        </div>
                 
  );
}

export default App;