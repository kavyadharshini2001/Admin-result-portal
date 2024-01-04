import {BrowserRouter, Route, Routes} from "react-router-dom" ; 
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Login from "./Components/Login";


import { Toaster } from "react-hot-toast";
import Studentsdata from "./Components/Studentsdata";
import Studentslist from "./Components/Studentslist";
import Viewdata from "./Components/Viewdata";


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
  
    <Route path="/login" element={<Login/>}/>
    <Route path="/studentsdata" element={<Studentsdata/>}/>
    <Route path="/studentslist" element={<Studentslist/>}/>
    <Route path="/viewdata/:id" element={<Viewdata/>}/>
    
   </Routes>
   <Toaster/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
