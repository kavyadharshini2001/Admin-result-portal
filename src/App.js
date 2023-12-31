import {BrowserRouter, Route, Routes} from "react-router-dom" ; 
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Login from "./Components/Login";


import { Toaster } from "react-hot-toast";
import Studentsdata from "./Components/Studentsdata";
import Studentslist from "./Components/Studentslist";


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
  
    <Route path="/login" element={<Login/>}/>
    <Route path="/studentsdata" element={<Studentsdata/>}/>
    <Route path="/studentslist" element={<Studentslist/>}/>
    
   </Routes>
   <Toaster/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
